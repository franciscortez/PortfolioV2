"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { siteIcons } from "@/data/icons";
import { showToast } from "@/components/ui/toast";

type ContactFormClientProps = {
  isConfigured: boolean;
  accessKey?: string;
};

type FormStatus = "idle" | "submitting";

const inputClassName =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/70 hover:border-muted focus:border-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 massive:px-5 massive:py-3.5 massive:text-base";

const labelClassName =
  "font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted massive:text-xs";

export function ContactFormClient({
  isConfigured,
  accessKey,
}: ContactFormClientProps) {
  const EmailIcon = siteIcons.email;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured || !accessKey) {
      showToast("Contact form is not configured.", "error");
      return;
    }

    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast("Message sent successfully! I'll get back to you soon.", "success");
        formRef.current?.reset();
      } else {
        showToast(result.message || "Failed to send message.", "error");
      }
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Something went wrong.",
        "error",
      );
    } finally {
      setStatus("idle");
    }
  }

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8 xl:p-10 massive:p-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent massive:text-sm">
            <EmailIcon aria-hidden="true" className="size-3.5 massive:size-4" />
            Message form
          </h2>
        </div>

        {!isConfigured ? (
          <p className="mt-5 border border-border bg-panel p-4 text-sm leading-7 text-muted massive:text-base">
            Contact form is waiting for
            <code className="mx-1 font-mono text-xs text-accent">
              NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
            </code>
            in the environment. Static contact links above still work.
          </p>
        ) : null}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 p-6 sm:p-8 xl:gap-6 xl:p-10 massive:gap-8 massive:p-14">
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <FormField label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={!isConfigured || status === "submitting"}
              placeholder="Your name"
              className={inputClassName}
            />
          </FormField>

          <FormField label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={!isConfigured || status === "submitting"}
              placeholder="you@example.com"
              className={inputClassName}
            />
          </FormField>
        </div>

        <FormField label="Subject" htmlFor="message-subject">
          <input
            id="message-subject"
            name="subject"
            type="text"
            required
            disabled={!isConfigured || status === "submitting"}
            placeholder="What should we build?"
            className={inputClassName}
          />
        </FormField>

        <FormField label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            disabled={!isConfigured || status === "submitting"}
            placeholder="Share the project, goal, timeline, or integration details."
            className={`${inputClassName} resize-y leading-7`}
          />
        </FormField>

        <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="submit"
            disabled={!isConfigured || status === "submitting"}
            className="button-accent inline-flex items-center justify-center border px-5 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:border-border disabled:bg-panel disabled:text-muted massive:px-6 massive:py-3.5 massive:text-base"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}

function FormField({
  children,
  htmlFor,
  label,
}: {
  children: ReactNode;
  htmlFor: string;
  label: string;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2">
      <span className={labelClassName}>{label}</span>
      {children}
    </label>
  );
}
