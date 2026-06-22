"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteIcons } from "@/data/icons";
import { portfolioData, type ExternalLink } from "@/data/portfolio";

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
  showClose?: boolean;
};

export function Sidebar({
  className = "",
  onNavigate,
  showClose = false,
}: SidebarProps) {
  return (
    <aside
      aria-label="Portfolio sidebar"
      className={`${className} grid-rows-[auto_auto] content-start gap-4 bg-black p-3 sm:p-4 lg:sticky lg:top-0 lg:h-dvh lg:min-h-dvh lg:grid-rows-[auto_minmax(0,1fr)] lg:content-normal lg:overflow-hidden`}
    >
      <SidebarProfile onNavigate={onNavigate} showClose={showClose} />
      <SidebarRoutes onNavigate={onNavigate} />
    </aside>
  );
}

function SidebarProfile({
  onNavigate,
  showClose,
}: {
  onNavigate?: () => void;
  showClose: boolean;
}) {
  const { externalLinks, profile } = portfolioData;
  const CloseIcon = siteIcons.close;
  const LocationIcon = siteIcons.location;

  return (
    <div className="relative min-w-0 border border-border bg-panel px-5 py-6 sm:px-4 sm:py-4 lg:px-3 lg:py-3 xl:px-4 xl:py-4 massive:px-8 massive:py-8">
      {showClose ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute right-4 top-4 grid size-10 place-items-center border border-border text-zinc-300 transition-colors hover:border-accent hover:text-accent"
          onClick={onNavigate}
        >
          <CloseIcon aria-hidden="true" className="size-5" />
        </button>
      ) : null}

      <div className="mt-3 flex flex-col items-center sm:mt-0">
        <div className="relative size-28 overflow-hidden border border-zinc-700 bg-black sm:size-20 lg:size-20 xl:size-24 massive:size-40">
          <Image
            src={profile.image.src}
            alt={profile.image.alt}
            fill
            priority
            quality={100}
            sizes="(min-width: 1536px) 160px, (min-width: 1280px) 96px, (min-width: 1024px) 80px, 112px"
            className="scale-125 object-cover object-[center_32%]"
          />
        </div>
      </div>

      <div className="mt-5 min-w-0 text-center sm:mt-3 lg:mt-3 massive:mt-8">
        <h1 className="wrap-break-word text-2xl font-semibold leading-tight tracking-tight text-white sm:text-xl lg:text-lg lg:leading-tight massive:text-3xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-1.5 sm:text-xs sm:leading-tight lg:mt-1 lg:text-xs lg:leading-tight massive:mt-4 massive:text-lg">
          {profile.role}
        </p>
        <p className="mt-3 flex min-w-0 flex-wrap items-center justify-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-zinc-500 sm:mt-2 sm:text-[0.62rem] lg:mt-1.5 lg:text-[0.58rem] lg:tracking-[0.12em] massive:mt-5 massive:text-sm massive:tracking-[0.18em]">
          <LocationIcon className="size-3 shrink-0 sm:size-2.5 lg:size-2 massive:size-4" />
          <span className="min-w-0 wrap-break-word">{profile.location}</span>
        </p>
      </div>

      <div className="mt-5 sm:mt-3 lg:mt-3 massive:mt-8">
        <Link
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="button-accent inline-flex w-full items-center justify-center border px-4 py-3 text-sm font-medium sm:py-2 sm:text-xs lg:py-1.5 lg:text-xs massive:py-4 massive:text-base"
        >
          View resume
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-1.5 lg:mt-3 lg:gap-1.5 massive:mt-8 massive:gap-4">
        {externalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="grid size-10 place-items-center border border-border text-zinc-400 transition-colors hover:border-accent hover:text-accent sm:size-9 lg:size-8 massive:size-12"
          >
            <SocialIcon link={link} className="sm:text-sm lg:text-xs massive:text-lg" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SidebarRoutes({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { navigation } = portfolioData;

  return (
    <nav
      aria-label="Primary navigation"
      className="min-h-0 border border-border bg-panel px-5 py-6 lg:flex lg:flex-col lg:px-3 lg:py-4 xl:px-4 xl:py-5 massive:px-8 massive:py-10"
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted massive:text-base">
        Routes
      </h2>
      <div className="scrollbar-hidden mt-4 grid gap-2 overflow-y-auto pr-1 lg:min-h-0 lg:flex-1 massive:mt-6 massive:gap-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onNavigate}
              className={`py-2 text-sm transition-colors duration-200 massive:py-2.5 massive:text-lg ${
                isActive
                  ? "font-medium text-accent"
                  : "text-zinc-500 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function SocialIcon({
  link,
  className = "",
}: {
  link: ExternalLink;
  className?: string;
}) {
  const Icon = siteIcons[link.icon];

  return <Icon aria-hidden="true" className={`size-4 ${className}`} />;
}
