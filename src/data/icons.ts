import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";

export const siteIcons = {
  close: IoClose,
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
} satisfies Record<string, IconType>;

export type SiteIconName = keyof typeof siteIcons;
