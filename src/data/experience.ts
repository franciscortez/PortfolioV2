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
    role: "Full Stack Developer",
    organization: "SATEZO",
    location: "Pampanga, Philippines",
    period: "May 2026 - Present",
    responsibilities: [
      "Develop and maintain full-stack web applications using React.js and Express for production features and user-facing functionality.",
      "Build RESTful APIs, backend configurations, data handling workflows, and reusable components to improve application stability, performance, and scalability.",
      "Work across frontend and backend tasks, connecting interface behavior with server-side logic and application data flows.",
      "Support maintainable feature development through reusable code structure, clear API contracts, and production-focused implementation.",
    ],
  },
  {
    role: "Backend Developer - Intern",
    organization: "Nola Web Solutions",
    location: "Pampanga, Philippines",
    period: "February 2026 - March 2026",
    responsibilities: [
      "Developed backend features, RESTful APIs, and database-driven workflows for internal and client web applications.",
      "Built a custom GoHighLevel-PayMongo payment integration supporting checkout creation, payment verification, webhooks, refunds, and transaction synchronization.",
      "Configured backend logic for payment status updates, transaction handling, and third-party service communication.",
      "Collaborated on integration requirements and implementation details for secure, reliable payment workflows.",
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
