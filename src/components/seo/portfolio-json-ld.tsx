import { JsonLd } from "@/components/seo/json-ld";
import { portfolioData } from "@/data/portfolio";
import { absoluteUrl, siteUrl } from "@/lib/site";

export function PortfolioJsonLd() {
  const { externalLinks, profile } = portfolioData;
  const sameAs = externalLinks
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href);

  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": personId,
            name: profile.name,
            jobTitle: profile.role,
            email: profile.email,
            url: siteUrl,
            image: absoluteUrl(profile.image.src),
            sameAs,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pampanga",
              addressCountry: "PH",
            },
          },
          {
            "@type": "WebSite",
            "@id": websiteId,
            name: `${profile.name} Portfolio`,
            url: siteUrl,
            inLanguage: "en",
            publisher: {
              "@id": personId,
            },
          },
        ],
      }}
    />
  );
}
