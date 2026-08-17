import { describe, it, expect } from "vitest";
import { workExperience, education, certifications } from "@/data/experience";

describe("Experience Data", () => {
  it("includes work experiences with valid organizations and roles", () => {
    expect(workExperience.length).toBeGreaterThanOrEqual(3);
    const orgs = workExperience.map((e) => e.organization);
    expect(orgs).toContain("Leveric");
    expect(orgs).toContain("SATEZO OPC");
    expect(orgs).toContain("Nola Web Solutions");

    const leveric = workExperience.find((e) => e.organization === "Leveric");
    expect(leveric?.location).toBe("Victoria, Australia (Remote)");
  });

  it("contains verified education details", () => {
    expect(education.length).toBeGreaterThan(0);
    expect(education[0].institution).toContain("Pampanga State University");
    expect(education[0].honors).toBe("Magna Cum Laude");
  });

  it("contains active certifications", () => {
    expect(certifications.length).toBeGreaterThan(0);
    for (const cert of certifications) {
      expect(cert.title).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
    }
  });
});
