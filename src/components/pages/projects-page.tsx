"use client";

import { useMemo, useState } from "react";
import {
  projects,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/data/project";
import { ProjectHeader } from "@/components/sections/projects/project-header";
import { ProjectList } from "@/components/sections/projects/project-list";
import { ProjectDetail } from "@/components/sections/projects/project-detail";

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("web-development");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (Array.isArray(project.category)) {
        return project.category.includes(selectedCategory);
      }
      return project.category === selectedCategory;
    });
  }, [selectedCategory]);

  const effectiveSlug =
    activeSlug && filteredProjects.some((p) => p.slug === activeSlug)
      ? activeSlug
      : filteredProjects[0]?.slug;

  const activeProject = filteredProjects.find(
    (project) => project.slug === effectiveSlug
  );

  if (projects.length === 0) {
    return (
      <section className="border border-border bg-background p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Projects
        </p>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground">
          No projects available yet.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          Add projects to the centralized project data file to populate this
          page.
        </p>
      </section>
    );
  }

  const activeCategoryLabel =
    PROJECT_CATEGORIES.find((c) => c.id === selectedCategory)?.label ??
    selectedCategory;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <section className="flex-1 border border-border bg-background">
        <div className="flex min-h-144 flex-col">
          <ProjectHeader
            categories={PROJECT_CATEGORIES}
            activeCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setActiveSlug(null);
            }}
            totalProjects={filteredProjects.length}
          />
          {filteredProjects.length > 0 && activeProject ? (
            <>
              <ProjectList
                projects={filteredProjects}
                activeSlug={effectiveSlug ?? ""}
                onSelect={setActiveSlug}
              />
              <div className="flex-1 border-t border-border">
                <ProjectDetail project={activeProject} />
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center p-12 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                {activeCategoryLabel}
              </p>
              <h2 className="mt-3 font-heading text-xl font-semibold text-foreground">
                No projects found in this category.
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                Projects for this category will appear here once added to the
                portfolio data.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
