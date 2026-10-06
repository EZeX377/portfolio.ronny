"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";
import { useAnimatedStyles } from "./useAnimatedStyles";

const ease = [.22, 1, .36, 1];

export default function MotionElement({ as = "div", kind = "reveal", delay = 0, changeKey, children, ...props }) {
  const { initialized, motionEnabled } = usePortfolio();
  const ref = useRef(null);
  const emptyRef = useRef(null);
  const visible = useInView(ref, { amount: .12, once: true });
  const Tag = motion[as];
  const enabled = initialized && motionEnabled;
  const reveal = kind === "reveal";
  useAnimatedStyles(reveal ? ref : emptyRef, visible);
  const slots = props["data-slot"] || "";
  const assembly = kind === "assembly";
  const entry = slots.includes("actor-back") ? "28px -32px" : slots.includes("actor-front") ? "26px 35px" : "0px 60px";
  const animated = assembly ? { translate: [entry, "0px 0px"], "--assembly-scale": [.96, 1] } : kind === "change" ? { opacity: [.25, 1], y: [7, 0] } : { opacity: [0, 1], y: [kind === "chapter" ? 12 : slots.includes("skill-build") ? 0 : 26, 0] };
  return <Tag {...props} ref={ref} key={kind === "change" || kind === "chapter" ? changeKey : undefined} data-revealed={visible || !enabled ? "true" : "false"}
    initial={false}
    className={assembly ? `${props.className || ""} [scale:var(--assembly-scale,1)]` : props.className}
    animate={!enabled ? assembly ? { translate: "0px 0px", "--assembly-scale": 1 } : { opacity: 1, y: 0 } : reveal && !visible ? { opacity: 0, y: slots.includes("skill-build") ? 0 : 26 } : animated}
    transition={{ duration: enabled ? kind === "chapter" ? .55 : kind === "change" ? .65 : .8 : 0, delay: enabled ? delay : 0, ease }}>
    {children}
  </Tag>;
}
