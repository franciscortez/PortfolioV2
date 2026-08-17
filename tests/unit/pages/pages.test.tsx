import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectsPage } from "@/components/pages/projects-page";
import { SkillsPage } from "@/components/pages/skills-page";
import { ExperiencePage } from "@/components/pages/experience-page";
import { ContactPage } from "@/components/pages/contact-page";
import { ThemeProvider } from "@/components/ui/theme-provider";

describe("ProjectsPage Component", () => {
  it("renders projects list and heading", () => {
    render(
      <ThemeProvider>
        <ProjectsPage />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /projects/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText("Twitch Insights").length).toBeGreaterThan(0);
  });
});

describe("SkillsPage Component", () => {
  it("renders skills category filters and heading", () => {
    render(
      <ThemeProvider>
        <SkillsPage />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /skills/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
  });
});

describe("ExperiencePage Component", () => {
  it("renders work experience timeline, education, and certifications", () => {
    render(
      <ThemeProvider>
        <ExperiencePage />
      </ThemeProvider>
    );

    expect(screen.getByText("Leveric")).toBeInTheDocument();
    expect(screen.getByText("Pampanga State University")).toBeInTheDocument();
  });
});

describe("ContactPage Component", () => {
  it("renders contact overview and form", () => {
    render(
      <ThemeProvider>
        <ContactPage />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /let's talk about the next build/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/send a message/i)).toBeInTheDocument();
  });
});
