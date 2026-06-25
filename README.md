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
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=
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
