import { describe, it, expect } from "vitest";
import { skillCategories, featuredSkills, homeSkills } from "@/data/skills";

describe("Skills Data", () => {
  it("contains skill categories with valid skills and icons", () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    for (const cat of skillCategories) {
      expect(cat.title).toBeTruthy();
      expect(cat.skills.length).toBeGreaterThan(0);
      for (const skill of cat.skills) {
        expect(skill.name).toBeTruthy();
        expect(skill.icon).toBeDefined();
      }
    }
  });

  it("contains featured and homepage skills", () => {
    expect(featuredSkills.length).toBeGreaterThan(0);
    expect(homeSkills.length).toBeGreaterThan(0);
    for (const skill of homeSkills) {
      expect(skill.name).toBeTruthy();
      expect(skill.icon).toBeDefined();
    }
  });
});
