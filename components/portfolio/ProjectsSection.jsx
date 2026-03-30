import { ArrowRight } from "lucide-react";

import projectOneImage from "@/assets/project1.png";
import projectTwoImage from "@/assets/project3.png";
import { projects } from "./content";
import ProjectPreview from "./ProjectPreview";

const previewImages = [projectOneImage, projectTwoImage];
const previewLabels = ["Dashboard Preview", "System Preview"];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-block"
    >
      <div className="section-shell space-y-12 md:space-y-16 lg:space-y-20 2xl:space-y-28">
        <div className="space-y-4">
          <h2 id="projects-heading" className="section-heading">
            Selected Projects
          </h2>
          <p className="section-intro">
            Real-world systems where interface design, delivery structure, stakeholder coordination, and operational reliability had to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-32 2xl:gap-40">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <article
                key={project.title}
                className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 lg:gap-24 2xl:gap-32"
              >
                <ProjectPreview
                  image={previewImages[index % previewImages.length]}
                  label={previewLabels[index % previewLabels.length]}
                  alt={`Preview interface for ${project.title}`}
                  className={isReverse ? "md:order-2" : "md:order-1"}
                />

                <div
                  className={`space-y-4 px-1 pb-1 ${isReverse ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                    }`}
                >
                  <h3 className="text-2xl font-semibold leading-tight text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="muted-copy leading-7 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    aria-label={`View case study for ${project.title} by contacting Ronny Das`}
                    className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-neutral-900 transition-colors duration-150 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
                  >
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}