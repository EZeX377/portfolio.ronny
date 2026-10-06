"use client";
import { motion } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";

export default function LayoutElement({ as = "div", children, ...props }) {
  const { motionEnabled } = usePortfolio();
  const Tag = motion[as];
  return <Tag {...props} layout={motionEnabled ? "position" : false} transition={{ duration: motionEnabled ? .85 : 0, ease: [.22, 1, .36, 1] }}>{children}</Tag>;
}
