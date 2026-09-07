import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectList } from "@/components/sections/projects/project-list";
import { projects, type Project } from "@/data/project";

describe("Project collection", () => {
  it("counts multi-category projects once in All and includes both filters", () => {
    const project: Project = {
      ...projects[0],
      category: ["web-development", "automation"],
    };
    render(<ProjectList projects={[project]} />);
    expect(screen.getByRole("button", { name: "All 1" })).toBeInTheDocument();
    for (const name of ["Automation 1", "Web Dev 1"]) {
      fireEvent.click(screen.getByRole("button", { name }));
      expect(screen.getAllByRole("article")).toHaveLength(1);
    }
  });
  it("handles an empty category and resets to All", () => {
    render(<ProjectList projects={[projects[0]]} />);
    fireEvent.click(screen.getByRole("button", { name: "Automation 0" }));
    expect(
      screen.getByRole("heading", { name: "No projects to show yet." })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Show all projects" }));
    expect(screen.getAllByRole("article")).toHaveLength(1);
  });
  it("handles an empty collection", () => {
    render(<ProjectList projects={[]} />);
    expect(screen.getByRole("status")).toHaveTextContent("0 projects");
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
  });
  it("links every gallery entry to its own project page", () => {
    render(<ProjectList projects={projects} />);
    for (const project of projects) {
      const article = screen.getByRole("article", { name: project.title });
      expect(within(article).getByRole("link")).toHaveAttribute(
        "href",
        `/projects/${project.slug}`
      );
      expect(article.querySelector("details")).toBeNull();
    }
  });
});
