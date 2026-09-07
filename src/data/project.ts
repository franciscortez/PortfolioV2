import type { SkillIconName } from "@/data/icons";

export type ProjectImage = {
  src: string;
  alt: string;
  description: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "live";
};

export type ProjectTech = {
  name: string;
  icon: SkillIconName;
  color?: string;
};

export type ProjectCategory = "web-development" | "automation";

export type ProjectFilter = "all" | ProjectCategory;

export const PROJECT_CATEGORIES = [
  { id: "web-development", label: "Web Dev" },
  { id: "automation", label: "Automation" },
] as const;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  explanation: string;
  features: string[];
  tags: string[];
  tech: ProjectTech[];
  links: ProjectLink[];
  images: ProjectImage[];
  category: ProjectCategory | ProjectCategory[];
};

export const projects: Project[] = [
  {
    slug: "gentlemens-quarters",
    title: "Gentlemen's Quarters",
    subtitle: "Personal Project",
    summary:
      "A barbershop platform where clients explore services, book appointments, pay a downpayment, and reschedule without creating an account.",
    explanation:
      "React and Express power the booking flow, with TypeScript across the application. PayMongo handles downpayments, while PostgreSQL on Neon and Drizzle ORM support scheduling data. Confirmation emails provide secure links for self-service rescheduling.",
    features: [
      "Account-free appointment booking",
      "Online downpayments through PayMongo",
      "Self-service rescheduling via secure email links",
      "Service and styling catalog",
      "PostgreSQL scheduling data managed with Drizzle ORM",
    ],
    tags: ["Full Stack", "Payments", "Booking System"],
    tech: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Express", icon: "express", color: "var(--foreground)" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Neon", icon: "neon", color: "#34D59A" },
      { name: "Drizzle ORM", icon: "drizzle", color: "#C5F74F" },
      { name: "PayMongo", icon: "paymongo", color: "#24B47E" },
      { name: "Vercel", icon: "vercel", color: "var(--foreground)" },
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/franciscortez/BarberBookingSystem",
        type: "github",
      },
      {
        label: "Live Site",
        href: "https://gentlemensquarter.vercel.app/",
        type: "live",
      },
    ],
    images: [
      {
        src: "/images/projects/gentlemens-quarter.png",
        alt: "Gentlemen's Quarters barbershop homepage displayed on desktop and mobile mockups",
        description:
          "The homepage of Gentlemen's Quarters, featuring a clean dark-themed landing page, catalog view, and responsive appointment scheduling layout.",
      },
    ],
    category: "web-development",
  },
  {
    slug: "nola-paymongo",
    title: "NOLA PayMongo",
    subtitle: "Intern Project",
    summary:
      "Connect GoHighLevel checkout to PayMongo, with payment verification, refunds, and transaction updates handled through one integration.",
    explanation:
      "Built during an internship, this Laravel custom payment provider connects GoHighLevel with PayMongo. It creates checkout sessions, verifies webhook signatures, tracks transactions, and sends payment status updates to GoHighLevel. OAuth supports marketplace authentication, alongside multiple payment methods and automated refunds.",
    features: [
      "GoHighLevel and PayMongo payment integration",
      "Verified webhooks and payment status updates",
      "Checkout, refunds, and transaction tracking",
      "OAuth authentication for the GoHighLevel marketplace",
      "Multiple payment methods through PayMongo",
    ],
    tags: ["Full Stack", "Payments", "Integration"],
    tech: [
      { name: "Laravel", icon: "laravel", color: "#FF2D20" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "PHP", icon: "php", color: "#777BB4" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "PayMongo", icon: "paymongo", color: "#24B47E" },
    ],
    links: [],
    images: [
      {
        src: "/images/projects/nola-paymongo.png",
        alt: "NOLA PayMongo payment integration landing page displayed on a laptop mockup",
        description:
          "Landing page introducing the NOLA PayMongo integration for GoHighLevel and PayMongo.",
      },
    ],
    category: "automation",
  },
  {
    slug: "pennywings-budget-tracker",
    title: "PennyWings Budget Tracker",
    subtitle: "Personal Project",
    summary:
      "Track budgets and transactions across devices, explore spending dashboards, and get financial insights in one place.",
    explanation:
      "React, TypeScript, and Tailwind CSS form the interface. Supabase provides PostgreSQL storage, authentication, Row Level Security, and realtime updates, with TanStack Query managing client-side data. A Google Gemini assistant provides personalized financial insights. Vitest and Playwright cover unit and end-to-end behavior.",
    features: [
      "Budget tracking and spending dashboards",
      "Realtime synchronization across devices",
      "Financial insights with a Gemini assistant",
      "Authentication and Row Level Security through Supabase",
      "Client-side caching with TanStack Query",
      "Unit and end-to-end tests with Vitest and Playwright",
    ],
    tags: ["Full Stack", "AI", "Testing", "Finance"],
    tech: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "Supabase", icon: "supabase", color: "#3FCF8E" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Vitest", icon: "vitest", color: "#FCC72B" },
      { name: "Playwright", icon: "playwright", color: "#2EAD33" },
      { name: "Google Gemini", icon: "googleGemini", color: "#886FBF" },
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/franciscortez/PennyWingsV2",
        type: "github",
      },
      {
        label: "Live Site",
        href: "https://pennywings.vercel.app",
        type: "live",
      },
    ],
    images: [
      {
        src: "/images/projects/penny-wings.png",
        alt: "PennyWings landing page with a balance preview, displayed on desktop and mobile mockups",
        description:
          "Responsive PennyWings landing page introducing budget tracking with a sample balance and activity preview.",
      },
    ],
    category: "web-development",
  },
  {
    slug: "gmail-inbox-organizer",
    title: "Gmail Inbox Organizer",
    subtitle: "Personal Project",
    summary:
      "Keep important messages in view while routine email is labeled and archived automatically, without deleting messages or changing unread status.",
    explanation:
      "Google Apps Script runs triage every five minutes, applying contextual labels and keeping security alerts, bank transactions, meeting notes, job applications, and urgent GitHub activity in the inbox. Low-priority notifications are archived after 12 hours. Starred messages stay in the inbox; the script never deletes messages, moves them to Trash, or marks them as read. Clasp supports version-controlled deployment.",
    features: [
      "Scheduled inbox triage every five minutes",
      "Priority labels and delayed routine-email archiving",
      "No deletions or changes to unread status",
      "Starred messages remain in the inbox",
      "Contextual rules for banking, security, and developer activity",
      "Version-controlled Apps Script deployment with Clasp",
    ],
    tags: [
      "Automation",
      "Google Apps Script",
      "Productivity",
      "Workflow Automation",
    ],
    tech: [
      {
        name: "Google Apps Script",
        icon: "googleAppsScript",
        color: "#4285F4",
      },
      { name: "Gmail", icon: "gmail", color: "#EA4335" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "GitHub", icon: "github", color: "var(--foreground)" },
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/franciscortez/google-filtering-label",
        type: "github",
      },
    ],
    images: [
      {
        src: "/images/projects/google-inbox.png",
        alt: "Gmail interface showing automated priority and category labels generated by the inbox organizer",
        description:
          "Production Gmail inbox view displaying the script's automated labeling system, categorizing incoming emails into Action, Work, Money, Security, Career, Learning, Reading, and Social.",
      },
    ],
    category: "automation",
  },
  {
    slug: "twitch-insights",
    title: "Twitch Insights",
    subtitle: "Personal Project",
    summary:
      "Follow the mood of a live Twitch chat through sentiment timelines, visual breakdowns, and exportable reports.",
    explanation:
      "The application captures live Twitch chat through the Twitch API. A RoBERTa model on a Flask backend classifies messages as positive, negative, or neutral. MongoDB stores the results, and a React dashboard displays sentiment timelines, mood distributions, and word clouds for streamers and analysts exploring audience engagement.",
    features: [
      "Live chat sentiment classification with RoBERTa",
      "Sentiment timelines and mood distribution charts",
      "Word clouds and exportable reports",
      "Twitch API chat integration",
      "Sentiment data stored in MongoDB",
    ],
    tags: ["Full Stack", "AI / ML", "Data Visualization"],
    tech: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Flask", icon: "flask", color: "#3BABC3" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/franciscortez/Twitch-Insight/tree/v5",
        type: "github",
      },
    ],
    images: [
      {
        src: "/images/projects/twitch-insight.png",
        alt: "Twitch Insights landing page introducing chat sentiment analysis on a laptop mockup",
        description:
          "Landing page introducing Twitch chat sentiment analysis, trend monitoring, and word-cloud features.",
      },
    ],
    category: "web-development",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Personal Project",
    summary:
      "A responsive home for project stories, experience, and contact, with clear navigation and a consistent light and dark theme.",
    explanation:
      "Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS. Centralized content supports thin page routes, a persistent desktop sidebar, and a mobile navigation drawer. Accessible focus styles and persisted themes support browsing preferences. Vitest and Playwright cover components and user journeys.",
    features: [
      "Responsive project, experience, and contact pages",
      "Persistent navigation with a mobile drawer",
      "Light and dark themes with visible keyboard focus",
      "Centralized content and thin Next.js route wrappers",
      "Component and end-to-end coverage with Vitest and Playwright",
    ],
    tags: ["Full Stack", "Testing", "Next.js"],
    tech: [
      { name: "Next.js", icon: "nextjs", color: "var(--foreground)" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "Vitest", icon: "vitest", color: "#FCC72B" },
      { name: "Playwright", icon: "playwright", color: "#2EAD33" },
    ],
    links: [
      {
        label: "View Code",
        href: "https://github.com/franciscortez/PortfolioV2",
        type: "github",
      },
    ],
    images: [
      {
        src: "/images/projects/portfolio.png",
        alt: "Portfolio website homepage featuring animated role text and sidebar navigation",
        description:
          "Homepage view showing the hero section with animated typing role component, call-to-action buttons, and the persistent left sidebar with profile information and route navigation.",
      },
    ],
    category: "web-development",
  },
];
