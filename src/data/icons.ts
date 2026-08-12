import {
  FaBriefcase,
  FaBullseye,
  FaCalendarAlt,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLayerGroup,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMoon,
  FaSun,
  FaUniversity,
  FaCreditCard,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import {
  DockerIcon,
  FirebaseIcon,
  FlaskIcon,
  GeminiIcon,
  GoHighLevelIcon,
  GoogleCloudIcon,
  LinearIcon,
  NeonIcon,
  SlackIcon,
} from "@/components/ui/icon";
import {
  SiClaude,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiOpenai,
  SiDrizzle,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";

export const skillIcons = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  php: SiPhp,
  database: TbDatabase,
  mysql: SiMysql,
  python: SiPython,

  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  react: SiReact,
  nextjs: SiNextdotjs,

  laravel: SiLaravel,
  express: SiExpress,
  nodejs: SiNodedotjs,
  flask: FlaskIcon,

  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: FirebaseIcon,
  supabase: SiSupabase,
  neon: NeonIcon,
  drizzle: SiDrizzle,

  goHighLevel: GoHighLevelIcon,
  n8n: SiN8N,
  openApi: TbApi,
  googleGemini: GeminiIcon,
  codex: SiOpenai,
  paymongo: FaCreditCard,
  vercel: SiVercel,
  claudeCode: SiClaude,

  git: SiGit,
  github: SiGithub,
  trello: SiTrello,
  docker: DockerIcon,
  hostinger: SiHostinger,
  googleCloud: GoogleCloudIcon,
  linear: LinearIcon,
  slack: SlackIcon,
} satisfies Record<string, IconType>;

export type SkillIconName = keyof typeof skillIcons;

export const siteIcons = {
  close: IoClose,
  briefcase: FaBriefcase,
  calendar: FaCalendarAlt,
  code: FaCode,
  email: FaEnvelope,
  education: FaGraduationCap,
  focus: FaBullseye,
  github: FaGithub,
  layers: FaLayerGroup,
  linkedin: FaLinkedinIn,
  location: FaMapMarkerAlt,
  moon: FaMoon,
  school: FaUniversity,
  sun: FaSun,
} satisfies Record<string, IconType>;

export type SiteIconName = keyof typeof siteIcons;
