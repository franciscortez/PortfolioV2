import { certifications } from "@/data/experience";
import { siteIcons } from "@/data/icons";

export function CertificationsSection() {
  const CertificateIcon = siteIcons.certificate;
  const ExternalLinkIcon = siteIcons.externalLink;

  return (
    <section className="border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8 xl:p-10 massive:p-14">
        <h2 className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-accent massive:text-sm">
          <CertificateIcon aria-hidden="true" className="size-4" />
          Certifications
        </h2>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 xl:p-10 massive:p-14">
        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => {
            const isClickable = Boolean(cert.url);

            const content = (
              <>
                <span className="size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-foreground transition-colors group-hover:text-accent massive:text-base">
                    {cert.title}
                  </div>
                  {(cert.issuer || cert.date) && (
                    <div className="mt-0.5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      {cert.issuer && <span>{cert.issuer}</span>}
                      {cert.issuer && cert.date && <span>•</span>}
                      {cert.date && <span>{cert.date}</span>}
                    </div>
                  )}
                </div>
                {isClickable && (
                  <ExternalLinkIcon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                )}
              </>
            );

            if (isClickable && cert.url) {
              return (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate for ${cert.title}${cert.issuer ? ` by ${cert.issuer}` : ""}`}
                  className="group flex items-center gap-3 border border-border bg-panel p-4 transition-colors hover:border-accent/60 hover:bg-surface-elevated sm:p-5"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={cert.title}
                className="group flex items-center gap-3 border border-border bg-panel p-4 transition-colors hover:border-accent/40 sm:p-5"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
