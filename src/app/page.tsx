import { HomePage } from "@/components/pages";
import { createPageMetadata, defaultDescription } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Francis Emil M. Cortez | Full Stack Developer",
  description: defaultDescription,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
