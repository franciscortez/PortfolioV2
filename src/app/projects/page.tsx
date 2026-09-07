import { ProjectsPage } from "@/components/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Web applications and automations by Francis Emil M. Cortez, spanning booking, payment integrations, budget tracking, and inbox workflows.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage />;
}
