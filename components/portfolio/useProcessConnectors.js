"use client";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useAnimate } from "framer-motion/mini";
import { usePortfolio } from "./PortfolioProvider";

export function useProcessConnectors(sectionRef, chapter) {
  const [, animate] = useAnimate();
  const visible = useInView(sectionRef, { amount: .1 });
  const { initialized, motionEnabled } = usePortfolio();
  useEffect(() => {
    const stage = sectionRef.current?.querySelector('[data-slot~="process-stage"]');
    if (!initialized || !stage) return;
    const diagrams = stage.querySelectorAll('[data-slot~="scope-study"], [data-slot~="method-diagram"]');
    const controls = [];
    const touched = [];
    diagrams.forEach((diagram, index) => {
      const active = chapter === index;
      const routes = diagram.querySelectorAll('[data-slot~="scope-route"], [data-slot~="connector-route"]');
      const arrows = diagram.querySelectorAll('[data-slot~="flow-arrow"]');
      routes.forEach((route, routeIndex) => {
        touched.push(route);
        if (!motionEnabled) return;
        route.style.strokeDashoffset = active && visible ? '100' : '';
        if (active && visible) controls.push(animate(route, { strokeDashoffset: [100, 0] }, {
          duration: .85, delay: .15 + routeIndex * .1, ease: [.22, 1, .36, 1],
        }));
      });
      arrows.forEach((arrow, arrowIndex) => {
        touched.push(arrow);
        if (!motionEnabled) return;
        arrow.style.opacity = active && visible ? '0' : '';
        if (active && visible) {
          const style = getComputedStyle(arrow);
          const x = style.getPropertyValue('--arrow-x').trim() || '0px';
          const y = style.getPropertyValue('--arrow-y').trim() || '0px';
          controls.push(animate(arrow, { opacity: [0, 1], transform: [`translate(${x}, ${y})`, 'translate(0px, 0px)'] }, {
            duration: .65, delay: .7 + arrowIndex * .05, ease: [.22, 1, .36, 1],
          }));
        }
      });
    });
    return () => {
      controls.forEach(control => control.stop());
      touched.forEach(element => ['stroke-dashoffset', 'opacity', 'transform'].forEach(property => element.style.removeProperty(property)));
    };
  }, [sectionRef, chapter, visible, initialized, motionEnabled, animate]);
}
