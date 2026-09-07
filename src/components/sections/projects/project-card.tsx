import Image from "next/image";
import Link from "next/link";
import { PROJECT_CATEGORIES, type Project } from "@/data/project";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  const image = project.images[0];
  return (
    <article aria-labelledby={`${project.slug}-title`} className="min-w-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        aria-labelledby={`${project.slug}-title`}
      >
        {image && (
          <div className="relative aspect-video overflow-hidden bg-panel">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 100vw"
              priority={priority}
            />
          </div>
        )}
        <div className="pt-4">
          <p className="mb-2 text-xs text-muted">
            {categories
              .map(
                (category) =>
                  PROJECT_CATEGORIES.find((option) => option.id === category)
                    ?.label
              )
              .join(" / ")}
          </p>
          <h2
            id={`${project.slug}-title`}
            className="text-xl font-semibold tracking-tight group-hover:text-accent sm:text-2xl"
          >
            {project.title}
          </h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-6 text-muted">
            {project.summary}
          </p>
          <span className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 group-hover:decoration-accent">
            View project
          </span>
        </div>
      </Link>
    </article>
  );
}
