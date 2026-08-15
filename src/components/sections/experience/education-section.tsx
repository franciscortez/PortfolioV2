import { education } from "@/data/experience";
import { siteIcons } from "@/data/icons";

export function EducationSection() {
  const EducationIcon = siteIcons.education;

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8 xl:p-10 massive:p-14">
        <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent massive:text-sm">
          <EducationIcon aria-hidden="true" className="size-4" />
          Academic background
        </h2>
      </div>

      <div className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:p-8 xl:gap-6 xl:p-10 massive:gap-8 massive:p-14">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.degree}`}
            className="border border-border bg-panel p-6 sm:p-8 xl:p-10 massive:p-12"
          >
            <div className="grid gap-4">
              <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground xl:text-3xl massive:text-4xl">
                  {item.degree}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-right massive:text-sm">
                  {item.period}
                </p>
              </div>

              <div className="grid gap-2 border-t border-border pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                  <p className="text-sm font-medium text-foreground massive:text-base">
                    {item.institution}
                  </p>
                  {item.note ? (
                    <p className="text-xs text-muted massive:text-sm">
                      {item.note}
                    </p>
                  ) : null}
                </div>

                {item.honors ? (
                  <span className="inline-flex w-fit items-center border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent massive:text-sm">
                    {item.honors}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
