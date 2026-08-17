import { describe, it, expect } from "vitest";
import { portfolioData } from "@/data/portfolio";

describe("Portfolio Data", () => {
  it("has valid personal profile data", () => {
    const { profile } = portfolioData;
    expect(profile.name).toBe("Francis Emil M. Cortez");
    expect(profile.email).toBe("francisemil.cortez@gmail.com");
    expect(profile.location).toBe("Pampanga, Philippines");
    expect(profile.role).toBe("Full Stack Developer");
    expect(profile.resumeHref).toBe("/documents/resume.pdf");
  });

  it("contains all main navigation items", () => {
    const paths = portfolioData.navigation.map((n) => n.href);
    expect(paths).toContain("/");
    expect(paths).toContain("/projects");
    expect(paths).toContain("/experience");
    expect(paths).toContain("/skills");
    expect(paths).toContain("/contact");
  });

  it("contains valid external links", () => {
    expect(portfolioData.externalLinks.length).toBeGreaterThan(0);
    for (const link of portfolioData.externalLinks) {
      expect(link.label).toBeDefined();
      expect(link.href).toBeDefined();
      expect(link.icon).toBeDefined();
    }
  });

  it("defines services list with titles and descriptions", () => {
    expect(portfolioData.services.length).toBeGreaterThan(0);
    for (const service of portfolioData.services) {
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
    }
  });
});
