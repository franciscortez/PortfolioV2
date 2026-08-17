const services = [
  {
    label: "01",
    title: "Web Development",
    description:
      "I build full-stack websites and web applications with clean interfaces, REST APIs, database-driven workflows, and deployment-ready structure.",
    details: [
      "Scalable architecture",
      "Modern frameworks",
      "Database integration",
    ],
  },
  {
    label: "02",
    title: "AI Automation",
    description:
      "I connect tools, APIs, webhooks, and AI services into practical systems that reduce manual work and turn raw data into useful actions.",
    details: ["Workflow automation", "API integrations", "AI-powered features"],
  },
];

export function WhatIDoSection() {
  return (
    <section className="border border-border bg-background">
      {/* Section Header */}
      <div className="border-b border-border px-5 py-4 sm:px-6 sm:py-4.5">
        <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          What I do
        </h2>
      </div>

      <div className="grid lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`group p-5 transition-colors hover:bg-panel sm:p-6 lg:p-7 ${
              index === 0
                ? "border-b border-border lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted transition-colors group-hover:text-accent">
                  {service.label}
                </p>
                <h3 className="mt-3.5 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {service.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 h-px w-14 bg-border transition-colors group-hover:bg-accent"
              />
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {service.description}
            </p>

            <ul className="mt-5 grid gap-2.5">
              {service.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-center gap-3 border-t border-border pt-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted"
                >
                  <span className="size-1.5 bg-accent" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
