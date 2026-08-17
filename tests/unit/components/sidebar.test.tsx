import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/components/layout/sidebar";
import { ThemeProvider } from "@/components/ui/theme-provider";

describe("Sidebar Component", () => {
  it("renders profile details: name, role, and location", () => {
    render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

    expect(screen.getByText("Francis Emil M. Cortez")).toBeInTheDocument();
    expect(screen.getByText("Pampanga, Philippines")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /experience/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  it("renders resume link and theme toggle", () => {
    render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /switch to/i })
    ).toBeInTheDocument();
  });
});
