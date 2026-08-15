import { CertificationsSection } from "@/components/sections/experience/certifications-section";
import { EducationSection } from "@/components/sections/experience/education-section";
import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";

export function ExperiencePage() {
  return (
    <div className="space-y-6">
      <ExperienceTimeline />
      <CertificationsSection />
      <EducationSection />
    </div>
  );
}
