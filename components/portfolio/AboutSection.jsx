"use client";

import Image from "next/image";
import Link from "next/link";

import editorArtwork from "@/assets/editor-grid.webp";
import isoGridArtwork from "@/assets/iso-grid.webp";
import gridArtwork from "@/assets/grid.svg";
import stackArtwork from "@/assets/stack-bg.webp";
import stackArtworkAlt from "@/assets/stack-bg2.webp";
import networkArtwork from "@/assets/network.webp";
import uiArtwork from "@/assets/ui.png";
import chatArtwork from "@/assets/chat.webp";
import StatusBadge from "./StatusBadge";
import { motion } from "framer-motion";
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
    <section id="about" aria-labelledby="about-heading" className="section-block">
      <div className="section-shell space-y-12 md:space-y-16 lg:space-y-20 2xl:space-y-24">
        <div className="space-y-4">
          <h2 id="about-heading" className="section-heading">
            More Than UI, Delivering Systems That Work
          </h2>
          <p className="section-intro max-w-[62ch]">
            The work spans system design, project delivery, interface leadership, and the practical constraints involved in shipping government and enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div className="surface-card-soft relative col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-end overflow-hidden"
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }}>
            <motion.div
              variants={imageVariants}
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute -right-48 md:-right-60 -top-8 md:-top-10 z-0 h-80 w-auto md:h-[450px]"
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
              alt="Isometric perspective grid illustrating structured system architecture and delivery frameworks"
              priority
              aria-hidden="true"
              className="absolute md:-right-44 -top-14 w-full scale-150 opacity-35"
            />
            <motion.div
              variants={contentVariants}
              transition={{ duration: 0.4, ease: customEase }}
              className="relative z-10 max-w-[60ch] pt-56 md:pt-32"
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
            whileTap="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }} className="surface-card-soft relative flex flex-col justify-center overflow-hidden">
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
              whileHover="hover"
              transition={{ duration: 0.5, ease: customEase }}
              className="absolute -right-32 top-0 z-0 h-auto max-w-[300px] opacity-[0.06] dark:opacity-[0.08]"
              style={{ willChange: "transform" }}
            >
              <Image
                src={networkArtwork}
                alt="Abstract network node artwork symbolizing stakeholder coordination and end-to-end project delivery"
                className="h-full object-contain w-auto -rotate-45"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            animate="initial"
            transition={{ duration: 0.5, ease: customEase }}
            className="surface-card-soft relative flex min-h-[220px] flex-col items-center justify-center rounded-3xl border overflow-hidden border-indigo-200/60 bg-gradient-to-br from-indigo-600/90 to-violet-500/80 text-center text-white shadow-sm shadow-indigo-200/20 dark:border-indigo-700/45 dark:from-indigo-900/80 dark:to-violet-900/70 dark:shadow-none">
            <div className="flex w-full max-w-[320px] flex-col items-center">
              <StatusBadge label="Open to Opportunities" />
              <p className="mt-4 max-w-[32ch] text-sm font-medium leading-6 text-white/88 md:text-sm">
                Exploring roles focused on system design, project delivery, and large-scale government or enterprise platforms.
              </p>
              <Link
                href="#contact"
                className="focus-ring mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-2 text-sm font-semibold text-white/92 transition-colors duration-150 hover:bg-white/16"
              >
                View Contact <MoveRight className="size-4 ml-1 " />
              </Link>
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
                alt="Stylized floating chat bubbles representing real-time communication and requirement analysis"
                className="h-full object-contain w-auto"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-4">
            <motion.div className="surface-card-soft relative overflow-hidden col-span-1 md:col-span-2"
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              animate="initial"
              transition={{ duration: 0.5, ease: customEase }}>
              <motion.div
                variants={contentVariants}
                transition={{ duration: 0.4, ease: customEase }}
                className="relative z-20 max-w-[30ch] pb-32"
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
                className="h-full w-auto -mr-2 absolute -right-64 -bottom-44 md:-right-40 md:-bottom-28 max-w-120 z-10"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={uiArtwork}
                  alt="Detailed dashboard UI mockup showing complex data visualization systems and modular interface design"
                  aria-hidden="true"
                  className="rounded-sm pointer-events-none"
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

            <motion.div className="surface-card-soft relative overflow-hidden col-span-1 md:col-span-2"
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              animate="initial"
              transition={{ duration: 0.5, ease: customEase }}>
              <div className="absolute inset-y-0 right-0">
                <motion.div
                  variants={imageVariants}
                  transition={{ duration: 0.5, ease: customEase }}
                  className="h-full w-auto -mr-2"
                  style={{ willChange: "transform" }}
                >
                  <Image src={stackArtwork} alt="Visual representation of a modern technology stack with layered architectural components" aria-hidden="true" className="h-full w-auto opacity-80 pointer-events-none" />
                </motion.div>
                <motion.div
                  variants={imageVariants2}
                  transition={{ duration: 0.7, delay: 0.15, ease: customEase }}
                  className="absolute -right-2 top-0 h-full w-auto"
                  style={{ willChange: "transform" }}
                >
                  <Image src={stackArtworkAlt} alt="Alternative perspective of technology stack layers illustrating depth and implementation complexity" aria-hidden="true" className="h-full w-auto opacity-80 pointer-events-none" />
                </motion.div>
              </div>
              <motion.div
                variants={contentVariants}
                transition={{ duration: 0.4, ease: customEase }}
                className="relative z-10 max-w-[24ch] pt-32"
                style={{ willChange: "transform" }}
              >
                <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
                  Tools &amp; Technologies
                </h3>
                <p className="muted-copy text-base font-medium leading-5">
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