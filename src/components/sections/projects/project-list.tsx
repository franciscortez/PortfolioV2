"use client";

import { useState } from "react";
import { siteIcons } from "@/data/icons";
import {
  PROJECT_CATEGORIES,
  type Project,
  type ProjectFilter,
} from "@/data/project";
import { ProjectCard } from "@/components/sections/projects/project-card";

const filters = [{ id: "all", label: "All" }, ...PROJECT_CATEGORIES] as const;
const filterIcons = {
  all: siteIcons.layers,
  "web-development": siteIcons.code,
  automation: siteIcons.automation,
};

function matchesFilter(project: Project, filter: ProjectFilter) {
  return (
    filter === "all" ||
    (Array.isArray(project.category)
      ? project.category.includes(filter)
      : project.category === filter)
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = projects.filter((project) =>
    matchesFilter(project, filter)
  );

  return (
    <section aria-label="Project collection">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="grid w-full grid-cols-[auto_auto_auto] gap-1 sm:flex sm:w-auto sm:gap-2"
        >
          {filters.map((option) => {
            const Icon = filterIcons[option.id];
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={filter === option.id}
                aria-controls="project-results"
                onClick={() => setFilter(option.id)}
                className={`inline-flex min-h-11 items-center justify-center gap-1.5 border px-2 py-2 text-xs transition-colors sm:gap-3 sm:px-4 sm:text-sm ${filter === option.id ? "button-accent font-medium" : "border-transparent text-muted hover:border-accent hover:text-accent"}`}
              >
                <Icon aria-hidden="true" className="size-3.5 shrink-0" />
                {option.label}{" "}
                <span className="tabular-nums">
                  {
                    projects.filter((project) =>
                      matchesFilter(project, option.id)
                    ).length
                  }
                </span>
              </button>
            );
          })}
        </div>
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-xs text-muted"
        >
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div
        id="project-results"
        className="grid gap-x-7 gap-y-8 pt-6 md:grid-cols-2 xl:gap-x-8 xl:gap-y-10"
      >
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={project.slug === projects[0]?.slug}
          />
        ))}
        {visibleProjects.length === 0 && (
          <div className="border-b border-border py-16 text-center">
            <h2 className="text-xl font-semibold">No projects to show yet.</h2>
            <p className="mt-3 text-sm text-muted">Check back for more work.</p>
            {filter !== "all" && (
              <button
                type="button"
                onClick={() => setFilter("all")}
                className="mt-6 min-h-11 border border-border px-4 text-sm hover:border-accent"
              >
                Show all projects
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
