import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { ToastContainer, showToast } from "@/components/ui/toast";

describe("Toast Component", () => {
  it("renders toast messages when triggered", () => {
    render(<ToastContainer />);

    act(() => {
      showToast("Test notification message", "success");
    });

    expect(screen.getByText("Test notification message")).toBeInTheDocument();
  });
});
