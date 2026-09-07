"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { siteIcons } from "@/data/icons";
import { submitContactForm } from "@/lib/web3forms";
import { showToast } from "@/components/ui/toast";

type ContactFormClientProps = {
  accessKey: string;
};

type FormStatus = "idle" | "submitting";

const inputClassName =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/70 hover:border-muted focus:border-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 massive:px-5 massive:py-3.5 massive:text-base";

const labelClassName =
  "font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted massive:text-xs";

export function ContactFormClient({ accessKey }: ContactFormClientProps) {
  const isConfigured = Boolean(accessKey);
  const submitting = useRef(false);
  const EmailIcon = siteIcons.email;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting.current) return;

    if (!isConfigured) {
      showToast("Contact form is not configured.", "error");
      return;
    }

    submitting.current = true;
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      await submitContactForm(formData, accessKey);
      showToast(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      formRef.current?.reset();
    } catch (error) {
      const isNetworkError = error instanceof TypeError;
      const isTimeout =
        error instanceof Error &&
        ["TimeoutError", "AbortError"].includes(error.name);
      showToast(
        isTimeout
          ? "Sending timed out. Delivery is unconfirmed; please use the email link above."
          : isNetworkError
            ? "Could not reach the contact service. Please check your connection or use the email link above."
            : error instanceof Error
              ? error.message
              : "Could not send your message. Please use the email link above.",
        "error"
      );
    } finally {
      submitting.current = false;
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
            The message form is temporarily unavailable. Please use the email
            link above to get in touch.
          </p>
        ) : null}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid gap-5 p-6 sm:p-8 xl:gap-6 xl:p-10 massive:gap-8 massive:p-14"
      >
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
