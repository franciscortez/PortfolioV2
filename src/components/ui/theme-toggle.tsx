"use client";

import { useEffect, useState } from "react";
import { siteIcons } from "@/data/icons";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";
  const Icon = isDark ? siteIcons.sun : siteIcons.moon;

  // Avoid hydration mismatch by rendering an empty placeholder or just the button without the icon briefly
  if (!mounted) {
    return (
      <button
        type="button"
        className={`grid size-10 place-items-center border border-border bg-panel text-muted transition-colors hover:border-accent hover:bg-accent-dark hover:text-accent ${className}`}
      >
        <span className="size-4" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

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
