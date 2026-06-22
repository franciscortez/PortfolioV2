import { SkillsFilter } from "@/components/sections/skills/skills-filter";
import { SkillsHeader } from "@/components/sections/skills/skills-header";
import { skillCategories } from "@/data/skills";

export function SkillsPage() {
  return (
    <div className="space-y-6">
      <SkillsHeader />
      <SkillsFilter categories={skillCategories} />
    </div>
  );
}
