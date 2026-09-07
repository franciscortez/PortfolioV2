# Francis Emil M. Cortez Portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site presents projects, experience, skills, and contact details in a restrained black-and-white interface.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `next/font` with Geist and Geist Mono
- `react-icons`
- Web3Forms contact form

## Environment

Create a local `.env` file from `.env.example`.

```env
WEB3FORMS_ACCESS_KEY=
NEXT_PUBLIC_SITE_URL=
```

Use the deployed production origin for `NEXT_PUBLIC_SITE_URL`, for example `https://your-domain.com`.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

On Windows PowerShell, use `npm.cmd` if `npm.ps1` is blocked:

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

## SEO Notes

- Root and route-level metadata live in `src/lib/seo.ts` and `src/app/**/page.tsx`.
- Site URL helpers live in `src/lib/site.ts`.
- Sitemap is generated from `src/app/sitemap.ts`.
- Robots rules are generated from `src/app/robots.ts`.
- Social preview image is generated from `src/app/opengraph-image.tsx`.
- Homepage structured data is rendered through `src/components/seo/portfolio-json-ld.tsx`.

After deployment, verify `/sitemap.xml`, `/robots.txt`, and `/opengraph-image`, then submit the sitemap in Google Search Console.

### Contact form delivery

Set `WEB3FORMS_ACCESS_KEY` to your Web3Forms form access key before building or deploying. The server component passes this public form identifier to the browser, which submits directly to Web3Forms as recommended by the provider. This is a public form access key, not a private account credential. The legacy `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` name remains supported. Restart development or rebuild/redeploy after changing environment values.

The UI preserves entered text on rejection, network failure, or timeout; it clears the form only after an HTTP-success JSON response with `success: true`. Automated E2E tests mock provider responses and do not send email. A separate, authorized live test is required to confirm provider acceptance; inbox delivery must be checked by the recipient.
