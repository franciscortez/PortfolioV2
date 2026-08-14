import { stats } from "@/data/portfolio";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function StatsSection() {
  return (
    <section className="border border-border bg-background">
      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((item) => (
          <article
            key={item.label}
            className="group flex flex-col justify-center p-6 transition-colors hover:bg-panel sm:p-8 xl:p-10"
          >
            <div className="flex items-baseline">
              <AnimatedCounter
                target={item.value}
                suffix={item.suffix}
                className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl xl:text-6xl"
              />
            </div>

            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent sm:mt-4">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
