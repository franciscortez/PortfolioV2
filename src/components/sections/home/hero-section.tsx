import Link from "next/link";
import { AnimatedRole } from "@/components/ui/animated-role";

export function HeroSection() {
  return (
    <section className="border border-border bg-panel">
      <div className="border-b border-border p-6 sm:p-8">
        <div className="max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
            <AnimatedRole />
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build websites that do more than look good - they work, automate,
            and help businesses grow.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-300">
            I&apos;m a Full Stack Developer who builds websites, web apps, and
            automation systems that help businesses save time, manage work
            better, and grow online.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="button-accent border px-4 py-3 text-sm font-medium"
          >
            View my work
          </Link>

          <Link
            href="/contact"
            className="border border-border px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
