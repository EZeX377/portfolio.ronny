import SkillBullet from "./SkillBullet";
import { skillGroups } from "./content";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-block">
      <div className="section-shell space-y-12 md:space-y-16 lg:space-y-20 2xl:space-y-24">
        <div className="space-y-4">
          <h2 id="skills-heading" className="section-heading">
            Skills Across Delivery and Implementation
          </h2>
          <p className="section-intro">
            Frontend development, design tooling, project coordination, and deployment support brought together in one delivery-focused workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 2xl:gap-16">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card">
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