"use client";

import { useEffect, useState } from "react";
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
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed left-0 top-0 z-1000 w-full transition-colors duration-200 ${isScrolled
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

        {/* <div className="hidden items-center gap-5 md:flex">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring rounded-full p-1 text-neutral-700 transition-colors hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400"
          >
            <LinkedInIcon className="h-6 w-6 hover:rotate-3" />
          </a>
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
        </div> */}
        <div className="hidden items-center md:flex">
          <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
        </div>

        {/* <div className="z-[100] flex items-center justify-end gap-3 md:hidden">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring rounded-full p-1 text-neutral-700 transition-colors hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400"
          >
            <LinkedInIcon className="h-6 w-6 hover:rotate-3" />
          </a>
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="focus-ring rounded-full p-2 text-neutral-700 dark:text-neutral-200"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div> */}
        <div className="z-100 flex items-center justify-end md:hidden">
          <motion.button
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeMenu}
              className="fixed inset-0 z-80 bg-neutral-950/20 backdrop-blur-sm dark:bg-black/40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-navigation"
              variants={{
                initial: { x: "100%", opacity: 0, scale: 0.98 },
                animate: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
                exit: {
                  x: "100%",
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.04,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed right-0 top-0 z-90 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-neutral-50 px-6 backdrop-blur-xl dark:bg-neutral-900 md:hidden"
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