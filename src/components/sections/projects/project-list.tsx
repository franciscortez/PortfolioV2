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
                  ? "bg-panel text-foreground"
                  : "text-muted hover:bg-panel hover:text-foreground"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent transition-transform duration-200 ease-out ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />

              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted lg:text-[0.68rem] xl:text-xs massive:text-sm">
                  {formattedIndex}
                </span>
                <span
                  className={`text-sm font-medium transition-colors lg:text-sm xl:text-base massive:text-xl ${
                    isActive ? "text-foreground" : ""
                  }`}
                >
                  {project.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
