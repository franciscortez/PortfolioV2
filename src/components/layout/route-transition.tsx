"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type RouteTransitionProps = {
  children: ReactNode;
};

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="route-transition min-h-full">
      {children}
    </div>
  );
}
