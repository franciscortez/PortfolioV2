import { describe, it, expect } from "vitest";
import { projects } from "@/data/project";

describe("Project Data", () => {
  it("contains listed portfolio projects with descriptions and tech stack", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });

  it("includes key featured projects", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toContain("twitch-insights");
    expect(slugs).toContain("gentlemens-quarters");
    expect(slugs).toContain("pennywings-budget-tracker");
  });
});
