import type { SkillIconName } from "@/data/icons";

export type Skill = {
  name: string;
  icon: SkillIconName;
  color: string;
};

export type SkillCategory = {
  title: string;
  summary: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    summary: "Core programming and query languages from the resume.",
    skills: [
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "PHP", icon: "php", color: "#777BB4" },
      { name: "SQL", icon: "database", color: "#38BDF8" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
  },
  {
    title: "Frontend",
    summary: "Interfaces, responsive layouts, and component-based UI work.",
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "var(--foreground)" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    summary: "API, server-side, and backend application foundations.",
    skills: [
      { name: "Laravel", icon: "laravel", color: "#FF2D20" },
      { name: "Express.js", icon: "express", color: "var(--foreground)" },
      { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
      { name: "Flask", icon: "flask", color: "#3BABC3" },
    ],
  },
  {
    title: "Databases",
    summary: "Data storage used across full-stack projects and integrations.",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Firebase", icon: "firebase", color: "#DD2C00" },
      { name: "Supabase", icon: "supabase", color: "#3FCF8E" },
      { name: "Neon", icon: "neon", color: "#34D59A" },
    ],
  },
  {
    title: "AI & Automation",
    summary:
      "AI coding agents, workflow automation, and integration protocols.",
    skills: [
      { name: "n8n", icon: "n8n", color: "#EA4B71" },
      { name: "GoHighLevel", icon: "goHighLevel", color: "#0EA5E9" },
      { name: "Claude Code", icon: "claudeCode", color: "#D97757" },
      { name: "Codex", icon: "codex", color: "var(--foreground)" },
    ],
  },
  {
    title: "Tools & Platforms",
    summary:
      "Development, deployment, automated testing, project tracking, and cloud tooling.",
    skills: [
      { name: "Vitest", icon: "vitest", color: "#FCC72B" },
      { name: "Playwright", icon: "playwright", color: "#2EAD33" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "var(--foreground)" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Hostinger", icon: "hostinger", color: "#673DE6" },
      {
        name: "Google Cloud Platform (GCP)",
        icon: "googleCloud",
        color: "#4285F4",
      },
      { name: "Linear", icon: "linear", color: "var(--foreground)" },
      { name: "Slack", icon: "slack", color: "#4A154B" },
    ],
  },
];

export const featuredSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title,
  }))
);

const featuredSkillNames = [
  "TypeScript",
  "Next.js",
  "React",
  "Express",
  "Node.js",
  "Express.js",
  "Supabase",
];

export const homeSkills = featuredSkillNames
  .map((skillName) => featuredSkills.find((skill) => skill.name === skillName))
  .filter((skill): skill is (typeof featuredSkills)[number] => Boolean(skill));
