import { siteIcons } from "@/data/icons";
import { featuredSkills, skillCategories } from "@/data/skills";

export function SkillsHeader() {
  const CodeIcon = siteIcons.code;
  const FocusIcon = siteIcons.focus;
  const LayersIcon = siteIcons.layers;

  return (
    <header className="border border-border bg-panel">
      <div className="border-b border-border px-5 py-3 lg:px-4 lg:py-3.5 xl:px-5 xl:py-4 massive:px-8 massive:py-6">
        <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent xl:text-sm massive:text-lg">
          <CodeIcon aria-hidden="true" className="size-3.5" />
          Skills
        </h2>
      </div>

      <dl className="flex flex-col sm:flex-row">
        <div className="border-b border-border p-6 sm:flex-1 sm:border-b-0 sm:border-r sm:p-8">
          <dt className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            <LayersIcon aria-hidden="true" className="size-3.5" />
            Categories
          </dt>
          <dd className="mt-2 text-3xl font-semibold text-white">
            {skillCategories.length}
          </dd>
        </div>
        <div className="border-b border-border p-6 sm:flex-1 sm:border-b-0 sm:border-r sm:p-8">
          <dt className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            <CodeIcon aria-hidden="true" className="size-3.5" />
            Skills
          </dt>
          <dd className="mt-2 text-3xl font-semibold text-white">
            {featuredSkills.length}
          </dd>
        </div>
        <div className="p-6 sm:flex-1 sm:p-8">
          <dt className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            <FocusIcon aria-hidden="true" className="size-3.5" />
            Focus
          </dt>
          <dd className="mt-2 text-sm leading-7 text-zinc-300">
            Full-stack development, integrations, and automation workflows.
          </dd>
        </div>
      </dl>
    </header>
  );
}
