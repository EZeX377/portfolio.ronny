"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "./PortfolioProvider";

export default function Portrait(props) {
  const { motionEnabled } = usePortfolio();
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const container = ref.current.parentElement;
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    container.addEventListener("pointerenter", enter);
    container.addEventListener("pointerleave", leave);
    return () => {
      container.removeEventListener("pointerenter", enter);
      container.removeEventListener("pointerleave", leave);
    };
  }, []);
  return <motion.img {...props} ref={ref} loading="eager" initial={false} animate={{ opacity: 1, y: motionEnabled && hovered ? -5 : 0 }}
    transition={{ duration: .55, ease: [.22, 1, .36, 1] }} />;
}
