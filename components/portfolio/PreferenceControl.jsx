"use client";
import { usePortfolio } from "./PortfolioProvider";
export default function PreferenceControl({ kind, mobile = false }) {
    const { theme, motionEnabled, toggleTheme, toggleMotion } = usePortfolio();
    if (kind === "motion") {
        const label = `Motion is ${motionEnabled ? "on. Turn motion off" : "off. Turn motion on"}`;
        return <button id={mobile ? undefined : "motion-toggle"} data-slot="control motion-control" className={"h-11 min-w-11 inline-flex justify-center items-center gap-2 p-[9px_14px] [background:transparent] [border:1px_solid_var(--line)] rounded-[30px] [transition:background_.2s,color_.2s] hover:bg-soft [&_svg]:w-4.5 [&_svg]:h-4.5 [&_svg]:[fill:none] [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.4] [&_svg]:[stroke-linecap:round] text-[10px] max-[800px]:px-2.75 max-[560px]:w-11 max-[560px]:p-2.25 max-[560px]:[&_span]:hidden [&:disabled]:[cursor:default] [&:disabled]:opacity-[.65] max-[800px]:[[data-slot~='site-header']_&]:hidden [@media_(min-width:801px)]:text-[12px]"} aria-pressed={motionEnabled} aria-label={label} title={label} onClick={toggleMotion}>
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 6h10M7 10h10M3 14h10"/></svg><span>Motion {motionEnabled ? "on" : "off"}</span>
    </button>;
    }
    const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
    return <button id={mobile ? undefined : "theme-toggle"} data-slot="control theme-control" className={"h-11 min-w-11 inline-flex justify-center items-center gap-2 p-2.25 bg-ink [border:1px_solid_var(--line)] rounded-[50%] [transition:background_.2s,color_.2s] hover:bg-copper [&_svg]:w-4.5 [&_svg]:h-4.5 [&_svg]:[fill:none] [&_svg]:[stroke:currentColor] [&_svg]:[stroke-width:1.4] [&_svg]:[stroke-linecap:round] text-bg [border-color:var(--ink)] hover:[border-color:var(--copper)] [&:disabled]:[cursor:default] [&:disabled]:opacity-[.65] max-[800px]:[[data-slot~='site-header']_&]:hidden"} aria-label={label} title={label} onClick={toggleTheme}>
    <svg data-slot="sun" className={"[[data-theme=dark]_[data-slot~='theme-control']_&]:hidden"} viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.5"/><path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.6 3.6l1.4 1.4M15 15l1.4 1.4M3.6 16.4L5 15M15 5l1.4-1.4"/></svg>
    <svg data-slot="moon" className={"[[data-theme=light]_[data-slot~='theme-control']_&]:hidden"} viewBox="0 0 20 20" aria-hidden="true"><path d="M16.8 12.7A7.3 7.3 0 0 1 7.3 3.2 7.3 7.3 0 1 0 16.8 12.7Z"/></svg>
  </button>;
}
