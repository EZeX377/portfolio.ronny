"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import logoLight from "@/assets/mylogo2-sm.svg";
import logoDark from "@/assets/mylogo2-sm-w.svg";
import { linkedinUrl, navItems } from "./content";
import LinkedInIcon from "./LinkedInIcon";
import ThemeToggle from "./ThemeToggle";

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
      // data-lenis-prevent
      aria-label="Primary navigation"
      className={`sticky left-0 top-0 z-50 w-full transition-all duration-200 ${isScrolled
        ? "bg-neutral-50/80 backdrop-blur-md dark:bg-neutral-900/80"
        : "bg-transparent"
        }`}
    >
      <div className="section-shell grid grid-cols-[auto_1fr_auto] items-center py-4">
        <a href="#top" className="focus-ring z-[100] rounded-xl" aria-label="Ronny Das home">
          <div className={`relative transition-all duration-200 ${isScrolled ? "h-11 lg:h-14" : "h-12 lg:h-16"}`}>
            <Image
              src={logoLight}
              alt="Ronny Das logo"
              priority
              className={`h-full w-auto object-contain transition-all duration-200 dark:hidden`}
            />
            <Image
              src={logoDark}
              alt="Ronny Das logo"
              priority
              className={`h-full w-auto object-contain transition-all duration-200 hidden dark:block`}
            />
          </div>
        </a>

        <div className="hidden justify-center md:flex">
          <ul className="flex items-center gap-7 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring rounded-full px-2 py-1 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-5 md:flex">
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
        </div>

        <div className="z-[100] flex items-center justify-end gap-3 md:hidden">
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
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-neutral-50/95 px-6 backdrop-blur transition-transform duration-300 ease-in-out dark:bg-neutral-900/95 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu} className="focus-ring rounded-full px-4 py-2">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark((current) => !current)} />
      </div>
    </nav>
  );
}