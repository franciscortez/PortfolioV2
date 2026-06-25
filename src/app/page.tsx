import { HomePage } from "@/components/pages";
import { createPageMetadata, defaultDescription } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Full Stack Developer Portfolio",
  description: defaultDescription,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
