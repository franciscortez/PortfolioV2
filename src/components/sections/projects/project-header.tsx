import { siteIcons } from "@/data/icons";
import type { ProjectCategory } from "@/data/project";

export type ProjectCategoryOption = {
  id: ProjectCategory;
  label: string;
};

type ProjectHeaderProps = {
  categories: readonly ProjectCategoryOption[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  totalProjects: number;
};

export function ProjectHeader({
  categories,
  activeCategory,
  onSelectCategory,
  totalProjects,
}: ProjectHeaderProps) {
  const ProjectsIcon = siteIcons.layers;

  return (
    <header className="flex flex-col gap-3 border-b border-border px-5 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-4 lg:py-3.5 xl:px-5 xl:py-4 massive:px-8 massive:py-6">
      <div className="flex items-center justify-between gap-4 sm:justify-start">
        <h1 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent xl:text-sm massive:text-lg">
          <ProjectsIcon aria-hidden="true" className="size-3.5" />
          Projects
        </h1>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted sm:hidden">
          {totalProjects} {totalProjects === 1 ? "project" : "projects"}
        </span>
      </div>

      <div
        className="flex items-center gap-1.5"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.id)}
              className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-contrast font-medium"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted sm:inline-block lg:text-xs massive:text-sm">
        {totalProjects} {totalProjects === 1 ? "project" : "projects"}
      </span>
    </header>
  );
}
