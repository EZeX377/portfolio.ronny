"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll component using the latest Lenis API (1.1+).
 * Handles global document scrolling with auto-RAF and built-in anchor navigation.
 * 
 * Documentation: https://github.com/darkroomengineering/lenis
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. Initialize Lenis with the new modern API
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1.1,
      smoothWheel: true,
      autoRaf: true, // Automatically handles requestAnimationFrame
      anchors: {
        offset: 20, // Matches the scroll-margin-top/navbar height
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      },
      prevent: (node) => node.closest("[data-lenis-prevent]"),
      stopInertiaOnNavigate: true,
    });

    // 2. Handle initial hash navigation after layout stabilization
    if (window.location.hash) {
      const hash = window.location.hash;
      requestAnimationFrame(() => {
        lenis.scrollTo(hash, {
          offset: -96,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      });
    }

    // 3. Automated cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}