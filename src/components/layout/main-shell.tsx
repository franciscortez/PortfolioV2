import type { ReactNode } from "react";

type MainShellProps = {
  children: ReactNode;
};

export function MainShell({ children }: MainShellProps) {
  return (
    <main className="min-h-screen overflow-x-hidden px-6 py-8 sm:px-10 lg:col-start-2 lg:px-12 lg:py-10">
      {children}
    </main>
  );
}
