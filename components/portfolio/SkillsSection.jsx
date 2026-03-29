import SkillBullet from "./SkillBullet";
import { skillGroups } from "./content";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-block page-shell">
      <div className="section-shell space-y-10 md:space-y-14">
        <div className="space-y-4">
          <h2 id="skills-heading" className="section-heading">
            Skills Across Delivery and Implementation
          </h2>
          <p className="section-intro">
            Frontend development, design tooling, project coordination, and deployment support brought together in one delivery-focused workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card px-6 py-7 md:px-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white md:text-2xl">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <SkillBullet key={item}>{item}</SkillBullet>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}