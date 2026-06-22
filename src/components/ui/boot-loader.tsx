"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

const MINIMUM_VISIBLE_MS = 900;

export function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let timeoutId: number | undefined;

    function finishLoading() {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(MINIMUM_VISIBLE_MS - elapsed, 0);

      timeoutId = window.setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    }

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading, { once: true });

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return <LoadingScreen variant="overlay" />;
}
