"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePortfolio } from "./PortfolioProvider";

const SequenceContext = createContext(true);
const PublishingPhaseContext = createContext(null);

function RevisionPublishArrow({ enabled }) {
  const phase = useContext(PublishingPhaseContext);
  const visible = useContext(SequenceContext);
  const active = !enabled || (visible && phase >= 6);
  return <svg aria-hidden="true" viewBox="0 0 144 16" className="pointer-events-none absolute left-[calc(100%-8px)] top-1/2 z-10 hidden h-4 w-[144px] -translate-y-1/2 lg:block" fill="none" stroke="var(--copper)" strokeWidth="1.2">
    <motion.path d="M0 8H140" initial={false} animate={{ pathLength: active ? 1 : 0 }} transition={{ duration: enabled && active ? .5 : 0 }} />
    <motion.path d="M136 4l4 4-4 4" initial={false} animate={{ opacity: active ? 1 : 0 }} transition={{ duration: enabled && active ? .1 : 0, delay: enabled && active ? .5 : 0 }} />
  </svg>;
}

function usePhase(enabled, interval = 600, steps = 4, repeat = false) {
  const visible = useContext(SequenceContext);
  const sharedPhase = useContext(PublishingPhaseContext);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (sharedPhase === null) setPhase(0);
    if (!enabled || !visible || sharedPhase !== null) return;
    if (repeat) {
      let tick = 0;
      const timer = setInterval(() => { tick = (tick + 1) % (steps + 8); setPhase(Math.min(tick, steps)); }, interval);
      return () => clearInterval(timer);
    }
    const timers = Array.from({ length: steps }, (_, index) => setTimeout(() => setPhase(index + 1), (index + 1) * interval));
    return () => timers.forEach(clearTimeout);
  }, [enabled, visible, interval, steps, sharedPhase, repeat]);
  return enabled ? (sharedPhase ?? phase) : sharedPhase !== null ? 10 : steps;
}

function RevisionState({ enabled }) {
  const phase = usePhase(enabled);
  return <><p className="type-mono mb-4 text-copper">SAVE REVISION</p><h3 className="text-[23px]">Keep the history.</h3><div className="mt-5 min-h-[112px] space-y-3"><p className="flex justify-between border border-current/20 px-3 py-3 text-[13px]"><span>v1.0</span><span className="opacity-60">{phase >= 5 ? "Previous" : "Current"}</span></p><motion.div initial={false} animate={{ opacity: phase >= 5 ? 1 : 0, height: phase >= 5 ? "auto" : 0 }} transition={{ duration: enabled ? .4 : 0 }} className="relative"><p className="relative flex justify-between border border-copper px-3 py-3 text-[13px]"><span className="text-copper">v1.1</span><span>New revision</span><RevisionPublishArrow enabled={enabled} /></p></motion.div></div><p className="type-mono mt-5 text-copper">ILLUSTRATIVE VERSIONS</p></>;
}

function PublicState({ enabled }) {
  const phase = usePhase(enabled);
  const published = phase >= 9;
  return <><p className="type-mono mb-4 text-copper">PUBLISH → PUBLIC</p><h3 className="text-[23px]">Update both views.</h3><div className="mt-5 grid grid-cols-2 gap-3">{["Catalogue", "Challenge page"].map((view, index) => <motion.div key={view} initial={false} animate={{ borderColor: phase >= 7 + index * 2 ? "var(--copper)" : "var(--line)" }} transition={{ duration: enabled ? .4 : 0 }} className="flex flex-col border bg-soft p-3"><motion.div aria-hidden="true" animate={{ scale: phase >= 7 + index * 2 ? 1 : .5, opacity: phase >= 7 + index * 2 ? 1 : .3 }} className="mb-3 h-2 w-2 bg-copper" /><p className="text-[12px]">{view}</p><p className="mt-auto whitespace-nowrap pt-2 text-[12px] text-muted">{phase >= 7 + index * 2 ? "v1.1 · Updated" : "v1.0"}</p></motion.div>)}</div><p className="type-mono mt-5 text-copper">{published ? "PUBLISHED / VISIBLE" : "DRAFT / NOT PUBLIC"}</p></>;
}

function EditedField({ enabled }) {
  const phase = usePhase(enabled);
  return <motion.div initial={false} animate={{ borderColor: phase === 1 ? "var(--copper)" : "var(--line)" }} transition={{ duration: enabled ? .35 : 0 }} className="relative mt-2 border px-3 py-3 text-[13px]">{phase >= 1 ? "Updated challenge content" : "Challenge content"}<span aria-hidden="true" className="ml-2 text-copper">{phase === 1 ? "▏" : phase >= 2 ? "✓" : ""}</span><PublishingBranch enabled={enabled} stage={3} /></motion.div>;
}

function OngoingSteps({ enabled }) {
  const visible = useContext(SequenceContext);
  return <div className="mt-7 border-t border-line pt-5">
    <p className="type-mono mb-4 text-muted">ONGOING AFTER RELEASE</p>
    <div className="grid gap-4 sm:grid-cols-2">
      {["Maintenance", "Updates"].map((label, index) => <div key={label} className="flex min-h-14 items-center gap-3 border border-copper bg-surface px-3 py-3">
        {index === 0 && <motion.span aria-hidden="true" initial={false} animate={{ opacity: enabled && visible ? [1, .4, 1] : 1 }} transition={enabled && visible ? { duration: 2, repeat: Infinity } : { duration: 0 }} className="h-2 w-2 shrink-0 rounded-full bg-green-600" />}
        <p className="text-[13px] leading-relaxed">{label}</p>{index === 0 && <span className="ml-auto text-[12px] text-muted">Live</span>}
      </div>)}
    </div>
  </div>;
}
function LaunchSteps({ enabled }) {
  const phase = usePhase(enabled, 650, 5, true);
  return <div className="relative"><ol className="m-0 grid list-none grid-cols-1 gap-0 p-0 sm:grid-cols-5">
    {["Requirements", "Design", "Build", "Review", "Release"].map((step, index) => <li key={step} className="min-w-0"><Piece enabled={enabled} delay={index * .15} className="relative flex items-center gap-4 pb-6 sm:block sm:pb-0">
      <motion.div aria-hidden="true" initial={false} animate={{ backgroundColor: phase > index ? "var(--copper)" : "var(--surface)", color: phase > index ? "var(--bg)" : "var(--copper)", borderColor: phase > index ? "var(--copper)" : "var(--line)" }} transition={{ duration: enabled ? .3 : 0 }} className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border text-[12px]">{phase > index ? "✓" : `0${index + 1}`}</motion.div>
      {index < 4 && <div aria-hidden="true" className="absolute bottom-0 left-[18px] top-9 w-px bg-line sm:bottom-auto sm:left-9 sm:right-0 sm:top-[18px] sm:h-px sm:w-auto"><motion.div initial={false} animate={{ opacity: phase > index ? 1 : 0 }} transition={{ duration: enabled ? .4 : 0 }} className="absolute inset-0 bg-copper" /></div>}
      <p className="text-[13px] sm:mt-4">{step}</p>
    </Piece></li>)}
  </ol>
    <OngoingSteps enabled={enabled} />
    <svg aria-hidden="true" viewBox="0 0 1000 230" preserveAspectRatio="none" className="pointer-events-none absolute -left-6 top-0 hidden h-[calc(100%+20px)] w-[calc(100%+24px)] sm:block" fill="none" stroke="var(--copper)" strokeWidth="1.2">
      <path d="M760 210V228H4V18H38" opacity=".2" vectorEffect="non-scaling-stroke" />
      <motion.path d="M760 210V228H4V18H38" vectorEffect="non-scaling-stroke" initial={false} animate={{ pathLength: phase >= 5 ? 1 : 0 }} transition={{ duration: enabled && phase >= 5 ? 2 : 0, delay: enabled && phase >= 5 ? 1 : 0 }} />
      <motion.path d="M30 14l8 4-8 4" vectorEffect="non-scaling-stroke" initial={false} animate={{ opacity: phase >= 5 ? 1 : 0 }} transition={{ duration: enabled && phase >= 5 ? .1 : 0, delay: enabled && phase >= 5 ? 3 : 0 }} />
    </svg>
  </div>;
}

function Sequence({ children, loop = false, replay = false, enabled = false, ...props }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: !loop && !replay, amount: replay ? .75 : .2 });
  const [cyclePhase, setCyclePhase] = useState(0);
  useEffect(() => {
    if (!loop || !enabled || !visible) return;
    setCyclePhase(0);
    const timer = setInterval(() => setCyclePhase(value => (value + 1) % 15), 650);
    return () => clearInterval(timer);
  }, [loop, enabled, visible]);
  return <div ref={ref} {...props}><SequenceContext.Provider value={visible}><PublishingPhaseContext.Provider value={loop ? Math.min(cyclePhase, 10) : null}>{children}</PublishingPhaseContext.Provider></SequenceContext.Provider></div>;
}

function Piece({ enabled, delay = 0, active, children, className = "" }) {
  const visible = useContext(SequenceContext);
  const cyclePhase = useContext(PublishingPhaseContext);
  if (cyclePhase !== null) return <div className={className}>{children}</div>;
  return <motion.div initial={false} animate={!enabled ? { opacity: 1, y: 0, scale: 1 } : visible ? { opacity: active === false ? .25 : 1, y: active === false ? 4 : 0, scale: active === false ? .985 : 1 } : { opacity: 0, y: 12, scale: 1 }} transition={{ duration: enabled ? .45 : 0, delay: enabled && visible && active === undefined ? delay : 0, ease: [.22, 1, .36, 1] }} className={className}>{children}</motion.div>;
}

function Connector({ enabled, delay = 0, vertical = false, stage = 0 }) {
  const visible = useContext(SequenceContext);
  const cyclePhase = useContext(PublishingPhaseContext);
  const show = !enabled || (visible && (cyclePhase === null || cyclePhase >= stage));
  const drawDelay = cyclePhase === null ? delay : 0;
  return <svg aria-hidden="true" viewBox={vertical ? "0 0 16 32" : "0 0 32 16"} className={vertical ? "mx-auto h-8 w-4" : "h-4 w-8"} fill="none" stroke="var(--copper)" strokeWidth="1.2">
    <motion.path d={vertical ? "M8 0V28" : "M0 8H28"} initial={false} animate={{ pathLength: show ? 1 : 0 }} transition={{ duration: enabled && show ? .5 : 0, delay: enabled && visible ? drawDelay : 0 }} />
    <motion.path d={vertical ? "M4 24l4 4 4-4" : "M24 4l4 4-4 4"} initial={false} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: enabled && show ? .15 : 0, delay: enabled && show ? drawDelay + .5 : 0 }} />
  </svg>;
}

function PublishingBranch({ enabled, stage, publish = false }) {
  const visible = useContext(SequenceContext);
  const phase = useContext(PublishingPhaseContext);
  const active = !enabled || (visible && phase >= stage);
  const secondActive = !enabled || (visible && phase >= stage + (publish ? 2 : 1));
  const transition = (delay = 0, duration = .35) => ({
    duration: enabled && active ? duration : 0,
    delay: enabled && active ? delay : 0,
    ease: "easeInOut",
  });
  return <svg aria-hidden="true" viewBox="0 0 160 112" className="pointer-events-none absolute left-[calc(100%-8px)] top-[calc(50%-50px)] z-10 hidden h-28 w-40 lg:block" fill="none" stroke="var(--copper)" strokeWidth="1.2">
    {!publish && <path d="M0 50H48" opacity=".4" />}
    <motion.path d="M0 50H48" initial={false} animate={{ pathLength: active ? 1 : 0 }} transition={transition(0, .15)} />
    <motion.path d="M48 50V32Q48 26 54 26H156" initial={false} animate={{ pathLength: publish ? (active ? 1 : 0) : 1, opacity: publish ? 1 : .4 }} transition={transition(.15)} />
    <motion.path d="M48 50V80Q48 86 54 86H156" initial={false} animate={{ pathLength: secondActive ? 1 : 0 }} transition={{ duration: enabled && secondActive ? .45 : 0, ease: "easeInOut" }} />
    <motion.circle cx="48" cy="50" r="3" fill="var(--stage)" initial={false} animate={{ opacity: active ? 1 : 0, scale: active ? 1 : .5 }} transition={transition(.1, .2)} />
    <motion.path d="M152 82l4 4-4 4" initial={false} animate={{ opacity: secondActive ? 1 : 0 }} transition={{ duration: enabled && secondActive ? .08 : 0, delay: enabled && secondActive ? .45 : 0 }} />
    {publish ? <motion.path d="M152 22l4 4-4 4" initial={false} animate={{ opacity: active ? 1 : 0 }} transition={transition(.5, .08)} /> : <circle cx="156" cy="26" r="2.5" fill="var(--stage)" opacity=".4" />}
  </svg>;
}

function EntryIllustration({ enabled }) {
  const phase = usePhase(enabled);
  const options = [
    ["Startup / Innovator", "Founders, startups and individual teams.", "M8 28l7-7m-3-5c4-8 11-10 16-10 0 5-2 12-10 16l-6-6Zm0 0-6 1 1 6m11-1-1 6-6-1M21 13h.01"],
    ["Educational Institutions", "Students, researchers and faculty.", "M4 13 18 6l14 7-14 7-14-7Zm6 4v9c5 4 11 4 16 0v-9M32 13v13"],
    ["Mentor", "Mentorship and domain expertise.", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 17v-6a8 8 0 0 1 16 0v6M22 10h10v12H22l-4 4v-9M25 14h4M25 18h3"],
    ["Technology Partner", "Technology, tools and ecosystem support.", "M10 10h16v16H10V10Zm4 4-3 4 3 4m8-8 3 4-3 4M18 2v8M18 26v8M2 18h8M26 18h8"],
  ];
  const selected = Math.max(0, Math.min(3, Math.floor((phase - 1) / 2)));
  return <>
    <p className="type-mono mb-3 text-copper">JOIN THE CHALLENGE</p>
    <h3 className="max-w-[18ch] text-[28px] leading-tight tracking-[-.04em]">Choose how you take part.</h3>
    <p className="mb-6 mt-3 text-[13px] leading-relaxed text-muted">Select the option that describes your role.</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map(([title, copy, path], index) => <motion.div key={title} initial={false} animate={{ borderColor: !enabled || selected === index ? "var(--copper)" : "var(--line)", backgroundColor: selected === index ? "var(--surface)" : "var(--soft)" }} transition={{ duration: enabled ? .35 : 0 }} className="relative flex min-h-40 flex-col items-start border p-4">
        <div className="mb-4 flex w-full items-center justify-between"><svg aria-hidden="true" viewBox="0 0 36 36" className="h-8 w-8" fill="none" stroke="var(--copper)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg><motion.span aria-hidden="true" initial={false} animate={{ opacity: selected === index ? 1 : 0, scale: selected === index ? 1 : .7 }} className="flex h-5 w-5 items-center justify-center rounded-full border border-copper text-[12px] text-copper">✓</motion.span></div>
        <p className="text-[15px] leading-tight">{title}</p><p className="mt-2 text-[12px] leading-relaxed text-muted">{copy}</p>
      </motion.div>)}
    </div>

    <p className="mt-5 text-[12px] leading-relaxed text-muted">The selected role determines the next registration step.</p>
  </>;
}
function TeamConnector({ enabled, phase }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(320);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width || 320));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const center = width / 2;
  const left = (width - 24) / 6;
  const right = width - left;
  return <div ref={ref} className="hidden sm:block"><svg aria-hidden="true" viewBox={`0 0 ${width} 32`} className="h-8 w-full" fill="none" stroke="var(--copper)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <motion.path d={`M${left} 0V6Q${left} 12 ${left + 6} 12H${center - 6}Q${center} 12 ${center} 18V28M${right} 0V6Q${right} 12 ${right - 6} 12H${center + 6}Q${center} 12 ${center} 18M${center} 0V28`} initial={false} animate={{ pathLength: !enabled || phase >= 4 ? 1 : 0 }} transition={{ duration: enabled ? .5 : 0 }} />
  </svg></div>;
}

function TeamIllustration({ enabled }) {
  const phase = usePhase(enabled);
  return <>
      <Piece enabled={enabled} className="border border-copper bg-surface p-5">
        <div className="mb-6 flex items-start justify-between gap-3"><div><p className="type-mono mb-2 text-copper">{phase >= 6 ? "APPLICATION SUBMITTED" : phase >= 5 ? "APPLICATION REVIEWED" : "APPLICATION DRAFT"}</p><h3 className="text-[24px]">One shared proposal.</h3></div><span className="type-mono border border-line px-2 py-1 text-muted">{phase >= 6 ? "SUBMITTED" : phase >= 5 ? "REVIEWED" : "DRAFT"}</span></div>
        <div><div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[["Owner", "Lead applicant"], ["Developer", "Team member"], ["Designer", "Team member"]].map(([label, role], index) => <Piece key={`${label}-${index}`} enabled={enabled} active={phase > index} className="flex min-h-28 min-w-0 flex-col items-center justify-center gap-2 border border-line bg-soft px-2 py-4 text-center"><span className="flex flex-col items-center gap-2 text-[14px] leading-tight"><motion.span aria-hidden="true" initial={false} animate={{ opacity: phase > index ? 1 : .2 }} transition={{ duration: enabled ? .3 : 0 }} className="text-copper"><svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d={index === 0 ? "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21v-3a7 7 0 0 1 14 0v3" : index === 1 ? "m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" : "m4 20 4-1 12-12a2.8 2.8 0 0 0-4-4L4 15l-1 6m11-16 5 5M4 15l4 4"} /></svg></motion.span>{label}</span><span className="text-[12px] leading-relaxed text-muted">{role}</span></Piece>)}</div><TeamConnector enabled={enabled} phase={phase} />
          <Piece enabled={enabled} active={phase >= 5} className="relative mx-auto mt-6 max-w-80 bg-ink p-4 text-bg sm:mt-0"><p className="type-mono mb-3 text-copper">SHARED PROPOSAL</p><p className="text-[13px]">Problem · Approach · Delivery plan</p><div aria-hidden="true" className="mt-4 space-y-2"><motion.div initial={false} animate={{ scaleX: phase >= 5 ? 1 : 0 }} transition={{ duration: enabled ? .4 : 0 }} className="h-px w-full origin-left bg-current opacity-25" /><motion.div initial={false} animate={{ scaleX: phase >= 5 ? 1 : 0 }} transition={{ duration: enabled ? .4 : 0, delay: enabled && phase >= 5 ? .2 : 0 }} className="h-px w-3/4 origin-left bg-current opacity-25" /></div></Piece>
        </div>
      </Piece>
      <p className="mt-5 text-[13px] leading-relaxed text-muted">Add members → Assign roles → Review together</p>
      <Piece enabled={enabled} active={phase >= 6} className="mt-4 border-t border-line pt-4"><p className="type-mono mb-2 text-copper">{phase >= 6 ? "SUBMITTED / TEAM SNAPSHOT PRESERVED" : "ON SUBMISSION / TEAM SNAPSHOT"}</p><p className="text-[12px] leading-relaxed text-muted">Reviewed details stay with this application. Later account edits stay separate.</p></Piece>
      <p className="type-mono mt-5 text-muted">ILLUSTRATIVE ROLES</p>
  </>;


}

export default function CaseStudyDiagram({ kind }) {
  const { initialized, motionEnabled } = usePortfolio();
  const enabled = initialized && motionEnabled;
  const titles = { entry: "Participation type chooser", team: "Application ownership and shared proposal", publish: "Challenge publishing and revision states", delivery: "Seven-day production delivery" };
  const card = "border border-line bg-surface p-5 shadow-[0_8px_24px_rgba(0,0,0,.04)]";

  if (kind === "delivery") return <Sequence replay role="group" aria-label={titles[kind]} className="mt-4 grid gap-8 bg-stage p-6 md:grid-cols-[.7fr_2fr] md:gap-12 md:p-10">
    <div className="border-b border-line pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8"><p className="type-mono mb-4 text-muted">BRIEF TO PRODUCTION</p><p className="font-display text-[88px] leading-none tracking-[-.07em] text-copper">7<span className="ml-3 text-[24px] tracking-[-.03em] text-ink">days</span></p><p className="mt-5 text-[13px] leading-relaxed text-muted">First release<br />25 September 2026</p></div>
    <div className="self-center">
      <LaunchSteps enabled={enabled} />
      <Piece enabled={enabled} delay={2.3} className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5"><p className="type-mono text-copper">PRODUCTION / LIVE</p><p className="text-[12px] text-muted">Subsequent updates ongoing</p></Piece>
    </div>
  </Sequence>;

  return <Sequence loop={kind === "publish" || kind === "team" || kind === "entry"} enabled={enabled} role="group" aria-label={titles[kind]} className={`relative overflow-hidden bg-stage p-6 md:p-8 ${kind === "publish" ? "mb-4" : ""}`}>
    <p className="type-mono mb-7 flex items-center justify-between gap-4 text-muted"><span>{kind === "entry" ? "ENTRY / PARTICIPATION" : kind === "team" ? "ONE APPLICATION / SHARED WORK" : "ADMIN → PUBLIC / ONE SOURCE"}</span><span aria-hidden="true" className="text-copper">+</span></p>

    {kind === "entry" && <EntryIllustration enabled={enabled} />}

    {kind === "team" && <TeamIllustration enabled={enabled} />}

    {kind === "publish" && <>
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Piece enabled={enabled} className={card}><p className="type-mono mb-4 text-copper">ADMIN / CMS</p><h3 className="text-[23px]">Edit the challenge.</h3><p className="mt-4 text-[12px] text-muted">Challenge title</p><EditedField enabled={enabled} /><p className="type-mono mt-5 text-muted">DRAFT / NOT PUBLIC</p></Piece>
        <div aria-hidden="true" className="hidden w-12 lg:block" />
        <Piece enabled={enabled} delay={1} className="border border-line bg-ink p-5 text-bg"><RevisionState enabled={enabled} /></Piece>
        <div aria-hidden="true" className="hidden w-12 lg:block" />
        <Piece enabled={enabled} delay={2.15} className={card}><PublicState enabled={enabled} /></Piece>
      </div>
      <p className="mt-6 max-w-[65ch] text-[13px] leading-relaxed text-muted">Saving a revision keeps the edit history. Publishing makes the challenge visible in the catalogue and its detail page.</p>
    </>}
  </Sequence>;
}


