import { describe, it, expect } from "vitest";
import { siteUrl, absoluteUrl } from "@/lib/site";
import { createPageMetadata, rootMetadata } from "@/lib/seo";

describe("Site Utilities", () => {
  it("exports a valid site URL", () => {
    expect(siteUrl).toBeTruthy();
    expect(siteUrl.startsWith("http")).toBe(true);
  });

  it("converts relative paths to absolute URLs", () => {
    const abs = absoluteUrl("/projects");
    expect(abs.endsWith("/projects")).toBe(true);
    expect(abs.startsWith("http")).toBe(true);
  });
});

describe("SEO Utilities", () => {
  it("exports valid root metadata", () => {
    expect(rootMetadata.title).toBeDefined();
    expect(rootMetadata.description).toBeDefined();
    expect(rootMetadata.metadataBase).toBeDefined();
  });

  it("creates route-specific metadata correctly", () => {
    const meta = createPageMetadata({
      title: "Projects",
      description: "My portfolio projects",
      path: "/projects",
    });

    expect(meta.title).toBe("Projects");
    expect(meta.description).toBe("My portfolio projects");
    expect(meta.alternates?.canonical).toBe("/projects");
  });
});
