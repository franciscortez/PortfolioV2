import Link from "next/link";
import type { IconType } from "react-icons";
import { siteIcons } from "@/data/icons";
import { portfolioData } from "@/data/portfolio";

export function ContactOverview() {
  const EmailIcon = siteIcons.email;
  const GithubIcon = siteIcons.github;
  const LinkedinIcon = siteIcons.linkedin;
  const LocationIcon = siteIcons.location;
  const { externalLinks, profile } = portfolioData;
  const emailLink = externalLinks.find((link) => link.icon === "email");
  const githubLink = externalLinks.find((link) => link.icon === "github");
  const linkedinLink = externalLinks.find((link) => link.icon === "linkedin");

  const contactItems = [
    {
      label: "Location",
      value: profile.location,
      href: undefined,
      icon: LocationIcon,
    },
    {
      label: "Email",
      value: profile.email,
      href: emailLink?.href ?? `mailto:${profile.email}`,
      icon: EmailIcon,
    },
    {
      label: "LinkedIn",
      value: linkedinLink?.href.replace("https://", "") ?? "LinkedIn profile",
      href: linkedinLink?.href,
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: githubLink?.href.replace("https://", "") ?? "GitHub profile",
      href: githubLink?.href,
      icon: GithubIcon,
    },
  ];

  return (
    <section className="border border-border bg-panel">
      <div className="border-b border-border p-3 sm:p-4">
        <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
          <EmailIcon aria-hidden="true" className="size-3.5" />
          Contact
        </p>

        <div className="mt-3 max-w-4xl">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Let&apos;s talk about the next build.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            Send a message about a website, web app, integration, or automation
            workflow. I&apos;ll review the context and reply through email.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2">
        {contactItems.map((item) => (
          <ContactCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
  icon: IconType;
};

function ContactCard({ href, icon: Icon, label, value }: ContactCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-accent">
            {label}
          </p>
          <p className="mt-2 wrap-break-word text-sm leading-6 text-zinc-300 transition-colors group-hover:text-white">
            {value}
          </p>
        </div>

        <Icon
          aria-hidden="true"
          className="mt-1 size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-accent"
        />
      </div>
    </>
  );

  const className =
    "group block min-h-24 border-b border-border p-3 transition-colors hover:bg-black sm:border-r sm:p-4";

  if (!href) {
    return <article className={className}>{content}</article>;
  }

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </Link>
  );
}
