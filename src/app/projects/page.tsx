import { ProjectsPage } from "@/components/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected full-stack projects by Francis Emil M. Cortez, including web applications, payment integrations, AI-powered tools, dashboards, and portfolio work.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage />;
}
