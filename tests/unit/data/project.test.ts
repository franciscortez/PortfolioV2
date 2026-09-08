import { describe, it, expect } from "vitest";
import { projects, PROJECT_CATEGORIES } from "@/data/project";

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

  it("defines standard categories and assigns valid categories to all projects", () => {
    expect(PROJECT_CATEGORIES).toEqual([
      { id: "web-development", label: "Web Dev" },
      { id: "automation", label: "Automation" },
    ]);

    const validCategoryIds = PROJECT_CATEGORIES.map((c) => c.id);

    for (const project of projects) {
      const cats = Array.isArray(project.category)
        ? project.category
        : [project.category];
      expect(cats.length).toBeGreaterThan(0);
      for (const cat of cats) {
        expect(validCategoryIds).toContain(cat);
      }
    }
  });

  it("categorizes nola-paymongo under web-development and automations correctly", () => {
    const automationProjects = projects.filter((p) =>
      Array.isArray(p.category)
        ? p.category.includes("automation")
        : p.category === "automation"
    );
    expect(automationProjects.map((p) => p.slug)).not.toContain(
      "nola-paymongo"
    );
    expect(automationProjects.map((p) => p.slug)).toContain(
      "gmail-inbox-organizer"
    );

    const webProjects = projects.filter((p) =>
      Array.isArray(p.category)
        ? p.category.includes("web-development")
        : p.category === "web-development"
    );
    expect(webProjects.map((p) => p.slug)).toContain("nola-paymongo");
    expect(webProjects.map((p) => p.slug)).toContain("twitch-insights");
    expect(webProjects.map((p) => p.slug)).toContain("gentlemens-quarters");
    expect(webProjects.map((p) => p.slug)).toContain(
      "pennywings-budget-tracker"
    );
    expect(webProjects.map((p) => p.slug)).toContain("personal-portfolio");
  });
});
