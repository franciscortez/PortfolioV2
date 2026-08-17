import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from "@/components/pages/home-page";
import { ThemeProvider } from "@/components/ui/theme-provider";

describe("HomePage Component", () => {
  it("renders homepage hero, links, and sections", () => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /I build websites that do more than look good/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view my work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact me/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/what i do/i)).toBeInTheDocument();
  });
});
