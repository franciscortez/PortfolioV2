"use client";

import { useState } from "react";
import { projects } from "@/data/project";
import { ProjectHeader } from "@/components/sections/projects/project-header";
import { ProjectList } from "@/components/sections/projects/project-list";
import { ProjectDetail } from "@/components/sections/projects/project-detail";

export function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");

  const activeProject =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  if (!activeProject) {
    return (
      <section className="border border-border bg-background p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Projects
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          No projects available yet.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Add projects to the centralized project data file to populate this
          page.
        </p>
      </section>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:h-[calc(100vh-5rem)] lg:min-h-0">
      <section className="min-h-0 flex-1 border border-border bg-background lg:overflow-hidden">
        <div className="flex h-full min-h-144 flex-col lg:min-h-0">
          <ProjectHeader totalProjects={projects.length} />
          <ProjectList
            projects={projects}
            activeSlug={activeSlug}
            onSelect={setActiveSlug}
          />
          <div className="min-h-0 flex-1 overflow-hidden border-t border-border">
            <ProjectDetail project={activeProject} />
          </div>
        </div>
      </section>
    </div>
  );
}
