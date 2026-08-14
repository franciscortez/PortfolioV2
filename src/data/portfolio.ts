import type { SiteIconName } from "@/data/icons";
import { type Project, projects } from "@/data/project";


export type NavigationItem = {
  label: string;
  href: string;
};

export type ProfileImage = {
  src: string;
  initials: string;
  alt: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  resumeHref: string;
  image: ProfileImage;
};

export type ExternalLink = {
  label: string;
  href: string;
  icon: Exclude<SiteIconName, "close" | "moon" | "sun">;
};



export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type WorkflowStep = {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type PortfolioData = {
  profile: Profile;
  navigation: NavigationItem[];
  externalLinks: ExternalLink[];
  projects: Project[];
  services: Service[];
  stats: StatItem[];
  workflowSteps: WorkflowStep[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  buildNotes: string[];
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "Francis Emil M. Cortez",
    role: "Full Stack Developer",
    location: "Pampanga, Philippines",
    email: "francisemil.cortez@gmail.com",
    resumeHref: "/documents/resume.pdf",
    image: {
      src: "/images/profile/profile-2x2.JPG",
      initials: "FC",
      alt: "Portrait of Francis Emil M. Cortez",
    },
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ],
  externalLinks: [
    {
      label: "Email",
      href: "mailto:francisemil.cortez@gmail.com",
      icon: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/franciscortez",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/francisemilcortez/",
      icon: "linkedin",
    },
  ],
  projects,
  services: [
    {
      title: "Full Stack Web Development",
      description:
        "Build responsive web applications from interface to backend integration.",
      deliverables: ["Frontend UI", "API integration", "Deployment-ready build"],
    },
    {
      title: "Portfolio and Landing Pages",
      description:
        "Create focused pages for personal brands, products, services, and campaigns.",
      deliverables: ["Responsive layout", "Content sections", "Contact flow"],
    },
    {
      title: "UI Polish and Accessibility",
      description:
        "Improve existing interfaces with sharper spacing, stronger contrast, and better usability.",
      deliverables: ["Visual refinement", "Responsive cleanup", "Accessibility pass"],
    },
  ],
  stats: [
    {
      value: 1,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      value: 10,
      suffix: "+",
      label: "Projects Built",
    },
    {
      value: 25,
      suffix: "+",
      label: "Technologies Utilized",
    },
  ],
  workflowSteps: [
    {
      number: "01",
      title: "Discovery Call",
      summary:
        "Understand your product goals, target audience, core requirements, and technical constraints.",
      deliverables: [
        "Requirements gathering",
        "Scope alignment",
        "Goal definition",
      ],
    },
    {
      number: "02",
      title: "Planning & Architecture",
      summary:
        "Design database models, select optimal tech stack, structure REST APIs, and outline milestone deliverables.",
      deliverables: [
        "System architecture",
        "Database schema",
        "Milestone roadmap",
      ],
    },
    {
      number: "03",
      title: "Development & Integration",
      summary:
        "Build clean UI components, implement backend services, integrate third-party APIs, and perform iterative tests.",
      deliverables: [
        "Clean TypeScript code",
        "API & webhook integration",
        "Automated testing",
      ],
    },
    {
      number: "04",
      title: "Delivery & Support",
      summary:
        "Deploy to production, perform final performance & SEO checks, deliver documentation, and ensure smooth handoff.",
      deliverables: [
        "Production deployment",
        "Performance optimization",
        "Handoff & documentation",
      ],
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      organization: "Organization",
      period: "Year - Present",
      description:
        "Placeholder experience entry. Replace with a real role, organization, dates, and impact.",
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["API Routes", "Node.js", "Database Integration"],
    },
    {
      title: "Workflow",
      skills: ["Git", "Responsive Design", "Accessibility", "Deployment"],
    },
  ],
  buildNotes: [
    "Dark-first black-and-white design",
    "Static sidebar for desktop",
    "Mobile hamburger sidebar",
    "Web3Forms contact flow",
  ],
};

export const stats = portfolioData.stats;
export const workflowSteps = portfolioData.workflowSteps;
