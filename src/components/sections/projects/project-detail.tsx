"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { skillIcons, siteIcons } from "@/data/icons";
import type { Project, ProjectImage } from "@/data/project";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [zoomedImage, setZoomedImage] = useState<ProjectImage | null>(null);

  // Close zoomed image on Escape keypress
  useEffect(() => {
    if (!zoomedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedImage]);

  // Prevent scroll when zoom modal is open
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedImage]);

  const CloseIcon = siteIcons.close;
  return (
    <div className="custom-scrollbar h-full overflow-y-auto">
      {/* Title + Links */}
      <div className="border-b border-border px-6 py-6 sm:px-8">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
          {project.subtitle}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
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
                  className={`inline-flex items-center gap-2 border px-4 py-2.5 text-xs font-medium transition-colors ${isGithub
                      ? "border-border text-zinc-300 hover:border-accent hover:text-accent"
                      : "button-accent"
                    }`}
                >
                  {isGithub ? (
                    <FaGithub aria-hidden="true" className="size-3.5" />
                  ) : (
                    <FaExternalLinkAlt aria-hidden="true" className="size-3" />
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
          {project.images.map((img) => (
            <figure key={img.src} className="flex flex-col">
              <button
                type="button"
                className="relative aspect-video w-full overflow-hidden bg-black text-left cursor-zoom-in focus-visible:ring-1 focus-visible:ring-accent outline-none"
                onClick={() => setZoomedImage(img)}
                aria-label={`Zoom screenshot: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain transition-opacity hover:opacity-90"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </button>
            </figure>
          ))}
        </div>
      )}

      {/* Tech Stack | Overview — side by side on desktop */}
      <div className="grid lg:grid-cols-[minmax(12rem,35%)_minmax(0,1fr)]">
        {/* Tech Stack */}
        <div className="border-b border-border px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
            Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => {
              const Icon = skillIcons[t.icon];
              return (
                <div
                  key={t.name}
                  className="group flex items-center gap-2 border border-border bg-black px-3 py-2 transition-colors hover:border-zinc-600"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-3.5 text-zinc-400 transition-colors group-hover:text-white"
                  />
                  <span className="text-xs font-medium text-zinc-300">
                    {t.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Categories */}
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
            Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border bg-black px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Overview + Key Features */}
        <div className="px-6 py-6 sm:px-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
            Overview
          </p>
          <p className="mt-4 text-sm leading-8 text-zinc-300">
            {project.explanation}
          </p>

          {/* Key Features */}
          {project.features.length > 0 && (
            <div className="mt-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-zinc-500">
                Key Features
              </p>
              <ul className="mt-3 grid gap-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-400"
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

      {/* Lightbox / Zoom Overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed screenshot"
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 z-[110] flex items-center justify-center border border-border bg-black/50 p-2 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
            onClick={() => setZoomedImage(null)}
            aria-label="Close zoom overlay"
          >
            <CloseIcon className="size-5" />
          </button>

          {/* Zoomed Image container */}
          <div className="relative max-h-[80vh] max-w-[90vw] aspect-video w-full">
            <Image
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption */}
          {zoomedImage.description && (
            <p className="mt-4 font-mono text-[0.68rem] tracking-wide text-zinc-400 max-w-2xl text-center px-4">
              <span className="mr-1.5 font-semibold text-zinc-300">{"//"}</span>
              {zoomedImage.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
