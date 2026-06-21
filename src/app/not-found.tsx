import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center border border-border bg-panel px-6 py-16 text-center">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
          404
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-white bg-white px-4 py-3 text-sm font-medium text-black! transition-colors hover:bg-zinc-200"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
