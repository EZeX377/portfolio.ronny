import Image from "next/image";
import MotionElement from "./MotionElement";

export default function CaseStudyScreenshot({ src, label, caption, width, height, preload = false, cropped = false, paired = false, sliding = false, matched = false, details = false }) {
  return <MotionElement as="figure" delay={.15} className={`m-0 min-w-0 ${sliding ? "w-[90%] shrink-0 md:w-[70%]" : "w-full"} ${matched ? "lg:relative lg:min-h-0" : ""}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={`Open full screenshot: ${label}`} className={`relative block overflow-hidden bg-soft focus-visible:outline-2 focus-visible:outline-copper ${cropped || paired ? "aspect-[4/3]" : ""} ${matched ? "lg:absolute lg:inset-0" : ""}`}>
      <Image src={src} alt={label} width={width} height={height} sizes={paired ? "(max-width: 768px) 92vw, 900px" : "(max-width: 768px) 92vw, 1200px"} preload={preload} className={paired && !cropped ? "block h-full w-[101.15%] max-w-none object-fill" : `block h-auto w-[101.15%] max-w-none ${matched ? "lg:min-h-full lg:object-cover lg:object-top" : ""}`} />
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-linear-to-b from-transparent to-bg" />
    </a>
    {details && <div className="relative z-10 -mt-4 grid grid-cols-1 gap-5 px-3 sm:grid-cols-2 sm:gap-4">
      {[ ["Team roles", "w-[180%] -translate-x-[35%] -translate-y-[13%]"], ["Shared proposal", "w-[145%] -translate-x-[8%] -translate-y-[48%]"] ].map(([title, positioning], index) => <MotionElement key={title} delay={.25 + index * .15} className={index ? "sm:mt-8" : ""}>
        <div className="relative aspect-[1.65] overflow-hidden bg-surface shadow-[0_12px_32px_rgba(0,0,0,.08)]"><Image src={src} alt={`${title} detail from the application screenshot`} width={width} height={height} sizes="(max-width: 640px) 90vw, 400px" className={`absolute left-0 top-0 h-auto max-w-none ${positioning}`} /></div>
        <p className="mt-2 text-[12px] leading-relaxed text-ink/75">{title}</p>
      </MotionElement>)}
    </div>}
    <figcaption className={`mt-3 max-w-[65ch] text-[13px] leading-[1.65] text-ink/75 ${matched ? "lg:absolute lg:top-full" : ""}`}>{caption}</figcaption>
  </MotionElement>;
}
