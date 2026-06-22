import type { ReactNode } from "react";
import { MainShell } from "@/components/layout/main-shell";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Sidebar } from "@/components/layout/sidebar";
import { BootLoader } from "@/components/ui/boot-loader";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[minmax(15rem,20%)_minmax(0,1fr)]">
      <BootLoader />
      <MobileSidebar />
      <Sidebar className="hidden lg:grid" />
      <MainShell>{children}</MainShell>
    </div>
  );
}
