"use client";

import { useMemo, useState } from "react";
import { skillIcons } from "@/data/icons";
import type { SkillCategory } from "@/data/skills";

type SkillFilterValue = "All" | SkillCategory["title"];

type SkillsFilterProps = {
  categories: SkillCategory[];
};

export function SkillsFilter({ categories }: SkillsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<SkillFilterValue>("All");

  const filters = useMemo(
    () => ["All", ...categories.map((category) => category.title)] as const,
    [categories]
  );

  const visibleSkills = categories
    .filter(
      (category) => activeFilter === "All" || category.title === activeFilter
    )
    .flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        category: category.title,
      }))
    );

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              technical stack
            </p>
          </div>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Filter skills by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`border px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-accent-contrast"
                    : "border-border text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap">
        {visibleSkills.map((skill) => {
          const Icon = skillIcons[skill.icon];

          return (
            <article
              key={`${skill.category}-${skill.name}`}
              className="group flex min-h-36 w-1/2 flex-col items-center justify-center border-b border-r border-border p-5 text-center transition-colors hover:bg-panel sm:w-1/3 sm:p-6 xl:w-1/5 2xl:w-1/6"
            >
              <Icon
                aria-hidden="true"
                className="size-11 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 sm:size-12"
                style={{ color: skill.color }}
              />

              <h3 className="mt-5 text-sm font-medium text-foreground">
                {skill.name}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
