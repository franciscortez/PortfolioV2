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
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          Projects
        </h2>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600">
          {projects.length} total
        </span>
      </div>
      <div className="scrollbar-hidden max-h-72 overflow-y-auto lg:flex lg:max-h-none lg:overflow-x-auto lg:overflow-y-hidden">
        {projects.map((project, index) => {
          const isActive = project.slug === activeSlug;
          const formattedIndex = String(index + 1).padStart(2, "0");

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => onSelect(project.slug)}
              aria-current={isActive ? "true" : undefined}
              className={`group relative flex w-full flex-col gap-1 border-b border-border px-5 py-3 text-left transition-colors duration-150 lg:w-72 lg:shrink-0 lg:border-b-0 lg:border-r ${
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
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-zinc-600">
                  {formattedIndex}
                </span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {project.title}
                </span>
              </div>

              <p className="line-clamp-2 pl-[1.6rem] text-xs leading-relaxed text-zinc-500">
                {project.summary}
              </p>

              <div className="mt-0 flex flex-wrap gap-1.5 pl-[1.6rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-zinc-600"
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
