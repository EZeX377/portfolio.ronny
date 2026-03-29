"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.5,
      lerp: 0.08,
      smooth: true,
      wheelMultiplier: 1.2,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href")?.startsWith("#")) {
        const id = target.getAttribute("href");
        if (!id) return;
        
        e.preventDefault();
        
        if (id === "#") {
          lenis.scrollTo(0, {
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          });
        } else {
          lenis.scrollTo(id, {
            offset: -32,
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}