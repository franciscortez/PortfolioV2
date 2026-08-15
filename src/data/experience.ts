export type ResumeExperience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  honors?: string;
  note?: string;
};

export const experienceSummary =
  "Results-driven Software Developer with hands-on experience building full-stack applications, RESTful APIs, database workflows, and third-party integrations using Next.js, TypeScript, Node.js, and Supabase. Skilled in developing scalable features, improving application reliability, and collaborating with cross-functional teams using modern development and AI-assisted tools. Seeking to contribute strong problem-solving, backend, and full-stack development skills to a growth-focused technology team.";

export const workExperience: ResumeExperience[] = [
  {
    role: "Software Developer - Full Time",
    organization: "Leveric",
    location: "Pampanga, Philippines",
    period: "July 2026 - Present",
    responsibilities: [
      "Develop production-ready application features using Next.js, TypeScript, and Supabase, enabling reliable user workflows and consistent access to real-time application data.",
      "Architect database schemas, authentication flows, backend functions, and API integrations in Supabase, improving data organization, application security, and frontend-to-backend communication.",
      "Engineer AI-assisted development workflows that improve development efficiency and reduce the risk of unsafe operations by configuring Codex and Claude Code with custom hooks, reusable skills, and guardrails that block destructive commands.",
    ],
  },
  {
    role: "Full Stack Developer - Part Time",
    organization: "SATEZO OPC",
    location: "Pampanga, Philippines",
    period: "May 2026 - Present",
    responsibilities: [
      "Build responsive full-stack application features using Next.js, React, Node.js, and REST APIs, delivering functional user experiences aligned with business requirements.",
      "Implement backend services, API endpoints, and data-handling workflows, enabling efficient communication between application interfaces, databases, and third-party services.",
      "Diagnose and resolve frontend and backend issues while enhancing existing code, improving application stability, maintainability, and feature reliability.",
    ],
  },
  {
    role: "Backend Developer Intern",
    organization: "Nola Web Solutions",
    location: "Pampanga, Philippines",
    period: "February 2026 - April 2026",
    responsibilities: [
      "Engineered RESTful APIs and Laravel–MySQL backend workflows for internal operations and client-facing applications, streamlining data processing and supporting reliable system functionality.",
      "Integrated GoHighLevel with PayMongo for checkout creation, payment verification, webhook processing, and transaction synchronization, enabling automated and accurate payment workflows.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Pampanga State University",
    period: "2022 - 2026",
    honors: "Magna Cum Laude",
    note: "Formerly Don Honorio Ventura State University",
  },
];

export type CertificationEntry = {
  title: string;
  issuer?: string;
  url?: string;
  date?: string;
};

export const certifications: CertificationEntry[] = [
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/6e5j3ar5rmte",
    date: "Aug 2026",
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/wrd9tbdmvfp3",
    date: "Aug 2026",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/dpxvxnoaggdy",
    date: "Aug 2026",
  },
  {
    title: "Technical Support Fundamentals",
    issuer: "Google / Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/W5RLOBSI48MB",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    url: "https://www.credly.com/badges/faaf4932-47dc-40e6-8210-2d2547806638/public_url",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/4d6671e6-9ec3-498c-a79c-49358e657050/public_url",
  },
  {
    title: "Introduction to IoT and Digital Transformation",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/74fdff0f-9e93-452f-8d14-62be89ce9c4b/public_url",
  },
];
