"use client";

import { siteIcons } from "@/data/icons";
import { useTheme } from "@/components/ui/theme-provider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? siteIcons.sun : siteIcons.moon;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={`grid size-10 place-items-center border border-border bg-panel text-muted transition-colors hover:border-accent hover:bg-accent-dark hover:text-accent ${className}`}
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
