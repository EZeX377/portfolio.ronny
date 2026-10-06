"use client";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";

export const statusLabels = ["DEFINING THE INTENT", "FINDING THE STRUCTURE", "COMPOSING THE INTERFACE", "CONNECTING THE DELIVERY"];
const clamp = value => Math.max(0, Math.min(1, value));

export function useProcessSequence() {
  const { motionEnabled } = usePortfolio();
  const sectionRef = useRef(null);
  const geometryRef = useRef(null);
  const chapterRef = useRef(0);
  const manualRef = useRef(0);
  const overrideRef = useRef(null);
  const [chapter, setChapter] = useState(0);
  const paintRef = useRef(() => {});
  const { scrollY: position } = useScroll();
  useMotionValueEvent(position, "change", () => paintRef.current());
  const choose = index => { chapterRef.current = index; setChapter(index); };

  useEffect(() => {
    const root = document.documentElement;
    const section = sectionRef.current;
    const sticky = section.querySelector("[data-slot~=\"theatre-sticky\"]");
    const track = section.querySelector("[data-slot~=\"theatre-scroll\"]");
    const header = document.querySelector("[data-slot~=\"site-header\"]");
    let disposed = false;
    manualRef.current = chapterRef.current;
    overrideRef.current = null;
    const measure = () => {
      const available = innerHeight - header.offsetHeight;
      const panelHeight = sticky.offsetHeight;
      const pinned = motionEnabled && panelHeight <= available - 24;
      const pinTop = header.offsetHeight + Math.max(12, (available - panelHeight) / 2);
      const distance = Math.max(600, Math.min(900, available * 1.05));
      root.style.setProperty("--process-panel-height", `${panelHeight}px`);
      root.style.setProperty("--process-scroll-distance", `${distance}px`);
      root.style.setProperty("--process-pin-top", `${pinTop}px`);
      root.dataset.processPinned = String(pinned);
      geometryRef.current = {
        pinned, distance,
        top: pinned ? track.getBoundingClientRect().top + scrollY - pinTop : section.getBoundingClientRect().top + scrollY - header.offsetHeight,
        sectionHeight: section.offsetHeight,
      };
    };
    const paint = () => {
      const g = geometryRef.current;
      let override = overrideRef.current;
      if (override && (scrollY + innerHeight < g.top || scrollY > g.top + g.sectionHeight)) override = overrideRef.current = null;
      if (!g.pinned) { choose(manualRef.current); return; }
      const progress = clamp(override ? override.progress + (scrollY - override.top) / g.distance : (scrollY - g.top) / g.distance);
      let next = chapterRef.current;
      while (next < 3 && progress >= (next + 1) / 4 + .015) next++;
      while (next > 0 && progress < next / 4 - .015) next--;
      choose(next);
    };
    const resize = () => { measure(); paint(); };
    measure(); paint();
    paintRef.current = paint;
    window.addEventListener("resize", resize, { passive: true });
    const observer = new ResizeObserver(resize);
    observer.observe(sticky); observer.observe(header);
    document.fonts.ready.then(() => { if (!disposed) resize(); });
    return () => {
      disposed = true; paintRef.current = () => {}; observer.disconnect();
      window.removeEventListener("resize", resize);
      delete root.dataset.processPinned;
      ["--process-panel-height", "--process-scroll-distance", "--process-pin-top"].forEach(name => root.style.removeProperty(name));
    };
  }, [motionEnabled]);

  const selectChapter = index => {
    overrideRef.current = geometryRef.current?.pinned ? { progress: (index + .5) / 4, top: scrollY } : null;
    manualRef.current = index;
    choose(index);
  };
  return { sectionRef, chapter, selectChapter };
}
