import { PortfolioJsonLd } from "@/components/seo/portfolio-json-ld";
import { HeroSection } from "@/components/sections/home/hero-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { WhatIDoSection } from "@/components/sections/home/what-i-do-section";
import { WorkflowSection } from "@/components/sections/home/workflow-section";
import { SkillsSection } from "@/components/sections/home/skills-section";

export function HomePage() {
  return (
    <>
      <PortfolioJsonLd />
      <div className="space-y-6">
        <HeroSection />
        <StatsSection />
        <WhatIDoSection />
        <WorkflowSection />
        <SkillsSection />
      </div>
    </>
  );
}
