import { education } from "@/data/experience";
import { siteIcons } from "@/data/icons";

export function EducationSection() {
  const EducationIcon = siteIcons.education;

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8">
        <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">
          <EducationIcon aria-hidden="true" className="size-4" />
          Academic background
        </h2>
      </div>

      <div className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:p-8">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.degree}`}
            className="border border-border bg-panel p-6 sm:p-8"
          >
            <div className="grid gap-3 border-b border-border pb-5">
              <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {item.degree}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-right">
                  {item.period}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <p className="text-sm font-medium text-foreground">
                  {item.institution}
                </p>
                {item.note ? (
                  <p className="text-sm leading-6 text-muted sm:text-right">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
