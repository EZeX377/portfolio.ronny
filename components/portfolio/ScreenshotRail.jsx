"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";

export default function ScreenshotRail({ label, children }) {
  const rail = useRef(null);
  const section = useRef(null);
  const viewport = useRef(null);
  const [distance, setDistance] = useState(0);
  const { initialized, motionEnabled } = usePortfolio();
  const enabled = initialized && motionEnabled && distance > 0;
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, value => -value * distance);

  useEffect(() => {
    const node = rail.current;
    const measure = () => setDistance(Math.max(0, node.scrollWidth - viewport.current.clientWidth));
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    observer.observe(viewport.current);
    measure();
    return () => observer.disconnect();
  }, []);

  return <section ref={section} aria-label={label} style={enabled ? { height: `calc(100svh + ${distance}px)` } : undefined}>
    <div className={enabled ? "sticky top-0 flex h-svh items-center pt-24" : ""}>
      <div ref={viewport} tabIndex={enabled ? undefined : 0} className={`${enabled ? "overflow-clip" : "overflow-x-auto"} w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-copper`}>
        <motion.div ref={rail} style={{ x: enabled ? x : 0 }} className="flex items-start gap-8 pb-4">{children}</motion.div>
      </div>
    </div>
  </section>;
}
