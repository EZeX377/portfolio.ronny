"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import logoLight from "@/assets/mylogo2-sm.svg";
import logoDark from "@/assets/mylogo2-sm-w.svg";
import { navItems } from "./content";
import ThemeToggle from "./ThemeToggle";

const MotionLink = motion(Link);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Refs for accessibility
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setMounted(true);
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.classList.toggle("dark", isDark);

    if (isDark) {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Improved scroll locking with better cleanup
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      
      // Restore scroll position
      window.scrollTo(0, Math.abs(parseInt(document.body.style.top || "0")));
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Focus trap within mobile menu
  useEffect(() => {
    if (!menuOpen || !mobileMenuRef.current) {
      return;
    }

    const menuElement = mobileMenuRef.current;
    const focusableElements = menuElement.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex="0"]'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event) => {
      if (event.key !== "Tab") {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    // Focus first focusable element when menu opens
    setTimeout(() => {
      firstFocusable?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [menuOpen]);

  // Focus return to toggle button on menu close
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Return focus to the toggle button after animation completes
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, reducedMotion ? 0 : 300);
  }, [reducedMotion]);

  const transitionDuration = reducedMotion ? 0 : undefined;

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed left-0 top-0 w-full transition-colors duration-200 z-50 ${isScrolled
        ? "bg-neutral-50/80 shadow-sm backdrop-blur-md dark:bg-neutral-900/80"
        : "bg-transparent"
        }`}
      style={{ transform: "translateZ(0)" }}
    >
      <div className="section-shell grid grid-cols-[auto_1fr_auto] items-center py-4">
        <MotionLink 
          href="#top"
          whileTap={{ scale: 0.95 }}
          className="focus-ring z-100 rounded-xl"
          aria-label="Ronny Das home"
        >
          <div className={`relative transition-all duration-200 ${isScrolled ? "h-11 lg:h-14" : "h-12 lg:h-16"}`}>
            <Image
              src={logoLight}
              alt="Ronny Das logo"
              priority
              className="h-full w-auto object-contain transition-all duration-200 dark:hidden"
            />
            <Image
              src={logoDark}
              alt="Ronny Das logo"
              priority
              className="h-full w-auto object-contain transition-all duration-200 hidden dark:block"
            />
          </div>
        </MotionLink>

        <div className="hidden justify-center md:flex">
          <ul className="flex items-center gap-7 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-full px-2 py-1 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center md:flex">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
        </div>

        <div className="flex items-center justify-end md:hidden">
          <motion.button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((current) => !current)}
            whileTap={{ scale: 0.9 }}
            className="focus-ring rounded-full p-2 text-neutral-700 dark:text-neutral-200"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-neutral-950/20 backdrop-blur-sm dark:bg-black/40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-navigation"
              variants={{
                initial: { x: "100%", opacity: 0, scale: 0.98 },
                animate: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: transitionDuration,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: reducedMotion ? 0 : 0.08,
                    delayChildren: reducedMotion ? 0 : 0.15,
                  },
                },
                exit: {
                  x: "100%",
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    duration: transitionDuration,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: reducedMotion ? 0 : 0.04,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-neutral-50 px-6 backdrop-blur-xl dark:bg-neutral-900 md:hidden"
            >
              <ul className="flex flex-col items-center gap-6 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: 10 },
                    }}
                  >
                  <Link href={item.href} onClick={closeMenu} className="focus-ring rounded-full px-6 py-2 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                    {item.label}
                  </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 10 },
                }}
              >
                <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}