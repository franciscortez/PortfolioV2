import { workflowSteps } from "@/data/portfolio";

export function WorkflowSection() {
  return (
    <section className="border border-border bg-background">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6 sm:py-4.5">
        <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          How I work
        </h2>

        <div className="inline-flex items-center gap-2 border border-border bg-panel px-2.5 py-1 font-mono text-[0.7rem] text-muted sm:text-xs">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span>4-PHASE DEVELOPMENT CYCLE</span>
        </div>
      </div>

      {/* Horizontal 1-Row Pipeline (4 columns side-by-side) */}
      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
        {workflowSteps.map((step) => (
          <article
            key={step.number}
            className="group relative flex flex-col p-5 transition-colors hover:bg-panel sm:p-6"
          >
            {/* Top Row: Number Badge + Phase + Status */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-6 items-center justify-center border border-border bg-panel font-mono text-[0.7rem] font-semibold text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast sm:size-7 sm:text-xs">
                    {step.number}
                  </span>

                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {step.phase}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 border border-border bg-panel/80 px-2 py-0.5 font-mono text-[0.68rem] tracking-wider text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {step.status}
                </span>
              </div>

              {/* Animated Divider Line (Left-to-Right Accent on Hover) */}
              <div className="relative mt-3.5 h-px w-full bg-border/80">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="mt-3.5 font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {step.title}
            </h3>

            <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
              {step.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
