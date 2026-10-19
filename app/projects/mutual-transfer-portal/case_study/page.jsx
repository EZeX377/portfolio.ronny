import Link from "next/link";
import CaseStudyScreenshot from "@/components/portfolio/CaseStudyScreenshot";
import MotionElement from "@/components/portfolio/MotionElement";

const title = "Mutual Transfer Portal — Case study · Ronny Das";
const description = "UI/UX and delivery coordination for Assam’s Mutual Transfer Portal: employee applications, role-based reviews, and cross-department workflows.";
const url = "/projects/mutual-transfer-portal/case_study";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, type: "article", url },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/opengraph-image", alt: "Ronny Das — Project Lead & UI/UX Developer" }] },
};

const workflow = [
  ["Employee", "Submit a mutual transfer request and follow its status."],
  ["Verifying officer", "Review the application at the verification stage."],
  ["Head of department", "Review requests within the department’s approval stage."],
  ["Administrator", "Oversee the workflow across departments."],
];

const decisions = [
  {
    number: "01",
    title: "Give each role a focused view.",
    copy: "Employees, verifying officers, heads of department, and administrators had different responsibilities. I mapped the journey across these roles and designed their interfaces around the tasks and information relevant to each stage.",
    label: "ROLE-BASED INTERFACES",
    detail: "An employee’s application journey and an officer’s review workflow needed different views of the same process.",
  },
  {
    number: "02",
    title: "Make the application’s stage visible.",
    copy: "The paper-based process made it difficult for employees to understand where a request stood. I designed submission and tracking flows that showed the application’s current stage, alongside dashboards for administrative monitoring.",
    label: "SUBMISSION & TRACKING",
    detail: "Status information was part of the employee journey, alongside the forms needed to submit a request.",
  },
  {
    number: "03",
    title: "Connect the interface to department structure.",
    copy: "The portal served employees across departments. I worked on the relationships between designations and departments, and used that structure when planning user flows and coordinating the interface with the wider system.",
    label: "CROSS-DEPARTMENT WORKFLOWS",
    detail: "Department and designation relationships informed the workflow, rather than being treated as isolated form fields.",
  },
];

// Supplied screenshots can be added here; an empty list keeps unfinished assets off the public page.
const screenshots = [];

export default function MutualTransferCaseStudy() {
  return <main id="main" className="min-h-screen overflow-x-clip">
    <div className="layout-container pb-16 pt-8 md:pb-24 md:pt-12">
      <Link href="/#work" className="type-mono inline-flex min-h-11 items-center gap-4 text-muted hover:text-copper"><span aria-hidden="true">←</span> Selected work</Link>

      <header className="mb-12 mt-6 md:mb-16 md:mt-8">
        <p className="section-label">CASE STUDY / GOVERNMENT SERVICES / ASSAM</p>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-x-12">
          <h1 className="max-w-[16ch] text-[clamp(46px,7.5vw,112px)]">Mutual Transfer Portal<span className="text-copper">.</span></h1>
          <p className="max-w-[46ch] self-center text-[15px] leading-relaxed text-muted lg:row-span-2">A portal for Grade III and IV government employees in Assam to apply for mutual transfers across departments. I led UI/UX delivery and coordinated requirements, interface development, and release refinements.</p>
          <p className="max-w-[25ch] font-display text-[clamp(26px,3vw,44px)] leading-[1.15] tracking-[-.04em]">One request. Several roles. A shared workflow.</p>
        </div>
      </header>

      <figure aria-labelledby="workflow-heading" className="m-0 bg-stage p-6 md:p-10">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
          <div><p className="type-mono mb-3 text-copper">THE APPROVAL JOURNEY</p><h2 id="workflow-heading" className="text-[28px] md:text-[36px]">From application to administration.</h2></div>
          <span className="type-mono text-muted">04 / CONNECTED ROLES</span>
        </div>
        <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map(([role, task], index) => <li key={role} className="min-w-0 border border-line bg-surface p-5">
            <span className="type-mono mb-7 block text-copper" aria-hidden="true">0{index + 1}</span>
            <h3 className="text-[24px]">{role}</h3>
            <p className="mt-4 max-w-[30ch] text-[13px] leading-relaxed text-muted">{task}</p>
          </li>)}
        </ol>
        <figcaption className="mt-6 max-w-[70ch] text-[13px] leading-relaxed text-muted">A simplified view of the roles used to plan the portal’s application and review interfaces.</figcaption>
      </figure>

      <dl className="my-12 grid grid-cols-1 gap-7 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4 md:my-16">
        {[
          ["MY ROLE", "Project Lead · UI/UX & Delivery"],
          ["PROJECT PERIODS", "January–June 2025 · February–March 2026"],
          ["USERS", "Employees, verifying officers, HODs, administrators"],
          ["SCOPE", "Requirements, UI development, release coordination, deployment support"],
        ].map(([label, value]) => <div key={label}><dt className="type-mono mb-3 text-copper">{label}</dt><dd className="m-0 max-w-[30ch] text-[14px] leading-relaxed">{value}</dd></div>)}
      </dl>

      <section aria-labelledby="brief-heading" className="mb-14 grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16 md:mb-20">
        <h2 id="brief-heading" className="text-[32px] md:text-[40px]">The brief.</h2>
        <div className="max-w-[65ch] space-y-4 text-[15px] leading-relaxed text-muted">
          <p>The existing mutual transfer process relied on paperwork, several approval stages, and offline coordination between departments. Employees had limited visibility into an application’s progress, while administrative teams needed to coordinate reviews and track requests.</p>
          <p>The portal brought submission, role-based review, and status tracking into a shared system. My work focused on translating those responsibilities into interfaces and coordinating UI/UX delivery across releases.</p>
        </div>
      </section>

      <div className="space-y-12 md:space-y-16">
        {decisions.map(decision => <section key={decision.number} aria-labelledby={`decision-${decision.number}`}>
          <MotionElement className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[1fr_1fr] lg:gap-20 md:pt-10">
            <div><p className="section-label mb-4">{decision.number} / DESIGN DECISION</p><h2 id={`decision-${decision.number}`} className="max-w-[21ch] text-[32px] md:text-[44px]">{decision.title}</h2></div>
            <div className="max-w-[55ch] space-y-6 self-end">
              <p className="text-[15px] leading-[1.75] text-ink/80">{decision.copy}</p>
              <div className="border-l-2 border-copper py-1 pl-5"><p className="type-mono mb-3 text-copper">{decision.label}</p><p className="text-[14px] leading-relaxed text-muted">{decision.detail}</p></div>
            </div>
          </MotionElement>
        </section>)}
      </div>

      {screenshots.length > 0 && <section aria-labelledby="screens-heading" className="mt-16 md:mt-20">
        <p className="section-label mb-4">THE INTERFACE</p><h2 id="screens-heading" className="mb-8 text-[32px] md:text-[44px]">The workflow on screen.</h2>
        <div className="grid items-start gap-10 lg:grid-cols-2">{screenshots.map(screen => <CaseStudyScreenshot key={screen.src} {...screen} />)}</div>
      </section>}

      <section aria-labelledby="delivery-heading" className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20 md:mt-20 md:pt-12">
        <div><p className="section-label mb-4">DELIVERY & COORDINATION</p><h2 id="delivery-heading" className="max-w-[18ch] text-[clamp(36px,4vw,60px)]">From requirements to release<span className="text-copper">.</span></h2><p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted">My role extended beyond the screens. I gathered requirements in stakeholder meetings, coordinated UI refinements across releases, and supported deployment work.</p></div>
        <div className="self-end">
          <ul className="m-0 list-none space-y-4 p-0 text-[14px] leading-relaxed text-muted">
            <li className="border-b border-line pb-4">Gathered requirements through meetings with departmental stakeholders.</li>
            <li className="border-b border-line pb-4">Developed interfaces using HTML and Tailwind CSS, alongside a Laravel-based system.</li>
            <li className="border-b border-line pb-4">Coordinated iterative releases and subsequent UI refinements.</li>
            <li>Supported server setup through SSH and database updates.</li>
          </ul>
          <p className="type-mono mb-3 mt-8 text-copper">PROJECT STACK</p><p className="text-[14px] leading-relaxed text-muted">HTML, CSS, jQuery, Laravel, Tailwind CSS, MySQL.</p>
        </div>
      </section>

      <nav aria-label="Case study navigation" className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8 text-[14px]">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-4 hover:text-copper"><span aria-hidden="true">←</span> Back to selected work</Link>
        <Link href="/#contact" className="inline-flex min-h-11 items-center gap-4 hover:text-copper">Discuss a project <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </main>;
}
