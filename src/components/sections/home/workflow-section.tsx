import { workflowSteps } from "@/data/portfolio";

export function WorkflowSection() {
  return (
    <section className="border border-border bg-background">
      <div className="flex flex-col justify-between gap-2 border-b border-border p-6 sm:flex-row sm:items-center sm:p-8 xl:p-10 massive:p-14">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-accent massive:text-sm">
            How I work
          </h2>
          <p className="mt-1 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl massive:text-3xl">
            A structured path from idea to production
          </p>
        </div>
        <p className="font-mono text-xs text-muted massive:text-sm">
          4-phase development cycle
        </p>
      </div>

      {/* Desktop Connected Pipeline (lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-4 divide-x divide-border">
        {workflowSteps.map((step) => (
          <article
            key={step.number}
            className="group flex flex-col justify-between p-6 transition-colors hover:bg-panel xl:p-10 massive:p-14"
          >
            <div>
              {/* Pipeline node sitting on a rail shared across every column */}
              <div className="relative flex h-8 items-center">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-1.5rem] top-1/2 h-px -translate-y-1/2 bg-border transition-colors group-hover:bg-accent/50 xl:inset-x-[-2.5rem] massive:inset-x-[-3.5rem]"
                />
                <div className="relative z-10 flex size-8 items-center justify-center border border-border bg-panel font-mono text-xs font-semibold text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground massive:size-10 massive:text-sm">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight text-foreground xl:text-xl massive:text-2xl">
                {step.title}
              </h3>

              <p className="mt-2.5 text-xs leading-relaxed text-muted massive:text-sm">
                {step.summary}
              </p>
            </div>

            {/* Deliverable Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-4">
              {step.deliverables.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center border border-border bg-panel/50 px-2 py-0.5 font-mono text-[0.68rem] tracking-wider text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground massive:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Connected Timeline (< lg) */}
      <div className="grid grid-cols-1 divide-y divide-border lg:hidden">
        {workflowSteps.map((step, index) => {
          const isLast = index === workflowSteps.length - 1;

          return (
            <article
              key={step.number}
              className="group flex gap-4 p-6 transition-colors hover:bg-panel sm:gap-6 sm:p-8"
            >
              {/* Vertical Stepper Spine */}
              <div className="flex flex-col items-center">
                <div className="flex size-8 shrink-0 items-center justify-center border border-border bg-panel font-mono text-xs font-semibold text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  {step.number}
                </div>
                {!isLast && (
                  <div className="my-2 w-px flex-1 bg-border transition-colors group-hover:bg-accent/40" />
                )}
              </div>

              {/* Step Info */}
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {step.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center border border-border bg-panel/50 px-2 py-0.5 font-mono text-[0.68rem] tracking-wider text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
