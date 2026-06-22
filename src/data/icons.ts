import {
  FaBolt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGooglegemini,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { TbWebhook } from "react-icons/tb";

export const skillIcons = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  php: SiPhp,
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

  goHighLevel: FaBolt,
  n8n: SiN8N,
  openApi: SiOpenapiinitiative,
  webhook: TbWebhook,
  googleGemini: SiGooglegemini,

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
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  location: FaMapMarkerAlt,
} satisfies Record<string, IconType>;

export type SiteIconName = keyof typeof siteIcons;
