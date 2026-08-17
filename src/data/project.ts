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
};

export const projects: Project[] = [
  {
    slug: "twitch-insights",
    title: "Twitch Insights",
    subtitle: "Personal Project",
    summary: "Real-time sentiment analysis app for Twitch stream chat data.",
    explanation:
      "Twitch Insights connects to live Twitch streams via the Twitch API and captures chat messages in real time. Each message is processed through a RoBERTa-based sentiment analysis model running on a Flask backend, classifying text as positive, negative, or neutral. The results are stored in MongoDB and served to a React dashboard that renders live sentiment graphs, mood distribution charts, word-cloud visualizations, and exportable reports. The system is designed to help streamers and analysts understand audience engagement patterns during broadcasts.",
    features: [
      "Real-time Chat Sentiment Analysis (RoBERTa)",
      "Live Sentiment Timeline & Mood Distribution Charts",
      "Word-cloud Visualizations",
      "Exportable Reports",
      "Twitch API Integration",
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
        alt: "Twitch Insights dashboard showing real-time sentiment analysis graphs and chat mood distribution",
        description:
          "Main dashboard view with live sentiment timeline, mood distribution pie chart, and recent chat message feed with individual sentiment scores.",
      },
    ],
  },
  {
    slug: "gentlemens-quarters",
    title: "Gentlemen's Quarters",
    subtitle: "Personal Project",
    summary:
      "A premium barbershop booking and catalog system integrated with PayMongo for secure online downpayments.",
    explanation:
      "Gentlemen's Quarters is a full-stack booking and catalog platform designed for modern barbershops. Built using React and Express (both written in TypeScript), the application allows clients to explore grooming services, view the team, and book appointments seamlessly. It integrates PayMongo to handle secure downpayments, ensuring booking commitments. The backend is powered by a PostgreSQL database hosted on Neon, managed with Drizzle ORM for schema definition and queries. It also features flexible scheduling, giving users a secure link in their confirmation emails to reschedule bookings without needing a full customer account.",
    features: [
      "Secure Online Downpayments (PayMongo Integration)",
      "Interactive Barbershop Service & Styling Catalog",
      "Streamlined Appointment Booking Workflow (No Account Required)",
      "Flexible Self-Service Rescheduling via Secure Email Links",
      "Robust Database Schema & Queries using Drizzle ORM and PostgreSQL (Neon)",
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
        alt: "Gentlemen's Quarters booking platform dashboard mockup displaying desktop and mobile views",
        description:
          "The homepage of Gentlemen's Quarters, featuring a clean dark-themed landing page, catalog view, and responsive appointment scheduling layout.",
      },
    ],
  },
  {
    slug: "nola-paymongo",
    title: "NOLA PayMongo",
    subtitle: "Intern Project",
    summary:
      "A Laravel-based custom payment provider integrating GoHighLevel with PayMongo for checkout sessions, payment verification, refunds, webhooks, OAuth integration, and transaction tracking.",
    explanation:
      "Built a Laravel-based custom payment provider integrating GoHighLevel with PayMongo for checkout sessions, payment verification, refunds, webhooks, OAuth integration, and transaction tracking. The system implements a complete payment lifecycle including checkout page generation, real-time payment verification via webhooks, automated refund processing, and OAuth-based authentication for the GoHighLevel marketplace. It handles webhook signature verification for security, supports multiple payment methods through PayMongo, and provides GoHighLevel with real-time payment status updates through its custom provider API.",
    features: [
      "GoHighLevel Custom Payment Provider",
      "PayMongo Checkout & Payment Verification",
      "Automated Refund Processing",
      "Webhook Integration & Signature Verification",
      "OAuth Authentication for GHL Marketplace",
      "Transaction Tracking Dashboard",
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
        alt: "NOLA PayMongo payment integration interface shown on laptop and mobile device mockups",
        description:
          "Payment integration interface for GoHighLevel and PayMongo checkout, transaction tracking, and payment status workflows.",
      },
    ],
  },
  {
    slug: "pennywings-budget-tracker",
    title: "PennyWings Budget Tracker",
    subtitle: "Personal Project",
    summary:
      "A scalable full-stack budget tracking application built with AI-assisted development, automated testing (Vitest & Playwright), real-time synchronization, and AI-powered insights.",
    explanation:
      "Built a scalable full-stack app using React, TypeScript, Tailwind CSS, and Supabase (PostgreSQL, Auth, Realtime) with secure authentication and Row Level Security (RLS). Developed using AI-assisted workflows with deterministic hooks, covered by Vitest unit tests and Playwright end-to-end tests. Implemented real-time data synchronization with Supabase Realtime and TanStack Query, core budget tracking, analytics dashboards, and an AI assistant (Google Gemini API) for personalized financial insights.",
    features: [
      "AI-Assisted Development & Automated Testing (Vitest + Playwright)",
      "Secure Authentication & Row Level Security (RLS)",
      "Real-time Data Synchronization with Supabase",
      "Efficient Caching with TanStack Query",
      "AI Financial Assistant (Google Gemini API)",
      "Comprehensive Analytics Dashboards",
      "Multi-device Responsive Tracking",
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
        alt: "PennyWings Budget Tracker dashboard showing financial analytics and budget management interface",
        description:
          "Main dashboard view displaying accounts overview, transaction history, budget categories, and AI-powered financial insights.",
      },
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Personal Project",
    summary:
      "A high-performance portfolio website engineered with Next.js 16, AI-assisted development workflows, automated Prettier hooks, Vitest unit tests, and Playwright E2E tests.",
    explanation:
      "This portfolio website is built with Next.js 16 App Router and React 19, engineered using AI-assisted development workflows across Antigravity, Claude Code, and Codex. Features deterministic Prettier auto-formatting hooks, strict safety guardrails blocking destructive commands and unauthorized package mutations, unit/component test coverage with Vitest, and end-to-end testing with Playwright. Follows a minimal black-and-white visual direction inspired by the Next.js website with persistent sidebar navigation, mobile drawer, persisted themes, and accessible styling.",
    features: [
      "AI-Assisted Workflow with Multi-Agent Lifecycle Hooks & Guardrails",
      "Automated Testing Suite with Vitest & Playwright E2E",
      "Black & White Theme System with next-themes",
      "Persistent Desktop Sidebar & Mobile Hamburger Drawer",
      "Animated Typewriter Role Text & Route Transitions",
      "Statically Generated for Ultra-Fast Performance",
    ],
    tags: ["Full Stack", "AI Workflows", "Testing", "Next.js"],
    tech: [
      { name: "Next.js", icon: "nextjs", color: "var(--foreground)" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "Vitest", icon: "vitest", color: "#FCC72B" },
      { name: "Playwright", icon: "playwright", color: "#2EAD33" },
      { name: "Claude Code", icon: "claudeCode", color: "#D97757" },
      { name: "Codex", icon: "codex", color: "var(--foreground)" },
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
  },
];
