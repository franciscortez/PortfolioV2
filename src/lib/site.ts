const fallbackSiteUrl = "http://localhost:3000";

function normalizeUrl(url: string) {
  return url.replace(/\/$/, "");
}

function ensureProtocol(url: string) {
  return /^https?:\/\//.test(url) ? url : `https://${url}`;
}

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalizeUrl(ensureProtocol(process.env.NEXT_PUBLIC_SITE_URL));
  }

  if (process.env.VERCEL_URL) {
    return `https://${normalizeUrl(process.env.VERCEL_URL)}`;
  }

  return fallbackSiteUrl;
}

export const siteUrl = getSiteUrl();

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteUrl}${normalizedPath}`;
}
