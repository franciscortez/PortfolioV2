"use client";

import { useState } from "react";
import { projects } from "@/data/project";
import { ProjectHeader } from "@/components/sections/projects/project-header";
import { ProjectList } from "@/components/sections/projects/project-list";
import { ProjectDetail } from "@/components/sections/projects/project-detail";

export function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const activeProject =
    projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col gap-6 lg:min-h-[calc(100vh-5rem)]">

      <section className="border border-border bg-black lg:min-h-0 lg:flex-1 lg:overflow-hidden">
        <div className="flex h-full min-h-128 flex-col">
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
