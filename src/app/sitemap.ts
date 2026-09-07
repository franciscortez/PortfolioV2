import type { MetadataRoute } from "next";
import { projects } from "@/data/project";
import { absoluteUrl } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/experience", priority: 0.8 },
  { path: "/skills", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
] satisfies Array<{
  path: string;
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes,
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: 0.7,
    })),
  ].map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
