import Link from "next/link";
import { projects } from "@/data/project";
import { ProjectHeader } from "@/components/sections/projects/project-header";
import { ProjectList } from "@/components/sections/projects/project-list";

export function ProjectsPage() {
  return (
    <div className="font-sans">
      <ProjectHeader />
      <ProjectList projects={projects} />
      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <p className="text-sm text-muted">
          Have a workflow or web project in mind?
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center text-sm font-medium underline decoration-border underline-offset-4 hover:text-accent"
        >
          Get in touch
        </Link>
      </footer>
    </div>
  );
}
