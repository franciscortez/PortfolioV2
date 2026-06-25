import { ContactPage } from "@/components/pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Francis Emil M. Cortez for websites, web applications, API integrations, automation workflows, and full-stack development projects.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
