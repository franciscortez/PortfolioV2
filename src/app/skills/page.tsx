import { SkillsPage } from "@/components/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills",
  description:
    "Technical skills for Francis Emil M. Cortez across React, Next.js, TypeScript, Laravel, Express, databases, REST APIs, automation tools, and deployment workflows.",
  path: "/skills",
});

export default function Page() {
  return <SkillsPage />;
}
