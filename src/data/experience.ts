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
  note?: string;
};

export const experienceSummary =
  "Full-stack developer with experience building scalable web applications using React.js and Express. Skilled in developing RESTful APIs, backend systems, and third-party integrations, with a strong foundation in modern web technologies and maintainable full-stack development.";

export const workExperience: ResumeExperience[] = [
  {
    role: "Software Developer - Full Time",
    organization: "Leveric Pty Ltd",
    location: "Pampanga, Philippines",
    period: "July 2026 - Present",
    responsibilities: [
      "Develop production-ready application features using Next.js, TypeScript, and Supabase, enabling reliable user workflows and consistent access to real-time application data.",
      "Architect database schemas, authentication flows, backend functions, and API integrations in Supabase, improving data organization, application security, and frontend-to-backend communication.",
      "Collaborate with developers and stakeholders through Linear while using Codex to support implementation, debugging, and code refinement, accelerating task completion and improving overall code quality.",
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
    note: "Formerly Don Honorio Ventura State University",
  },
  {
    degree: "Science, Technology, Engineering, and Mathematics",
    institution: "Assumpta Technical High School",
    period: "2020 - 2022",
  },
];
