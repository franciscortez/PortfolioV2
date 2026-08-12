import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center border border-border bg-panel px-6 py-16 text-center">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
          404
        </p>
        <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-foreground bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-contrast"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
