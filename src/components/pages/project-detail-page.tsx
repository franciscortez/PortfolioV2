import { ProjectDetail } from "@/components/sections/projects/project-detail";
import type { Project } from "@/data/project";

export function ProjectDetailPage({ project }: { project: Project }) {
  return <ProjectDetail project={project} />;
}
