import { HeroSection } from "@/components/sections/home/hero-section";
import { SkillsSection } from "@/components/sections/home/skills-section";
import { WhatIDoSection } from "@/components/sections/home/what-i-do-section";

export function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <WhatIDoSection />
      <SkillsSection />
    </div>
  );
}
