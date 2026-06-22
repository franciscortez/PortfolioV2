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
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    summary: "API, server-side, and backend application foundations.",
    skills: [
      { name: "Laravel", icon: "laravel", color: "#FF2D20" },
      { name: "Express", icon: "express", color: "#ffffff" },
      { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
      { name: "Flask", icon: "flask", color: "#000000" },
    ],
  },
  {
    title: "Database",
    summary: "Data storage used across full-stack projects and integrations.",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Firebase", icon: "firebase", color: "#DD2C00" },
      { name: "Supabase", icon: "supabase", color: "#3FCF8E" },
      { name: "Neon Database", icon: "neon", color: "#34D59A" },
    ],
  },
  {
    title: "Automation & Integrations",
    summary: "Tool connections, AI APIs, coding agents, and workflow automation.",
    skills: [
      { name: "GoHighLevel", icon: "goHighLevel", color: "#0EA5E9" },
      { name: "n8n", icon: "n8n", color: "#EA4B71" },
      { name: "REST APIs", icon: "openApi", color: "#6BA539" },
      { name: "Gemini API", icon: "googleGemini", color: "#8E75B2" },
      { name: "Codex", icon: "codex", color: "#ffffff" },
    ],
  },
  {
    title: "Tools & Platforms",
    summary: "Development, deployment, project tracking, and cloud tooling.",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#181717" },
      { name: "Trello", icon: "trello", color: "#0052CC" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Hostinger", icon: "hostinger", color: "#673DE6" },
      { name: "GCP", icon: "googleCloud", color: "#4285F4" },
    ],
  },
];

export const featuredSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.title,
  })),
);

const featuredSkillNames = [
  "TypeScript",
  "Python",
  "React",
  "Express",
  "Laravel",
  "Node.js",
];

export const homeSkills = featuredSkillNames
  .map((skillName) =>
    featuredSkills.find((skill) => skill.name === skillName),
  )
  .filter((skill): skill is (typeof featuredSkills)[number] => Boolean(skill));
