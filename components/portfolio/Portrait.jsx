"use client";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";

export default function Portrait(props) {
  const { motionEnabled } = usePortfolio();
  return <motion.img {...props} loading="eager" initial={false} animate={{ opacity: 1, y: 0 }}
    whileHover={motionEnabled ? { y: -5 } : { y: 0 }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }} />;
}
