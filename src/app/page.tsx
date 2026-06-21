import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-between border border-border bg-panel">
      <header className="border-b border-border p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
          Portfolio foundation
        </p>
        <div className="mt-5">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {portfolioData.profile.name}
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            {portfolioData.profile.role}
          </p>
        </div>
      </header>

      <div className="grid flex-1 gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="flex flex-col justify-center">
          <p className="max-w-2xl text-2xl font-medium leading-snug text-white sm:text-3xl">
            A minimal, high-contrast Next.js portfolio shell ready for the core
            pages, services, and contact flow.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            This page now sits inside the shared sidebar layout: a 20% static
            desktop information column, an 80% content region, and a hamburger
            sidebar for mobile screens.
          </p>
        </div>

        <aside className="grid content-start gap-8 lg:border-l lg:border-border lg:pl-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Build notes
            </h3>
            <ul className="mt-4 grid gap-3">
              {portfolioData.buildNotes.map((item) => (
                <li
                  key={item}
                  className="border border-border bg-black px-4 py-3 text-sm text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
              Current focus
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Phase 3 adds the shared navigation structure. The individual
              routes and full page content are planned for Phase 4.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
