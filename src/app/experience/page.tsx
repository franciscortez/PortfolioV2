import { ExperiencePage } from "@/components/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "Work experience, internship background, and education for Francis Emil M. Cortez, a full-stack developer focused on web apps, APIs, integrations, and automation.",
  path: "/experience",
});

export default function Page() {
  return <ExperiencePage />;
}
