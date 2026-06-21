"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteIcons } from "@/data/icons";
import { portfolioData, type ExternalLink } from "@/data/portfolio";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[20%_80%]">
      <MobileHeader onOpen={() => setIsOpen(true)} />

      <Sidebar className="hidden lg:flex" onNavigate={() => setIsOpen(false)} />

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
          />
          <Sidebar
            className="relative flex h-full w-[min(22rem,86vw)] overflow-y-auto"
            onNavigate={() => setIsOpen(false)}
            showClose
          />
        </div>
      ) : null}

      <main className="min-h-screen overflow-x-hidden px-6 py-8 sm:px-10 lg:col-start-2 lg:px-12 lg:py-10">
        {children}
      </main>
    </div>
  );
}

function MobileHeader({ onOpen }: { onOpen: () => void }) {
  const { profile } = portfolioData;

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur lg:hidden">
      <div>
        <p className="text-sm font-medium text-white">{profile.name}</p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {profile.role}
        </p>
      </div>
      <button
        type="button"
        aria-label="Open navigation menu"
        className="grid size-11 place-items-center border border-border text-white transition-colors hover:border-zinc-500"
        onClick={onOpen}
      >
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className="h-px bg-current" />
          <span className="h-px bg-current" />
          <span className="h-px bg-current" />
        </span>
      </button>
    </header>
  );
}

function Sidebar({
  className,
  onNavigate,
  showClose = false,
}: {
  className: string;
  onNavigate: () => void;
  showClose?: boolean;
}) {
  const pathname = usePathname();
  const { externalLinks, navigation, profile } = portfolioData;
  const CloseIcon = siteIcons.close;

  return (
    <aside
      aria-label="Portfolio sidebar"
      className={`${className} min-h-screen flex-col justify-between gap-4 bg-black p-3 sm:p-4 lg:sticky lg:top-0 lg:h-screen`}
    >
      <div className="relative border border-border bg-panel px-5 py-6">
        {showClose ? (
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute right-4 top-4 grid size-10 place-items-center border border-border text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            onClick={onNavigate}
          >
            <CloseIcon aria-hidden="true" className="size-5" />
          </button>
        ) : null}

        <div className="flex flex-col items-center">
          <div className="relative size-28 overflow-hidden border border-zinc-700 bg-black">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              priority
              quality={100}
              sizes="112px"
              className="scale-125 object-cover object-[center_32%]"
            />
          </div>
        </div>

        <div className="mt-7 text-center">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {profile.role}
          </p>
          <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
            {profile.location}
          </p>
        </div>

        <div className="mt-7">
          <Link
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center border border-white bg-white px-4 py-3 text-sm font-medium text-black! transition-colors hover:bg-zinc-200"
          >
            View resume
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={link.label}
              title={link.label}
              className="grid size-10 place-items-center border border-border text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <SocialIcon link={link} />
            </Link>
          ))}
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="border border-border bg-panel px-5 py-6"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          Routes
        </h2>
        <div className="mt-4 grid gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
                className={`group relative overflow-hidden py-3 pl-5 pr-4 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-black text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1 origin-top bg-white transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-y-100"
                      : "scale-y-0 group-hover:scale-y-100"
                  }`}
                />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

function SocialIcon({ link }: { link: ExternalLink }) {
  const Icon = siteIcons[link.icon];

  return <Icon aria-hidden="true" className="size-4" />;
}
