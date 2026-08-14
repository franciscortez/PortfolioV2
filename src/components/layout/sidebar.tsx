"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
      className={`${className} grid-rows-[auto_auto] content-start gap-3 bg-background p-3 transition-colors sm:p-4 lg:sticky lg:top-0 lg:h-dvh lg:min-h-dvh lg:grid-rows-[auto_minmax(0,1fr)] lg:content-normal lg:gap-4 lg:overflow-hidden xl:gap-5 massive:gap-6`}
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
    <div className="relative flex min-w-0 flex-col justify-center border border-border bg-panel px-5 py-6 sm:px-5 sm:py-5 lg:px-3 lg:py-3 xl:px-4 xl:py-4 massive:px-6 massive:py-6">
      <ThemeToggle
        className={`absolute top-4 ${showClose ? "left-4" : "right-4"}`}
      />

      {showClose ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute right-4 top-4 grid size-10 place-items-center border border-border bg-panel text-muted transition-colors hover:border-accent hover:bg-accent-dark hover:text-accent"
          onClick={onNavigate}
        >
          <CloseIcon aria-hidden="true" className="size-5" />
        </button>
      ) : null}

      <div>
        <div className="mt-3 flex flex-col items-center sm:mt-0">
          <div className="relative size-32 overflow-hidden border border-border bg-background sm:size-28 lg:size-24 xl:size-28 massive:size-32">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              fill
              priority
              quality={100}
              sizes="(min-width: 1536px) 128px, (min-width: 1280px) 112px, (min-width: 1024px) 96px, 128px"
              className="scale-110 object-cover object-[center_12%]"
            />
          </div>
        </div>

        <div className="mt-5 min-w-0 text-center sm:mt-4 lg:mt-3">
          <p className="wrap-break-word font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-xl lg:text-base lg:leading-tight xl:text-lg massive:text-xl">
            {profile.name}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted sm:mt-2 sm:text-sm sm:leading-6 lg:mt-1 lg:text-xs lg:leading-5 massive:text-sm">
            {profile.role}
          </p>
          <p className="mt-3 flex min-w-0 flex-wrap items-center justify-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted sm:mt-2 sm:text-[0.68rem] lg:mt-1.5 lg:text-[0.56rem] lg:tracking-widest xl:text-[0.62rem] massive:text-xs">
            <LocationIcon className="size-3 shrink-0 sm:size-3 lg:size-2 xl:size-2.5 massive:size-3" />
            <span className="min-w-0 wrap-break-word">{profile.location}</span>
          </p>
        </div>
      </div>

      <div>
        <div className="mt-5 sm:mt-4 lg:mt-3">
          <Link
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button-accent inline-flex w-full items-center justify-center border px-4 py-3 text-sm font-medium sm:py-2.5 sm:text-sm lg:py-1.5 lg:text-xs xl:py-2 xl:text-xs massive:py-2.5 massive:text-sm"
          >
            View resume
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-2 lg:mt-3 lg:gap-1.5 xl:mt-4 xl:gap-2 massive:mt-5 massive:gap-2.5">
          {externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              className="grid size-10 place-items-center border border-border bg-background text-muted transition-colors hover:border-accent hover:bg-accent-dark hover:text-accent sm:size-10 lg:size-8 xl:size-9 massive:size-10"
            >
              <SocialIcon link={link} className="size-4 lg:size-3.5 xl:size-4 massive:size-4" />
            </Link>
          ))}
        </div>
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
      className="min-h-0 border border-border bg-panel px-4 py-5 sm:px-5 sm:py-6 lg:flex lg:flex-col lg:px-3 lg:py-4 xl:px-4 xl:py-5 massive:px-6 massive:py-6"
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted massive:text-sm">
        Routes
      </h2>
      <div className="scrollbar-hidden mt-3 grid gap-2 overflow-y-auto lg:min-h-0 lg:flex-1 lg:auto-rows-min xl:mt-4 xl:gap-2.5 massive:mt-5 massive:gap-3">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onNavigate}
              className={`group relative flex min-h-12 items-center border px-3 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors duration-200 sm:text-xs lg:min-h-11 lg:px-3 lg:py-2 lg:text-[0.68rem] lg:tracking-[0.14em] xl:px-4 xl:py-2.5 xl:text-xs massive:min-h-14 massive:px-5 massive:py-3 massive:text-sm ${
                isActive
                  ? "border-accent bg-accent-dark text-accent"
                  : "border-border bg-background text-muted hover:border-accent hover:bg-panel hover:text-accent"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-full w-0.5 bg-accent transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <span className="min-w-0 truncate pl-1">{item.label}</span>
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
