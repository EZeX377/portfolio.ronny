import { MoonStar, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle({ isDark, onToggle }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={`focus-ring flex h-8 w-14 items-center rounded-full border px-1 transition-colors duration-200 ease-linear border-neutral-300 bg-white text-neutral-800 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white`}
    >
      <div className="relative flex h-full w-full items-center">
        {mounted && (
          <motion.span
            className={`flex size-5 items-center justify-center rounded-full bg-neutral-50 shadow-sm dark:bg-neutral-700`}
            initial={false}
            animate={{ x: isDark ? "125%" : "0%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {isDark ? (
              <MoonStar className="size-3.5 text-neutral-200" />
            ) : (
              <SunMedium className="size-3.5 text-neutral-700" />
            )}
          </motion.span>
        )}
      </div>
    </motion.button>
  );
}