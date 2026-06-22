import { siteIcons } from "@/data/icons";
import { workExperience } from "@/data/experience";

export function ExperienceTimeline() {
  const BriefcaseIcon = siteIcons.briefcase;

  return (
    <section className="border border-border bg-black">
      <div className="border-b border-border p-6 sm:p-8">
        <h1 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
          <BriefcaseIcon aria-hidden="true" className="size-3.5" />
          Work experience
        </h1>
      </div>

      <ol className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:p-8">
        {workExperience.map((item) => (
          <li key={`${item.organization}-${item.role}`}>
            <article className="border border-border bg-panel p-6 sm:p-8">
              <div className="grid gap-3 border-b border-border pb-5">
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {item.role}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-right">
                    {item.period}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <p className="text-sm font-medium text-zinc-300">
                    {item.organization}
                  </p>
                  <p className="text-sm leading-6 text-zinc-500 sm:text-right">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="pt-5">
                <ul className="grid gap-3">
                {item.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm leading-7 text-zinc-300"
                  >
                    <span
                      className="mt-3 size-1.5 bg-accent"
                      aria-hidden="true"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
