import { siteIcons } from "@/data/icons";
import { workExperience } from "@/data/experience";

export function ExperienceTimeline() {
  const BriefcaseIcon = siteIcons.briefcase;

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8 xl:p-10 massive:p-14">
        <h1 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent massive:text-sm">
          <BriefcaseIcon aria-hidden="true" className="size-3.5" />
          Work experience
        </h1>
      </div>

      <ol className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:p-8 xl:gap-6 xl:p-10 massive:gap-8 massive:p-14">
        {workExperience.map((item) => (
          <li key={`${item.organization}-${item.role}`}>
            <article className="border border-border bg-panel p-6 sm:p-8 xl:p-10 massive:p-12">
              <div className="grid gap-3 border-b border-border pb-5">
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground xl:text-3xl massive:text-4xl">
                    {item.role}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-right massive:text-sm">
                    {item.period}
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <p className="text-sm font-medium text-foreground massive:text-base">
                    {item.organization}
                  </p>
                  <p className="text-sm leading-6 text-muted sm:text-right massive:text-base">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="pt-5">
                <ul className="grid gap-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm leading-7 text-muted massive:text-base"
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
