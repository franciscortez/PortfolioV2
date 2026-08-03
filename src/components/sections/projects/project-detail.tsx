"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { skillIcons } from "@/data/icons";
import type { Project } from "@/data/project";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div>
      {/* Title + Links */}
      <div className="border-b border-border px-6 py-6 sm:px-8 xl:px-10 xl:py-8 massive:px-14 massive:py-10">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted massive:text-xs">
          {project.subtitle}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl xl:text-4xl massive:text-5xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted massive:text-base">
          {project.summary}
        </p>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isGithub = link.type === "github";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-medium transition-colors massive:px-5 massive:py-3 massive:text-sm ${isGithub
                    ? "border-border text-muted hover:border-accent hover:text-accent"
                    : "button-accent"
                    }`}
                >
                  {isGithub ? (
                    <FaGithub aria-hidden="true" className="size-3.5 massive:size-4" />
                  ) : (
                    <FaExternalLinkAlt aria-hidden="true" className="size-3 massive:size-3.5" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Image */}
      {project.images.length > 0 && (
        <div className="border-b border-border">
          {project.images.map((img, index) => (
            <figure key={img.src} className="flex flex-col">
              <div className="relative aspect-video w-full overflow-hidden bg-background">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain transition-opacity hover:opacity-90"
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  quality={100}
                />
              </div>
            </figure>
          ))}
        </div>
      )}

      {/* Tech Stack | Overview — side by side on desktop */}
      <div className="grid lg:grid-cols-[minmax(12rem,35%)_minmax(0,1fr)]">
        {/* Tech Stack */}
        <div className="border-b border-border px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r xl:px-10 xl:py-8 massive:px-14 massive:py-10">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted massive:text-xs">
            Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => {
              const Icon = skillIcons[t.icon];
              return (
                <div
                  key={t.name}
                  className="group flex items-center gap-2 border border-border bg-background px-3 py-2 transition-colors hover:border-muted massive:px-4 massive:py-2.5"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-3.5 text-muted transition-colors group-hover:text-foreground massive:size-4"
                  />
                  <span className="text-xs font-medium text-muted massive:text-sm">
                    {t.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Categories */}
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted massive:text-xs">
            Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border bg-background px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted massive:px-3 massive:py-1.5 massive:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview + Key Features */}
        <div className="px-6 py-6 sm:px-8 xl:px-10 xl:py-8 massive:px-14 massive:py-10">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted massive:text-xs">
            Overview
          </p>
          <p className="mt-4 text-sm leading-8 text-muted massive:text-base">
            {project.explanation}
          </p>

          {/* Key Features */}
          {project.features.length > 0 && (
            <div className="mt-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted massive:text-xs">
                Key Features
              </p>
              <ul className="mt-3 grid gap-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted massive:text-base"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
