import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("renders category tabs with Web Development active by default", () => {
    render(
      <ThemeProvider>
        <ProjectsPage />
      </ThemeProvider>
    );

    const webDevTab = screen.getByRole("tab", { name: /web development/i });
    const automationTab = screen.getByRole("tab", { name: /automation/i });

    expect(webDevTab).toBeInTheDocument();
    expect(automationTab).toBeInTheDocument();
    expect(webDevTab).toHaveAttribute("aria-selected", "true");
    expect(automationTab).toHaveAttribute("aria-selected", "false");

    // Web projects should be present
    expect(screen.getAllByText("Twitch Insights").length).toBeGreaterThan(0);
  });

  it("switches category to Automation and displays automation projects", () => {
    render(
      <ThemeProvider>
        <ProjectsPage />
      </ThemeProvider>
    );

    const automationTab = screen.getByRole("tab", { name: /automation/i });
    fireEvent.click(automationTab);

    expect(automationTab).toHaveAttribute("aria-selected", "true");
    const webDevTab = screen.getByRole("tab", { name: /web development/i });
    expect(webDevTab).toHaveAttribute("aria-selected", "false");

    // Automation project NOLA PayMongo is displayed
    expect(screen.getAllByText("NOLA PayMongo").length).toBeGreaterThan(0);
    // Twitch Insights is not in the automation category
    expect(screen.queryByText("Twitch Insights")).not.toBeInTheDocument();
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
