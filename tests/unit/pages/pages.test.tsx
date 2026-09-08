import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectsPage } from "@/components/pages/projects-page";
import { SkillsPage } from "@/components/pages/skills-page";
import { ExperiencePage } from "@/components/pages/experience-page";
import { ContactPage } from "@/components/pages/contact-page";
import { ThemeProvider } from "@/components/ui/theme-provider";

describe("ProjectsPage Component", () => {
  it("renders all seven project stories and contact link", () => {
    render(<ProjectsPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /projects/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(7);
    expect(screen.getByRole("button", { name: "All 7" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("filters category membership and restores all projects", () => {
    render(<ProjectsPage />);
    fireEvent.click(screen.getByRole("button", { name: "Automation 2" }));
    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: "Gmail Inbox Organizer" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Job Tracker" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "NOLA PayMongo" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Twitch Insights" })
    ).not.toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("2 projects");
    fireEvent.click(screen.getByRole("button", { name: "Web Dev 5" }));
    expect(screen.getAllByRole("article")).toHaveLength(5);
    expect(
      screen.getByRole("heading", { name: "NOLA PayMongo" })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "All 7" }));
    expect(screen.getAllByRole("article")).toHaveLength(7);
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
