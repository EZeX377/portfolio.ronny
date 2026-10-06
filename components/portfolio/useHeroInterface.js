"use client";
import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "./PortfolioProvider";
import { heroStates, heroSupporting } from "./heroStates";

export function useHeroInterface() {
  const { motionEnabled } = usePortfolio();
  const artRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const active = motionEnabled && visible && pageVisible;

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden);
    const hide = () => setPageVisible(false);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(artRef.current.querySelector("[data-slot~=\"hero-live\"]"));
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("pagehide", hide);
    window.addEventListener("pageshow", sync);
    sync();
    return () => {
      observer.disconnect(); document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pagehide", hide); window.removeEventListener("pageshow", sync);
    };
  }, []);

  useEffect(() => {
    if (!motionEnabled) setIndex(0);
    if (!active) return;
    const timer = setTimeout(() => setIndex(current => (current + 1) % heroStates.length), 4500);
    return () => clearTimeout(timer);
  }, [active, index, motionEnabled]);

  return { artRef, state: heroStates[index], support: heroSupporting[index], active };
}
