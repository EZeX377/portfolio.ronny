import Image from "next/image";
import { MoveDownRight } from "lucide-react";

import heroArtwork from "@/assets/asset6.png";
import isoGridArtwork from "@/assets/iso-grid.png";

export default function HeroSection() {
  return (
    <header className="relative min-h-[95vh] overflow-hidden bg-neutral-100 transition-[background-color] duration-150 dark:bg-neutral-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center px-6 py-10 text-center lg:flex-row lg:items-center lg:pt-24 lg:text-left md:px-10">
          <div className="order-2 shrink-0 py-20 lg:order-1 lg:max-w-[600px] lg:py-0">
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              Project Lead in UI/UX &amp; System Delivery
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Ronny Das
            </h1>
            <p className="mt-4 max-w-[600px] text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
              Delivering large-scale government and enterprise applications
              <br className="hidden sm:block" />
              with structured systems, clear workflows, and reliable execution.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group flex min-h-[44px] items-center justify-center gap-4 lg:justify-start"
              >
                <span className="flex size-12 lg:size-14 items-center justify-center rounded-full border-2 border-indigo-600 transition-all duration-100 group-hover:bg-indigo-600 dark:border-indigo-500 dark:group-hover:bg-indigo-500">
                  <MoveDownRight className="text-indigo-600 transition-colors duration-300 group-hover:text-neutral-100 dark:text-indigo-500 dark:group-hover:text-neutral-800" />
                </span>
                <span className="text-lg font-medium tracking-wide text-neutral-800 underline-offset-4 transition-all duration-100 group-hover:text-indigo-600 group-hover:underline dark:text-neutral-100 dark:group-hover:text-indigo-500 sm:text-xl">
                  EXPLORE PROJECTS
                </span>
              </a>
            </div>
          </div>

          <div className="relative order-1 w-full grow lg:order-2">
            <div className="relative mx-auto h-[18rem] w-full max-w-xl sm:h-[24rem] lg:h-[38rem] lg:max-w-none">
              <Image
                src={isoGridArtwork}
                alt=""
                aria-hidden="true"
                priority
                className="absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 scale-[1.45] opacity-90 lg:left-[58%] lg:top-[55%] lg:max-w-3xl"
              />
              <Image
                src={heroArtwork}
                alt="Illustration of UI/UX design work for government systems, dashboard systems, and web applications across laptop, tablet, and mobile screens"
                priority
                className="absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 scale-[1.45] drop-shadow-xl lg:left-[60%] lg:top-[55%] lg:max-w-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}