import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContactFormClient } from "@/components/sections/contact/contact-form-client";

describe("ContactFormClient Component", () => {
  it("renders form inputs for name, email, subject, and message", () => {
    render(<ContactFormClient isConfigured={true} accessKey="test-key" />);

    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^subject$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("shows disabled/unconfigured banner when isConfigured is false", () => {
    render(<ContactFormClient isConfigured={false} />);

    expect(
      screen.getByText(/contact form is waiting for/i)
    ).toBeInTheDocument();
  });
});
