import Link from "next/link";
import { siteIcons, skillIcons } from "@/data/icons";
import { featuredSkills, homeSkills } from "@/data/skills";

const remainingSkillsCount = featuredSkills.length - homeSkills.length;

export function SkillsSection() {
  const CodeIcon = siteIcons.code;

  return (
    <section className="border border-border bg-background">
      <div className="flex items-center justify-between gap-5 border-b border-border p-6 sm:p-8">
        <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
          <CodeIcon aria-hidden="true" className="size-3.5" />
          skills
        </p>

        <Link
          href="/skills"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
        >
          +{remainingSkillsCount} more skills
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
        {homeSkills.map((skill) => {
          const Icon = skillIcons[skill.icon];

          return (
            <article
              key={`${skill.category}-${skill.name}`}
              className="group flex min-h-36 flex-col items-center justify-center border-b border-r border-border p-5 text-center transition-colors hover:bg-panel sm:p-6"
            >
              <Icon
                aria-hidden="true"
                className="size-11 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 sm:size-12"
                style={{ color: skill.color }}
              />

              <h3 className="mt-5 text-sm font-medium text-foreground">
                {skill.name}
              </h3>
              <p className="mt-1 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-muted">
                {skill.category}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
