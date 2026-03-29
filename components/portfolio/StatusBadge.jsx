"use client";

import { motion } from "framer-motion";

export default function StatusBadge({ label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-white/88 dark:border-white/14 dark:bg-white/8 dark:text-white/84">
      <span className="relative flex size-2.5 items-center justify-center" aria-hidden="true">
        <motion.span
          className="absolute size-2.5 rounded-full bg-emerald-400/75 -z-1"
          animate={{ scale: [1, 1.5], opacity: [0.75, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative size-2 rounded-full bg-emerald-400" />
      </span>
      <span>{label}</span>
    </div>
  );
}