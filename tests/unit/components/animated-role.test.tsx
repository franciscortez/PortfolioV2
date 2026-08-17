import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { AnimatedRole } from "@/components/ui/animated-role";

describe("AnimatedRole Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders animated role element and types characters", () => {
    const { container } = render(<AnimatedRole />);

    const element = container.querySelector('[aria-live="polite"]');
    expect(element).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(element?.textContent?.length).toBeGreaterThan(0);
  });
});
