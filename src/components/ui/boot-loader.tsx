"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

const MINIMUM_VISIBLE_MS = 600;

export function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hydration has finished, application is ready and interactive.
    // Transition out of loading after a short delay so the user sees the animation,
    // without waiting for heavy external assets (images, fonts) to block first paint.
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, MINIMUM_VISIBLE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return <LoadingScreen variant="overlay" />;
}
