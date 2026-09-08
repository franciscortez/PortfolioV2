import Image from "next/image";
import Link from "next/link";
import { siteIcons, skillIcons } from "@/data/icons";
import { PROJECT_CATEGORIES, type Project } from "@/data/project";

export function ProjectDetail({ project }: { project: Project }) {
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category];
  const BackIcon = siteIcons.back;
  return (
    <article className="font-sans" aria-labelledby="project-title">
      <Link
        href="/projects"
        className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted underline decoration-border underline-offset-4 hover:text-foreground"
      >
        <BackIcon aria-hidden="true" className="size-4 shrink-0" />
        Back to projects
      </Link>
      <header className="mb-6">
        <p className="mb-2 text-sm text-muted">
          {categories
            .map(
              (category) =>
                PROJECT_CATEGORIES.find((option) => option.id === category)
                  ?.label
            )
            .join(" / ")}{" "}
          / {project.subtitle}
        </p>
        <h1
          id="project-title"
          className="max-w-[22ch] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl xl:text-5xl"
        >
          {project.title}
        </h1>
        <p className="mt-3 max-w-[65ch] text-base leading-7 text-muted">
          {project.summary}
        </p>
        {project.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-6">
            {project.links.map((link) => {
              const Icon =
                link.type === "github"
                  ? siteIcons.github
                  : siteIcons.externalLink;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  <Icon aria-hidden="true" className="size-4 shrink-0" />
                  {link.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              );
            })}
          </div>
        )}
      </header>
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] xl:gap-8">
        <div className="min-w-0 space-y-4">
          {project.images.map((image, index) => (
            <figure key={image.src}>
              <div className="relative aspect-video overflow-hidden bg-panel">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 65vw, 100vw"
                  priority={index === 0}
                />
              </div>
              <figcaption className="mt-2 max-w-[70ch] text-xs leading-5 text-muted">
                {image.description}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="min-w-0 space-y-5">
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className="text-base font-semibold">
              How it works
            </h2>
            <p className="mt-2 max-w-[70ch] text-sm leading-6 text-muted">
              {project.explanation}
            </p>
          </section>
          <section aria-labelledby="features-title">
            <h2 id="features-title" className="text-base font-semibold">
              Capabilities
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section
            aria-labelledby="stack-title"
            className="border-t border-border pt-4"
          >
            <h2 id="stack-title" className="text-base font-semibold">
              Built with
            </h2>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs leading-5 text-muted">
              {project.tech.map((tech) => {
                const Icon = skillIcons[tech.icon];
                return (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-2 text-foreground"
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 shrink-0"
                      style={{ color: tech.color }}
                    />
                    {tech.name}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
      <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-border pt-4">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center text-sm underline decoration-border underline-offset-4 hover:text-accent"
        >
          Browse all projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center text-sm underline decoration-border underline-offset-4 hover:text-accent"
        >
          Get in touch
        </Link>
      </footer>
    </article>
  );
}
