import { projects } from "@/components/portfolio/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Layout, Users, Zap } from "lucide-react";
import Link from "next/link";
import ProjectPreview from "@/components/portfolio/ProjectPreview";

// Project Thumbnail Mapping (Matches ProjectsSection)
import projectOneImage from "@/assets/project1.png";
import projectTwoImage from "@/assets/project3.png";
const projectImages = {
  "mutual-transfer-portal": projectOneImage,
  "eap-mis": projectTwoImage,
};

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-block min-h-screen">
      <div className="section-shell">
        <Link
          href="/#projects"
          className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="size-4" /> Back to Projects
        </Link>

        {/* Header - Unified with Index */}
        <header className="grid gap-12 items-end mb-20 lg:mb-32">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill text-[.6rem] uppercase tracking-widest bg-indigo-50/50 dark:bg-indigo-950/30">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="section-heading text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[0.95]">
              {project.title}
            </h1>
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300 lg:text-lg 2xl:text-xl lg:leading-8">
              {project.description}
            </p>
          </div>

          <div className="relative h-full w-full flex items-center justify-center">
            <ProjectPreview
              image={projectImages[id] || projectOneImage}
              alt={`${project.title} Interface Preview`}
              label={`${project.title}`}
              priority
            />
          </div>
        </header>

        {project.caseStudy ? (
          <div className="space-y-24 md:space-y-32 mb-20">
            {/* Overview Stats */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="surface-card p-6 border-b-2 border-b-indigo-500/30">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">Duration</span>
                {project.caseStudy.duration.map((item) =>
                  <p key={item} className={`font-semibold text-neutral-900 dark:text-white ${item.length > 1 ? "mb-0.5" : ""}`}> {item}</p>
                )}
              </div>
              <div className="surface-card p-6 border-b-2 border-b-indigo-500/30">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">Role</span>
                <p className="font-semibold text-neutral-900 dark:text-white">{project.caseStudy.role}</p>
              </div>
              <div className="surface-card p-6 border-b-2 border-b-indigo-500/30">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">Type</span>
                <p className="font-semibold text-neutral-900 dark:text-white">{project.caseStudy.type}</p>
              </div>
              <div className="surface-card p-6 border-b-2 border-b-indigo-500/30">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">Stack</span>
                <p className="font-semibold text-neutral-900 dark:text-white">{project.caseStudy.stack}</p>
              </div>
            </section>

            {/* Problem & Users */}
            <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">The Users & Problem</h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.caseStudy.usersAndProblem.users.map(user => (
                    <span key={user} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold">
                      <Users className="size-3" /> {user}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                {project.caseStudy.usersAndProblem.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Approach & Execution */}
            <section className="space-y-12">
              <div className="max-w-[800px] space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Approach (Role & Execution)</h2>
                <p className="muted-copy text-lg">{project.caseStudy.approach.intro}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                <div className="space-y-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                    <Zap className="size-5 text-indigo-500" /> Strategic Delivery
                  </h3>
                  <ul className="space-y-4">
                    {project.caseStudy.approach.strategicDelivery.map(item => (
                      <li key={item} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                        <CheckCircle2 className="size-5 shrink-0 text-indigo-500/60" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white">
                    <Layout className="size-5 text-indigo-500" /> Design Framework
                  </h3>
                  <ul className="space-y-4">
                    {project.caseStudy.approach.designFramework.map(item => (
                      <li key={item} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                        <CheckCircle2 className="size-5 shrink-0 text-indigo-500/60" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Solution & Final Design */}
            <section className="surface-card p-8 md:p-16 rounded-[2.5rem] border-neutral-200/80 bg-neutral-50/20 dark:border-neutral-800/80 dark:bg-neutral-900/40">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
                  <div className="space-y-4">
                    {project.caseStudy.solution.points.map(item => (
                      <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50">
                        <div className="size-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                          <div className="size-1.5 rounded-full bg-indigo-500" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight italic text-indigo-500/90 font-harabara">Final Design Strategy</h2>
                  {project.caseStudy.solution.designStrategy.map((p, i) => (
                    <p key={i} className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Visuals Placeholder */}
            {/* <section className="space-y-12">
               <h2 className="text-3xl font-bold tracking-tight">Visual Identity & System Screens</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video rounded-3xl bg-neutral-100 dark:bg-neutral-800 animate-pulse border border-neutral-200 dark:border-neutral-700" />
                  <div className="aspect-video rounded-3xl bg-neutral-100 dark:bg-neutral-800 animate-pulse border border-neutral-200 dark:border-neutral-700" />
               </div>
            </section> */}

            {/* Ending CTA */}
            <section className="text-center py-20 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-semibold mb-8">Want to learn more about the technical challenges of this platform?</h3>
              <Link href="/#contact" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full bg-neutral-900 px-10 text-base font-semibold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-neutral-950">
                Get in touch for a technical deep-dive
              </Link>
            </section>
          </div>
        ) : (
          <section className="mt-16 md:mt-24">
            <div className="surface-card flex min-h-[500px] flex-col items-center justify-center p-12 text-center rounded-3xl border border-neutral-200/60 bg-neutral-50/20 backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/40">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Detailed Case Study In Preparation
              </h2>
              <p className="muted-copy max-w-md mx-auto">
                I&apos;m currently documenting the technical deep-dive, system architecture diagrams, and delivery narratives for the {project.title}.
              </p>
              <Link
                href="/#contact"
                className="focus-ring mt-10 inline-flex min-h-[48px] items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-semibold text-white shadow-xl shadow-neutral-200 dark:bg-white dark:text-neutral-950 dark:shadow-none"
              >
                Let&apos;s Discuss This Project
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
