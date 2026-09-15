"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

const MINIMUM_VISIBLE_MS = 600;
const BOOTED_SESSION_KEY = "portfolio-booted";
let bootedInMemory = false;

export function BootLoader() {
  // Start hidden on both the server and client so repeat visits never flash.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (bootedInMemory) return;

    try {
      if (window.sessionStorage.getItem(BOOTED_SESSION_KEY) === "1") return;
    } catch {
      // In-memory tracking still prevents repeats during navigation.
    }

    let hideTimeout: ReturnType<typeof setTimeout> | undefined;
    const showTimeout = window.setTimeout(() => {
      bootedInMemory = true;
      try {
        window.sessionStorage.setItem(BOOTED_SESSION_KEY, "1");
      } catch {
        // Storage may be blocked; keep the in-memory fallback.
      }
      setIsLoading(true);
      hideTimeout = setTimeout(() => setIsLoading(false), MINIMUM_VISIBLE_MS);
    }, 0);

    return () => {
      window.clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return isLoading ? <LoadingScreen variant="overlay" /> : null;
}
