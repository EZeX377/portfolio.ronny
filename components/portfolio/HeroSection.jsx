"use client";

import { ChevronDown, MapPin, MoveDownRight } from "lucide-react";
import { motion } from "framer-motion";

import gridBackground from "@/assets/grid.svg";

const gridSource = typeof gridBackground === "string" ? gridBackground : gridBackground.src;
export function Reveal({ children, delay = 0, duration = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.1, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
export function FadeContent({ children, delay = 0, duration = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.1, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 dark:opacity-[0.12]"
        style={{
          backgroundImage: `url(${gridSource})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[37%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)] blur-[200px] dark:bg-[radial-gradient(circle,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_70%)] sm:h-[700px] sm:w-[700px] lg:h-[700px] lg:w-[700px]"
      />

      <div className="section-shell relative z-10 flex min-h-[100svh] flex-col items-center justify-center pb-24 pt-28 text-center md:pt-32 lg:pb-32">
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center">
          <Reveal duration={1.9}>
            <h1 className="fontHarabara text-balance text-5xl font-extrabold leading-[0.95] text-slate-800 dark:text-slate-100 sm:text-6xl md:text-7xl lg:text-9xl">
              Hi, I am Ronny Das
            </h1>
          </Reveal>
          <Reveal duration={1.5} delay={0.4}>
            <p className="mt-10 max-w-5xl text-xl leading-[1.65] text-slate-600 dark:text-slate-300 sm:text-2xl md:text-3xl">
              Leading the delivery of large-scale government and enterprise platforms
              <br className="hidden md:block" />
              through structured systems, clear workflows, and reliable execution.
            </p>
          </Reveal>

          <p className="mt-10 flex flex-col flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 sm:text-base">
            <MapPin className="h-4 w-4" />
            Currently Project Lead in UI/UX &amp; Delivery at<br /> <span className="text-indigo-500 dark:text-indigo-400 font-bold">COGNITIVE TECH</span>
          </p>
          <FadeContent duration={1.9} delay={0.8}>
            <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#projects" className="focus-ring group flex min-h-[44px] items-center justify-center gap-4 rounded-full">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-500 transition-colors duration-150 group-hover:bg-indigo-500 dark:border-indigo-400 dark:group-hover:bg-indigo-400 lg:h-14 lg:w-14">
                  <MoveDownRight className="text-indigo-500 transition-colors duration-150 group-hover:text-white dark:text-indigo-400 dark:group-hover:text-slate-950" />
                </span>
                <span className="text-lg font-medium tracking-wide text-slate-800 underline-offset-4 transition-colors duration-150 group-hover:text-indigo-600 group-hover:underline dark:text-slate-100 dark:group-hover:text-indigo-400 sm:text-xl">
                  EXPLORE PROJECTS
                </span>
              </a>
            </div>
          </FadeContent>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          className="focus-ring absolute bottom-6 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm dark:bg-neutral-100 dark:text-neutral-900"
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </div>
    </header >
  );
}