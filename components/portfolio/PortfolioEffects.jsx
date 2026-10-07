"use client";
import { useEffect, useRef } from "react";
import { animate, inView, useMotionValueEvent, useScroll } from "framer-motion";
import { useAnimate } from "framer-motion/mini";
import { usePortfolio } from "./PortfolioProvider";

export default function PortfolioEffects() {
  const [, animateStyles] = useAnimate();
  const { motionEnabled, initialized } = usePortfolio();
  const { scrollY: position } = useScroll();
  const paintRef = useRef(() => {});
  useMotionValueEvent(position, "change", () => paintRef.current());

  useEffect(() => {
    if (!initialized) return;
    const root = document.documentElement;
    const hero = document.querySelector('[data-slot~="hero-art"]');
    const skills = document.querySelector('#skills');
    if (!hero || !skills) return;
    root.dataset.ready = "true";
    let folded = false, geometry, disposed = false, heroAnimation, skillsAnimation;
    const pulses = new Set();
    const flowCleanup = [];
    const connections = inView('[data-slot~="skill-coordination"], [data-slot~="skill-infrastructure"]', element => {
      if (!motionEnabled) return;
      const paths = [...element.querySelectorAll('[data-slot~="connection-flow"]')];
      const card = element.closest('[data-slot~="skill-card"]') || element.parentElement;
      let visible = true;
      const active = new Set();
      const stop = () => {
        active.forEach(pulse => { pulse.stop(); pulses.delete(pulse); });
        active.clear();
        paths.forEach(path => { path.style.removeProperty('opacity'); path.style.removeProperty('stroke-dashoffset'); });
      };
      const play = () => {
        if (!visible) return;
        // Entering the card replays the signal; crossing its children does not.
        stop();
        paths.forEach((path, index) => {
          const pulse = animateStyles(path, { strokeDashoffset: [110, 84.8, -53.8, -100], opacity: [0, .8, .8, 0] }, {
            duration: 3, delay: index * .65, ease: 'linear', times: [0, .12, .78, 1],
          });
          pulses.add(pulse); active.add(pulse);
          pulse.then(() => { pulses.delete(pulse); active.delete(pulse); });
        });
      };
      card.addEventListener('pointerenter', play);
      const cleanup = () => { visible = false; stop(); card.removeEventListener('pointerenter', play); };
      flowCleanup.push(cleanup);
      play();
      return cleanup;
    }, { amount: .4 });
    const measure = () => {
      const available = innerHeight - document.querySelector('[data-slot~="site-header"]').offsetHeight;
      const top = hero.getBoundingClientRect().top + scrollY;
      geometry = {
        start: Math.max(0, top - (innerHeight - available) - Math.max(12, (available - Math.min(hero.offsetHeight, available)) / 2)),
        distance: Math.max(180, Math.min(360, available * .4)),
        skillsTop: skills.getBoundingClientRect().top + scrollY, skillsHeight: skills.offsetHeight,
      };
    };
    const clamp = value => Math.max(0, Math.min(1, value));
    const paint = () => {
      const progress = clamp((scrollY - geometry.start) / geometry.distance);
      const next = !folded && progress >= .2 ? true : folded && progress <= .05 ? false : folded;
      if (next !== folded || !heroAnimation) {
        folded = next; heroAnimation?.stop();
        heroAnimation = animate(root, { '--hero-scroll': motionEnabled && folded ? 1 : 0 }, { duration: motionEnabled ? .85 : 0, ease: [.22, 1, .36, 1] });
      }
      skillsAnimation?.stop();
      skillsAnimation = animate(root, { '--skills-scroll': motionEnabled ? clamp((scrollY + innerHeight * .7 - geometry.skillsTop) / (geometry.skillsHeight + innerHeight * .4)) : 0 }, { duration: motionEnabled ? .15 : 0, ease: 'linear' });
    };
    const resize = () => { measure(); paint(); };
    resize(); paintRef.current = paint;
    window.addEventListener('resize', resize, { passive: true });
    const observer = new ResizeObserver(resize);
    observer.observe(hero); observer.observe(skills);
    document.fonts.ready.then(() => { if (!disposed) resize(); });
    return () => {
      disposed = true; paintRef.current = () => {};
      observer.disconnect(); connections(); heroAnimation?.stop(); skillsAnimation?.stop();
      flowCleanup.forEach(cleanup => cleanup());
      pulses.forEach(pulse => pulse.stop());
      window.removeEventListener('resize', resize);
      delete root.dataset.ready;
      root.style.removeProperty('--hero-scroll'); root.style.removeProperty('--skills-scroll');
    };
  }, [motionEnabled, initialized, animateStyles]);
  return null;
}
