import { siteIcons } from "@/data/icons";

type ProjectHeaderProps = {
  totalProjects: number;
};

export function ProjectHeader({ totalProjects }: ProjectHeaderProps) {
  const ProjectsIcon = siteIcons.layers;

  return (
    <header className="flex items-center justify-between border-b border-border px-5 py-3 lg:px-4 lg:py-3.5 xl:px-5 xl:py-4 massive:px-8 massive:py-6">
      <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent xl:text-sm massive:text-lg">
        <ProjectsIcon aria-hidden="true" className="size-3.5" />
        Projects
      </h2>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600 lg:text-xs massive:text-sm">
        {totalProjects} total
      </span>
    </header>
  );
}
