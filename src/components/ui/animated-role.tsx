"use client";

import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "AI Automation Specialist"];

export function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = letterCount === currentRole.length;
    const isEmpty = letterCount === 0;

    const delay = isComplete && !isDeleting ? 1200 : isDeleting ? 45 : 75;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        return;
      }

      setLetterCount((currentCount) =>
        isDeleting ? currentCount - 1 : currentCount + 1
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterCount, roleIndex]);

  return (
    <span
      aria-live="polite"
      className="inline-flex min-h-[1.25em] items-center text-accent"
    >
      <span>{roles[roleIndex].slice(0, letterCount)}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-px animate-pulse bg-accent"
      />
    </span>
  );
}
