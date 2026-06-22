"use client";

import type { Project } from "@/data/project";

type ProjectListProps = {
  projects: Project[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export function ProjectList({
  projects,
  activeSlug,
  onSelect,
}: ProjectListProps) {
  return (
    <nav aria-label="Project list" className="flex flex-col">
      <div className="flex items-center justify-between border-b border-border px-5 py-3 lg:px-4 lg:py-3.5 xl:px-5 xl:py-4 massive:px-8 massive:py-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-accent xl:text-sm massive:text-lg">
          Projects
        </h2>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600 lg:text-xs massive:text-sm">
          {projects.length} total
        </span>
      </div>
      <div className="scrollbar-hidden max-h-72 overflow-y-auto lg:grid lg:grid-flow-col lg:auto-cols-fr lg:max-h-none lg:overflow-x-hidden lg:overflow-y-hidden">
        {projects.map((project, index) => {
          const isActive = project.slug === activeSlug;
          const formattedIndex = String(index + 1).padStart(2, "0");

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => onSelect(project.slug)}
              aria-current={isActive ? "true" : undefined}
              className={`group relative flex w-full flex-col gap-1 border-b border-border px-5 py-3 text-left transition-colors duration-150 lg:w-full lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-4 lg:py-4 xl:px-5 xl:py-5 massive:px-8 massive:py-8 ${
                isActive
                  ? "bg-panel text-white"
                  : "text-zinc-400 hover:bg-zinc-950 hover:text-zinc-200"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent transition-transform duration-200 ease-out ${
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />

              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-600 lg:text-[0.68rem] xl:text-xs massive:text-sm">
                  {formattedIndex}
                </span>
                <span
                  className={`text-sm font-medium transition-colors lg:text-sm xl:text-base massive:text-xl ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {project.title}
                </span>
              </div>

              <p className="line-clamp-2 pl-[1.6rem] text-xs leading-relaxed text-zinc-500 lg:pl-[1.75rem] lg:text-xs xl:pl-[1.9rem] xl:text-sm massive:pl-[2.25rem] massive:text-base">
                {project.summary}
              </p>

              <div className="mt-0 flex flex-wrap gap-1.5 pl-[1.6rem] lg:pl-[1.75rem] xl:pl-[1.9rem] massive:pl-[2.25rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-zinc-600 lg:text-[0.62rem] xl:text-xs massive:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
