import type { ReactNode } from "react";
import { RouteTransition } from "@/components/layout/route-transition";

type MainShellProps = {
  children: ReactNode;
};

export function MainShell({ children }: MainShellProps) {
  return (
    <main className="min-h-screen overflow-x-hidden px-6 py-8 sm:px-10 lg:col-start-2 lg:px-12 lg:py-10 xl:px-16 xl:py-12 massive:px-20 massive:py-16">
      <RouteTransition>{children}</RouteTransition>
    </main>
  );
}
