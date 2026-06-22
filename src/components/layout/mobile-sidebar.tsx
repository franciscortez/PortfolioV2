"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { portfolioData } from "@/data/portfolio";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileHeader onOpen={() => setIsOpen(true)} />

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/70"
            onClick={() => setIsOpen(false)}
          />
          <div className="scrollbar-hidden relative h-full w-[min(24rem,92vw)] overflow-y-auto border-r border-border bg-black">
            <Sidebar
              className="grid min-h-full"
              onNavigate={() => setIsOpen(false)}
              showClose
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function MobileHeader({ onOpen }: { onOpen: () => void }) {
  const { profile } = portfolioData;

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur lg:hidden">
      <div className="min-w-0 pr-4">
        <p className="truncate text-sm font-medium text-white">{profile.name}</p>
        <p className="mt-1 truncate font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {profile.role}
        </p>
      </div>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
        className="grid size-11 place-items-center border border-border bg-panel text-white transition-colors hover:border-accent hover:bg-accent-dark hover:text-accent"
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
