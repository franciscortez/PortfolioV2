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
    summary:
      "Real-time sentiment analysis app for Twitch stream chat data.",
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
      { name: "React", icon: "react" },
      { name: "Flask", icon: "flask" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Python", icon: "python" },
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
      { name: "React", icon: "react" },
      { name: "Express", icon: "express" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Neon", icon: "neon" },
      { name: "Drizzle ORM", icon: "drizzle" },
      { name: "PayMongo", icon: "paymongo" },
      { name: "Vercel", icon: "vercel" },
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
      { name: "Laravel", icon: "laravel" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
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
      "A scalable full-stack budget tracking application featuring real-time synchronization, AI-powered financial insights, and secure authentication.",
    explanation:
      "Built a scalable full-stack app using ReactJS, Tailwind CSS, and Supabase (PostgreSQL, Auth, Realtime) with secure authentication and Row Level Security (RLS). Implemented real-time data synchronization and caching using Supabase Realtime and TanStack Query, enabling fast, responsive financial tracking across devices. Developed core features including accounts, transactions, budgets, analytics dashboards, and an AI assistant (Google Gemini API) for personalized financial insights.",
    features: [
      "Secure Authentication & Row Level Security (RLS)",
      "Real-time Data Synchronization with Supabase",
      "Efficient Caching with TanStack Query",
      "AI Financial Assistant (Google Gemini API)",
      "Comprehensive Analytics Dashboards",
      "Multi-device Responsive Tracking",
    ],
    tags: ["Full Stack", "AI", "Finance"],
    tech: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Supabase", icon: "supabase" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Google Gemini", icon: "googleGemini" },
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
      "A black-and-white portfolio website with responsive sidebar navigation and persisted light/dark themes.",
    explanation:
      "This portfolio website is built with Next.js 16 and the App Router, using React 19 server and client components. The design follows a black-and-white aesthetic inspired by the visual restraint of the Next.js website. It features a persistent desktop sidebar with profile information and route navigation, a mobile hamburger drawer, light and dark theme support, animated role text with a typewriter effect, a boot loading screen, and modular page components. Styling is handled through Tailwind CSS v4 with custom CSS variables for the color system. The site is fully responsive and statically generated for optimal performance.",
    features: [
      "Black & White Theme System",
      "Persistent Desktop Sidebar Navigation",
      "Mobile Hamburger Drawer",
      "Animated Typewriter Role Text",
      "Boot Loading Screen",
      "Statically Generated for Performance",
    ],
    tags: ["Full Stack", "Portfolio", "Responsive"],
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
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
