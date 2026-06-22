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
    details: [
      "Workflow automation",
      "API integrations",
      "AI-powered features",
    ],
  },
];

export function WhatIDoSection() {
  return (
    <section className="border border-border bg-black">
      <div className="border-b border-border p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          What I do
        </p>
      </div>

      <div className="grid lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`group p-6 transition-colors hover:bg-panel sm:p-8 ${
              index === 0 ? "border-b border-border lg:border-b-0 lg:border-r" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500 transition-colors group-hover:text-accent">
                  {service.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 h-px w-14 bg-zinc-700 transition-colors group-hover:bg-accent"
              />
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              {service.description}
            </p>

            <ul className="mt-8 grid gap-3">
              {service.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-center gap-3 border-t border-border pt-3 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500"
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
