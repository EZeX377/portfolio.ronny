import Link from "next/link";
import CaseStudyScreenshot from "@/components/portfolio/CaseStudyScreenshot";
import CaseStudyDiagram from "@/components/portfolio/CaseStudyDiagram";
import ProjectBrowser from "@/components/portfolio/ProjectBrowser";
import ScreenshotRail from "@/components/portfolio/ScreenshotRail";
import MotionElement from "@/components/portfolio/MotionElement";

export const metadata = {
  title: "NESFIC 2026 — Case study · Ronny Das",
  description: "Designing and implementing the NESFIC 2026 portal: registration, application-specific teams, and challenge publishing. First production release in seven days.",
  alternates: { canonical: "/projects/nesfic-2026/case_study" },
};

const decisions = [
  {
    number: "01", title: "Start on the right path.",
    copy: "‘Register to apply’ needed to work for people arriving for the first time and applicants coming back. I gave each group a different next step before they reached the application form.",
  },
  {
    number: "02", title: "One application. Its own team.",
    copy: "The same person could apply to different challenges with different teams. I kept team edits inside each application draft. Submission used the team details reviewed with that application, so later account changes couldn’t alter a submitted team.",
  },
  {
    number: "03", title: "Publish once. Update both views.",
    copy: "I connected admin publishing to the public challenge catalogue and detail pages. Staff could manage content in one place, keep drafts hidden until ready, and track edits through revision history.",
  },
];

const screenshotRoot = "/assets/case-studies/nesfic-2026/";
const screens = {
  "01": [
    ["registration-form", "Registration form for new applicants", 1425, 1834, "New applicants choose their participation type and register."],
  ],
  "02": [["application-team-fresh", "Fresh application team editor with blank application fields", 1425, 891, "The team is edited inside this application draft, with a role for each member."]],
  "03": [
    ["admin-publishing", "Admin challenge publishing editor", 1440, 760, "Staff edit challenge content and control its publishing state."],
    ["admin-revision-history", "Challenge revision history", 1425, 891, "Revision history records changes to challenge content."],
    ["challenge-catalogue", "Public challenge catalogue", 1425, 4435, "Published challenges appear in the public catalogue."],
    ["challenge-detail", "Public challenge detail page", 1425, 3753, "The detail page presents the challenge requirements before applicants apply."],
  ],
};

export default function NesficCaseStudy() {
  return <main id="main" className="min-h-screen overflow-x-clip">
    <div id="case-top" className="layout-container pb-16 pt-8 md:pb-24 md:pt-12">
      <Link href="/#work" className="type-mono inline-flex min-h-11 items-center gap-4 text-muted hover:text-copper"><span aria-hidden="true">←</span> Selected work</Link>
      <header className="mb-14 mt-6 md:mb-20 md:mt-8">
        <p className="section-label">CASE STUDY / GOVERNMENT PLATFORM / 2026</p>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-x-12">
          <h1 className="text-[clamp(52px,8vw,120px)]">NESFIC 2026<span className="text-copper">.</span></h1>
          <p className="max-w-[44ch] self-center text-[15px] leading-relaxed text-muted lg:row-span-2">A portal for the North East Seva First Innovation Challenge. I designed the full experience, implemented the frontend, and handled client communication. The first production release shipped in seven days.</p>
          <p className="max-w-[23ch] font-display text-[clamp(26px,3vw,44px)] leading-[1.15] tracking-[-.04em]">From challenge discovery to application submission.</p>
        </div>
      </header>

      <figure className="m-0 ml-auto min-w-0 md:w-[94%]">
        <ProjectBrowser id="nesfic" title="NESFIC 2026" image={`${screenshotRoot}portal-overview-clean-frame.jpg`} caseImage />
        <figcaption className="mt-3 max-w-[65ch] text-[13px] leading-[1.65] text-ink/75">The public portal: finding a challenge and starting an application.</figcaption>
      </figure>

      <dl className="my-12 grid grid-cols-1 gap-7 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4 md:my-16">
        {[
          ["MY ROLE", "Portal design, frontend implementation, client communication"],
          ["FIRST RELEASE", "7 days · Launched 25 September 2026"],
          ["COLLABORATORS", "Backend developer, clients, VPS developer"],
          ["STATUS", "Live · Subsequent updates ongoing"],
        ].map(([label, value]) => <div key={label}><dt className="type-mono mb-3 text-copper">{label}</dt><dd className="m-0 max-w-[30ch] text-[14px] leading-relaxed">{value}</dd></div>)}
      </dl>

      <section aria-labelledby="brief-heading" className="mb-12 grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16 md:mb-16">
        <h2 id="brief-heading" className="text-[32px] md:text-[40px]">The brief.</h2>
        <div className="max-w-[65ch] space-y-4 text-[15px] leading-relaxed text-muted">
          <p>Applicants needed to find a relevant challenge and submit a proposal. Programme staff needed to publish challenges and manage applications.</p>
          <p>Each application needed its own team, while published challenge content had to stay consistent across the admin and public views. I owned the portal design, frontend implementation, and client updates.</p>
          <p>I worked from programme briefs, application field specifications, and admin handoff documents. Formal user research and analytics weren’t available.</p>
        </div>
      </section>

      <div className="space-y-16 md:space-y-20">
        {decisions.map(decision => <section key={decision.number} aria-labelledby={`decision-${decision.number}`}>
          <MotionElement className="mb-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20 md:mb-10">
            <div><p className="section-label mb-4">{decision.number} / DESIGN DECISION</p><h2 id={`decision-${decision.number}`} className="max-w-[20ch] text-[32px] md:text-[44px]">{decision.title}</h2></div>
            <p className="max-w-[52ch] self-end text-[15px] leading-[1.75] text-ink/80">{decision.copy}</p>
          </MotionElement>
          {decision.number === "03" ? <><CaseStudyDiagram kind="publish" /><ScreenshotRail label={`${decision.title} screenshots`}>
            {screens[decision.number].map(([file, label, width, height, caption]) => <CaseStudyScreenshot key={file} src={`${screenshotRoot}${file}.jpg`} label={label} caption={caption} width={width} height={height} paired sliding cropped={file === "challenge-catalogue" || file === "challenge-detail"} />)}
          </ScreenshotRail></> : <div className={decision.number === "01" ? "grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]" : "grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]"}>
            <div className={decision.number === "02" ? "lg:col-start-2 lg:row-start-1" : ""}><CaseStudyDiagram kind={decision.number === "01" ? "entry" : "team"} /></div>
            {screens[decision.number].map(([file, label, width, height, caption]) => <CaseStudyScreenshot key={file} src={`${screenshotRoot}${file}.jpg`} label={label} caption={caption} width={width} height={height} details={decision.number === "02"} />)}
          </div>}
        </section>)}
      </div>

      <section aria-labelledby="delivery-heading" className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1.3fr_1fr] lg:gap-x-16 md:mt-16 md:pt-12">
        <div><p className="section-label mb-4">DELIVERY</p><h2 id="delivery-heading" className="text-[clamp(40px,5vw,72px)]">Live in seven days<span className="text-copper">.</span></h2><p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted">The first production release launched on 25 September 2026. I’m continuing to implement updates as the programme’s requirements develop.</p></div>
        <div className="self-end"><p className="type-mono mb-4 text-copper">STACK</p><p className="max-w-[48ch] text-[14px] leading-relaxed text-muted">Next.js, React, TypeScript, Tailwind CSS, PostgreSQL with Drizzle ORM, and GitHub Actions for deployment.</p></div>
        <div className="lg:col-span-2"><CaseStudyDiagram kind="delivery" /></div>
      </section>
      <nav aria-label="Case study navigation" className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8 text-[14px]">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-4 hover:text-copper"><span aria-hidden="true">←</span> Back to selected work</Link>
        <Link href="/#contact" className="inline-flex min-h-11 items-center gap-4 hover:text-copper">Discuss a project <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </main>;
}



