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
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import {
  GeminiIcon,
  GoHighLevelIcon,
  NeonIcon,
} from "@/components/ui/icon";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecloud,
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
  flask: SiFlask,

  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  supabase: SiSupabase,
  neon: NeonIcon,

  goHighLevel: GoHighLevelIcon,
  n8n: SiN8N,
  openApi: TbApi,
  googleGemini: GeminiIcon,
  codex: SiOpenai,

  git: SiGit,
  github: SiGithub,
  trello: SiTrello,
  docker: SiDocker,
  hostinger: SiHostinger,
  googleCloud: SiGooglecloud,
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
