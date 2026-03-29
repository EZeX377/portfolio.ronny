"use client";

import Image from "next/image";

import editorArtwork from "@/assets/editor-grid.webp";
import isoGridArtwork from "@/assets/iso-grid.webp";
import gridArtwork from "@/assets/grid.svg";
import stackArtwork from "@/assets/stack-bg.webp";
import stackArtworkAlt from "@/assets/stack-bg2.webp";
import networkArtwork from "@/assets/network.webp";
import uiArtwork from "@/assets/ui.png";
import chatArtwork from "@/assets/chat.webp";
import StatusBadge from "./StatusBadge";
import { delay, motion } from "framer-motion";
import { MessageSquare, MoveRight } from "lucide-react";



export default function AboutSection() {
  const customEase = [0.22, 1, 0.36, 1];

  const imageVariants = {
    initial: { x: 0, scale: 1 },
    hover: { x: -14, scale: 1.02 },
  };
  const imageVariants2 = {
    initial: { x: 0 },
    hover: { x: -6 },
  };
  const imageVariants3 = {
    initial: { x: 0, y: 0, scale: 1 },
    hover: { x: -12, y: -6, scale: 1.02 },
  };
  const contentVariants = {
    initial: { y: 0 },
    hover: { y: -3 },
  };
  const msgVariants = {
    initial: {
      scale: 1,
      x: 0,
      y: 0,
    },
    hover: {
      scale: 1.03,
      x: -4,
      y: -4,
      opacity: 0.06,
    },
  };
  const networkVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: 6, scale: 1.02, opacity: 0.1 },
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="section-block page-shell">
      <div className="section-shell space-y-10">
        <div className="space-y-4">
          <h2 id="about-heading" className="section-heading">
            More Than UI, Delivering Systems That Work
          </h2>
          <p className="section-intro max-w-[62ch]">
            The work spans system design, project delivery, interface leadership, and the practical constraints involved in shipping government and enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <motion.div className="surface-card-soft relative row-span-1 col-span-3 flex flex-col justify-end overflow-hidden px-6 py-8 md:row-span-2 md:px-8 md:py-10"
            initial="initial"
            whileHover="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }}>
            <motion.div
              variants={imageVariants}
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute -right-60 -top-10 z-10 hidden h-80 w-auto sm:block md:h-[450px]"
              style={{ willChange: "transform" }}
            >
              <Image
                src={editorArtwork}
                alt="Close-up editor artwork representing frontend implementation and interface development"
                className="h-full object-contain w-auto"
              />
            </motion.div>
            <Image
              src={isoGridArtwork}
              alt=""
              priority
              aria-hidden="true"
              className="absolute -right-44 -top-14 hidden min-h-96 scale-150 opacity-35 sm:block"
            />
            <motion.div
              variants={contentVariants}
              transition={{ duration: 0.4, ease: customEase }}
              className="relative z-10 max-w-[60ch] pt-36 md:pt-40"
              style={{ willChange: "transform" }}
            >
              <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
                System Design &amp; Delivery
              </h3>
              <div className="space-y-4">
                <p className="muted-copy text-base font-medium leading-5">
                  With nearly six years of experience, I lead the design and delivery of large-scale government and enterprise systems.
                </p>
                <p className="muted-copy text-base font-medium leading-5">
                  Focused on translating workflows, dependencies, and real-world constraints into structured, scalable platforms.
                </p>
              </div>
              {/* <div className="mt-4 max-w-[64ch] space-y-1 text-xs uppercase tracking-wide text-gray-400 dark:text-gray-400">
                <p>Real-world systems</p>
                <p>Government portals | Dashboards | Multi-module platforms</p>
              </div> */}
            </motion.div>
          </motion.div>

          <motion.div initial="initial"
            whileHover="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }} className="surface-card-soft relative flex flex-col justify-center overflow-hidden px-6 py-8 md:px-7">
            <div className="">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
                Project Delivery &amp; Ownership
              </h3>
              <p className="muted-copy mt-3 text-sm font-medium leading-5">
                Leading end-to-end delivery across requirements, stakeholder coordination, implementation, and deployment for live systems.
              </p>
            </div>
            <motion.div
              variants={networkVariants}
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute -right-32 -top-0 z-0 hidden max-w-[300px] sm:block h-auto opacity-[0.06] dark:opacity-[0.08]"
              style={{ willChange: "transform" }}
            >
              <Image
                src={networkArtwork}
                alt="Close-up editor artwork representing frontend implementation and interface development"
                className="h-full object-contain w-auto -rotate-45"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }}
            className="relative flex min-h-[220px] flex-col items-center justify-center rounded-3xl border overflow-hidden border-indigo-200/60 bg-gradient-to-br from-indigo-600/90 to-violet-500/80 px-6 py-7 text-center text-white shadow-sm shadow-indigo-200/20 dark:border-indigo-700/45 dark:from-indigo-900/80 dark:to-violet-900/70 dark:shadow-none">
            <div className="flex w-full max-w-[320px] flex-col items-center">
              <StatusBadge label="Open to Opportunities" />
              <p className="mt-4 max-w-[32ch] text-sm font-medium leading-6 text-white/88 md:text-sm">
                Exploring roles focused on system design, project delivery, and large-scale government or enterprise platforms.
              </p>
              <a
                href="#contact"
                className="focus-ring mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-2 text-sm font-semibold text-white/92 transition-colors duration-150 hover:bg-white/16"
              >
                View Contact <MoveRight className="size-4 ml-1 " />
              </a>
            </div>
            <motion.div
              initial={{ scale: 1, x: 0, y: 0 }}
              variants={msgVariants}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: customEase,
              }}
              className="absolute -bottom-12 -right-12 opacity-[0.06] dark:opacity-[0.03] w-56"
            >
              <Image
                src={chatArtwork}
                alt="Close-up editor artwork representing frontend implementation and interface development"
                className="h-full object-contain w-auto"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:col-span-4 md:grid-cols-4">
            <motion.div className="surface-card-soft relative overflow-hidden px-6 py-8 col-span-2"
              initial="initial"
              whileHover="hover"
              animate="initial"
              transition={{ duration: 0.5, ease: customEase }}>
              <motion.div
                variants={contentVariants}
                transition={{ duration: 0.4, ease: customEase }}
                className="max-w-[30ch]"
                style={{ willChange: "transform" }}
              >
                <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
                  UI Systems &amp; Interfaces
                </h3>
                <p className="muted-copy text-base font-medium leading-5">
                  Designing clean, structured interfaces aligned with real user journeys, system logic, and operational constraints.
                </p>
              </motion.div>
              <motion.div
                variants={imageVariants3}
                transition={{ duration: 0.6, ease: customEase }}
                className="h-full w-auto -mr-2 absolute -right-48 -bottom-24 hidden max-w-[30rem] sm:block z-10"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={uiArtwork}
                  alt=""
                  aria-hidden="true"
                  className="rounded-sm"
                />
              </motion.div>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10 dark:opacity-10"
                style={{
                  backgroundImage: `url(${gridArtwork.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "1000px 1000px"
                }}
              />
            </motion.div>

            <motion.div className="surface-card-soft relative overflow-hidden px-6 py-8 md:col-span-2 md:px-8 md:py-10"
              initial="initial"
              whileHover="hover"
              animate="initial"
              transition={{ duration: 0.5, ease: customEase }}>
              <div className="absolute inset-y-0 right-0 hidden sm:block">
                <motion.div
                  variants={imageVariants}
                  transition={{ duration: 0.5, ease: customEase }}
                  className="h-full w-auto -mr-2"
                  style={{ willChange: "transform" }}
                >
                  <Image src={stackArtwork} alt="" aria-hidden="true" className="h-full w-auto opacity-80" />
                </motion.div>
                <motion.div
                  variants={imageVariants2}
                  transition={{ duration: 0.7, delay: 0.15, ease: customEase }}
                  className="absolute -right-2 top-0 h-full w-auto"
                  style={{ willChange: "transform" }}
                >
                  <Image src={stackArtworkAlt} alt="" aria-hidden="true" className="h-full w-auto opacity-80" />
                </motion.div>
              </div>
              <motion.div
                variants={contentVariants}
                transition={{ duration: 0.4, ease: customEase }}
                className="relative z-10 max-w-[34ch] pt-24"
                style={{ willChange: "transform" }}
              >
                <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
                  Tools &amp; Technologies
                </h3>
                <p className="muted-copy max-w-[45ch] text-base font-medium leading-5">
                  Core tools used across frontend development, design, and system delivery.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}