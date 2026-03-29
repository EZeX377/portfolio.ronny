"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import frameArtwork from "@/assets/project-frame.webp";
import frameArtworkDark from "@/assets/project-frame-b.webp";

export default function ProjectPreview({ image, alt, priority, label = "System Preview", className = "" }) {
  const viewportRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const node = viewportRef.current;

    if (!node) {
      return;
    }

    const updateScrollDistance = () => {
      const viewportWidth = node.clientWidth;
      const viewportHeight = node.clientHeight;
      const renderedImageHeight = (viewportWidth * image.height) / image.width;
      const nextDistance = Math.max(renderedImageHeight - viewportHeight, 0);

      setScrollDistance(nextDistance);
    };

    updateScrollDistance();

    const resizeObserver = new ResizeObserver(updateScrollDistance);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [image]);

  const previewDuration = Math.min(Math.max(scrollDistance / 420, 2.2), 10);

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`relative w-full ${className}`.trim()}
    >
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-x-0 top-[3.1%] z-[21] flex justify-center px-[8%]">
          <span className="text-[8px] font-semibold text-neutral-400 dark:text-neutral-500 -mt-0.5">
            {label}
          </span>
        </div>

        <div
          ref={viewportRef}
          className="absolute bottom-[1.15%] left-[1.2%] right-[0.92%] top-[8.3%] scale-[1.01] overflow-hidden rounded-[12px] bg-white sm:rounded-[22px] md:rounded-[12px]"
        >
          <motion.div
            variants={{
              rest: { y: 0 },
              hover: { y: -scrollDistance }
            }}
            transition={{ duration: previewDuration, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-x-0 top-0"
          >
            <Image
              src={image}
              alt={alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>

        <Image
          src={frameArtwork}
          alt=""
          className="relative z-20 h-auto w-full dark:hidden"
        />
        <Image
          src={frameArtworkDark}
          alt=""
          className="relative z-20 hidden h-auto w-full dark:block"
        />
      </div>
    </motion.div>
  );
}