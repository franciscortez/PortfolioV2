# AGENTS.md

## Project Context

This is a deployed personal portfolio website built with the Next.js App Router. The project has moved well past the default `create-next-app` starter: the current app has a dark-first portfolio shell, persistent desktop sidebar, mobile drawer sidebar, centralized portfolio data, route loading UI, custom 404 page, implemented project/experience/skills/contact routes, project imagery, a Web3Forms contact form, and light/dark theme support.

The portfolio direction remains black-and-white, restrained, technical, and inspired by the visual discipline of the Next.js website.

## Current Stack

- Framework: Next.js 16 App Router
- Runtime UI: React 19
- Language: TypeScript with `strict` enabled
- Styling: Tailwind CSS v4 via `@import "tailwindcss"`
- Fonts: Geist and Geist Mono from `next/font/google`
- Linting: ESLint 9 with `eslint-config-next`
- Icons: `react-icons`
- Theme persistence: `next-themes`
- Path alias: `@/*` maps to `./src/*`
- React Compiler: enabled in `next.config.ts`

## Current Implementation Snapshot

- The root layout in `src/app/layout.tsx` wraps all routes with `ThemeProvider` and `SiteShell`.
- `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/experience/page.tsx`, `src/app/skills/page.tsx`, and `src/app/contact/page.tsx` are thin App Router route entries.
- Real page UI lives in `src/components/pages/*-page.tsx` and is re-exported from `src/components/pages/index.ts`.
- Implemented routes are `/`, `/projects`, `/experience`, `/skills`, and `/contact`.
- `src/app/loading.tsx` renders the shared loading screen.
- `src/app/not-found.tsx` renders a dark custom 404 page.
- Portfolio profile/navigation/contact data is centralized in `src/data/portfolio.ts`.
- Projects, experience, and skills have been split into `src/data/project.ts`, `src/data/experience.ts`, and `src/data/skills.ts`.
- Icon mappings are centralized in `src/data/icons.ts`.
- The contact form uses Web3Forms through `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and gracefully disables itself when the key is missing.
- The UI supports dark/light theme toggling through `next-themes`, while preserving the black-and-white portfolio direction.
- Public assets currently include:
  - `public/images/profile/profile-2x2.jpeg`
  - `public/images/projects/twitch-insight.png`
  - `public/images/projects/nola-paymongo.png`
  - `public/images/projects/penny-wings.png`
  - `public/images/projects/portfolio.png`
  - `public/documents/resume.pdf`
- Deployment and manual validation have been completed, per user confirmation on 2026-06-25.

## SEO Status

The site is deployed and functional, and the first SEO implementation pass has been completed locally. Current SEO-relevant status:

- Root metadata now uses `metadataBase`, canonical URL support, Open Graph metadata, Twitter card metadata, and a stronger portfolio description.
- `NEXT_PUBLIC_SITE_URL` is documented in `.env.example`; production should keep this configured in Vercel.
- Implemented routes export route-specific metadata.
- `src/app/sitemap.ts` generates `/sitemap.xml`.
- `src/app/robots.ts` generates `/robots.txt`.
- `src/app/opengraph-image.tsx` generates a branded social preview image.
- Homepage JSON-LD includes `Person` and `WebSite` structured data using verified profile data.
- Projects and Skills now use route-level `h1` headings in their page header components.
- Project screenshots use useful `alt` text and Next image optimization.
- `README.md` is currently empty and can be filled with deployment, environment, and SEO maintenance details.
- Remaining SEO work is mostly post-deployment validation: deploy, verify production metadata/routes, submit the sitemap in Google Search Console, and inspect Search Console reports.

## Important Files

- `src/app/layout.tsx`: Root HTML, Geist font setup, root metadata, `ThemeProvider`, and global `SiteShell` wrapper.
- `src/app/page.tsx`: Thin home route entry.
- `src/app/projects/page.tsx`: Thin projects route entry.
- `src/app/experience/page.tsx`: Thin experience route entry.
- `src/app/skills/page.tsx`: Thin skills route entry.
- `src/app/contact/page.tsx`: Thin contact route entry.
- `src/app/sitemap.ts`: Generated sitemap route for implemented pages.
- `src/app/robots.ts`: Generated robots route referencing the sitemap.
- `src/app/opengraph-image.tsx`: Generated Open Graph/social preview image.
- `src/app/loading.tsx`: Route loading UI using `LoadingScreen`.
- `src/app/not-found.tsx`: Custom 404 page.
- `src/app/globals.css`: Tailwind import, theme tokens, global focus/selection styles, loading animations, route transitions, and scrollbar utilities.
- `src/components/layout/site-shell.tsx`: Root shell combining boot loader, mobile sidebar, desktop sidebar, and main content.
- `src/components/layout/sidebar.tsx`: Desktop/sidebar drawer content, profile block, external icon links, resume button, theme toggle, and active navigation.
- `src/components/layout/mobile-sidebar.tsx`: Client-side hamburger and drawer state.
- `src/components/layout/main-shell.tsx`: Main content wrapper.
- `src/components/layout/route-transition.tsx`: Client-side route transition wrapper keyed by pathname.
- `src/components/pages/home-page.tsx`: Home page component.
- `src/components/pages/projects-page.tsx`: Projects page component with client-side active project selection.
- `src/components/pages/experience-page.tsx`: Experience page component.
- `src/components/pages/skills-page.tsx`: Skills page component.
- `src/components/pages/contact-page.tsx`: Contact page component with toast container, overview, and form.
- `src/components/pages/index.ts`: Central page exports.
- `src/components/seo/json-ld.tsx`: Reusable JSON-LD script component.
- `src/components/seo/portfolio-json-ld.tsx`: Portfolio `Person` and `WebSite` structured data.
- `src/components/sections/home/hero-section.tsx`: Homepage hero.
- `src/components/sections/home/what-i-do-section.tsx`: Homepage services section.
- `src/components/sections/home/skills-section.tsx`: Homepage featured skills section.
- `src/components/sections/projects/*`: Projects header, list, and detail/lightbox UI.
- `src/components/sections/experience/*`: Work experience, education, and certifications sections.
- `src/components/sections/skills/*`: Skills summary and filterable skills UI.
- `src/components/sections/contact/*`: Contact overview, server wrapper, and client form.
- `src/components/ui/animated-role.tsx`: Client-side animated role label.
- `src/components/ui/boot-loader.tsx`: Client-side initial load overlay.
- `src/components/ui/loading-screen.tsx`: Shared loading screen component.
- `src/components/ui/theme-provider.tsx`: `next-themes` provider wrapper.
- `src/components/ui/theme-toggle.tsx`: Theme toggle button.
- `src/components/ui/toast.tsx`: Lightweight client-side toast system.
- `src/data/portfolio.ts`: Editable profile, navigation, external links, services, and build notes.
- `src/data/project.ts`: Editable project data and project image/link/tech types.
- `src/data/experience.ts`: Editable work experience, education, and certifications data.
- `src/data/skills.ts`: Editable skill categories and featured/home skills.
- `src/data/icons.ts`: Shared icon import and mapping.
- `src/lib/site.ts`: Shared site URL and absolute URL helpers.
- `src/lib/seo.ts`: Shared metadata helpers and root metadata.
- `package.json`: Project scripts are `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`.

## Product Direction

Build a black-and-white portfolio website inspired by the visual restraint of the Next.js website.

The site should feel:

- Minimal
- Sharp
- Technical
- High contrast
- Spacious, but not empty
- Professional rather than decorative

Use black, white, and neutral zinc/stone grays as the main palette, with a restrained blue accent for hover, active, and interactive states. Avoid colorful gradients, decorative blobs, loud accent colors, and heavy visual effects unless the user explicitly asks for them.

## Personal Content Status

Real personal details are present in the data files:

- Name: `Francis Emil M. Cortez`
- Role: `Full Stack Developer`
- Location: `Pampanga, Philippines`
- Email: `francisemil.cortez@gmail.com`
- GitHub: `https://github.com/franciscortez`
- LinkedIn: `https://www.linkedin.com/in/francisemilcortez/`
- Resume: `/documents/resume.pdf`
- Profile image: `/images/profile/profile-2x2.jpeg`
- Work experience includes Leveric, SATEZO, and Nola Web Solutions.
- Education includes Pampanga State University (BS Information Technology, Magna Cum Laude).
- Certifications include Cloud Computing Fundamentals, JavaScript Essentials 1, Introduction to IoT and Digital Transformation, and Technical Support Fundamentals.

Do not invent additional real credentials, employers, schools, awards, or metrics. Placeholder content may be used only when clearly labeled or when the user requests it.

## Layout Direction

The primary layout uses a persistent sidebar for identity and navigation.

Desktop behavior:

- Sidebar sits on the left and remains visible as the static details/navigation column.
- `SiteShell` uses `lg:grid-cols-[minmax(15rem,20%)_minmax(0,1fr)]`.
- Main content uses the remaining desktop viewport width.
- Sidebar is split into two bordered divs: profile information and routes.
- The sidebar parent should not receive the border; the profile and route containers each own their own border.
- The sidebar remains sticky on desktop and should avoid independent page-level scroll behavior.
- Keep spacing tight and structured, similar to modern documentation/product sites.

Mobile behavior:

- Do not force the full sidebar to stay visible on small screens.
- Use the existing hamburger button in `MobileSidebar` to open and close the drawer.
- The mobile drawer should include the same profile details, resume link, icon links, theme toggle, and navigation.
- Content must remain readable without horizontal scrolling while the sidebar is closed.

## Visual Guidelines

- Prefer a black background with white text by default, with zinc panels used intentionally.
- Preserve the light theme support, but do not let it dilute the dark-first portfolio identity.
- Keep the site primarily black, white, and neutral gray, with blue reserved for deliberate hover and active states.
- Use thin borders such as `border-border`, `border-zinc-800`, or equivalent.
- Prefer square or small-radius corners. Use `rounded-md` or lower unless there is a strong reason.
- Use typography hierarchy instead of decoration.
- Use `font-sans` for most text and `font-mono` for small metadata, labels, dates, and technical tags.
- Avoid oversized hero marketing copy. This is a portfolio, so the first screen should quickly show identity and work context.
- Keep animations subtle: opacity, transform, border/background transitions, restrained loading/role animation, and route transitions are acceptable.

## Implementation Guidelines

- Keep components small and portfolio-specific.
- Prefer server components by default. Add `"use client"` only for interactivity that needs client state or browser APIs.
- Existing client components are justified for mobile drawer state, active route detection, theme toggling, active project selection, screenshot lightbox, skill filtering, toast state, contact form submission, animated role text, route transitions, and boot loading behavior.
- Use `next/image` for profile photos and project images unless there is a specific reason not to.
- Use `react-icons` for sidebar/social/skill icons instead of hand-written SVG.
- Keep shared icon imports and icon-name mappings in `src/data/icons.ts`.
- Use semantic HTML: `aside`, `nav`, `main`, `section`, `header`, `article`, and proper headings.
- Keep `src/app/**/page.tsx` files thin. Route files should import page components from `@/components/pages`.
- Centralize page exports in `src/components/pages/index.ts`.
- Keep editable content in `src/data` unless content grows enough to justify splitting further.
- Maintain accessibility:
  - All meaningful images need useful `alt` text.
  - Navigation links should have clear labels.
  - Text contrast must remain strong.
  - Interactive elements need visible focus states.
  - Modal/lightbox UI should remain keyboard dismissible and screen-reader understandable.
- Do not introduce a component library unless the project clearly needs it.

## Current Folder Structure

This is the currently implemented production structure:

```text
portfolio-v2/
|-- public/
|   |-- documents/
|   |   `-- resume.pdf
|   `-- images/
|       |-- profile/
|       |   `-- profile-2x2.jpeg
|       `-- projects/
|           |-- nola-paymongo.png
|           |-- penny-wings.png
|           |-- portfolio.png
|           `-- twitch-insight.png
|-- src/
|   |-- app/
|   |   |-- contact/
|   |   |   `-- page.tsx
|   |   |-- experience/
|   |   |   `-- page.tsx
|   |   |-- projects/
|   |   |   `-- page.tsx
|   |   |-- skills/
|   |   |   `-- page.tsx
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- icon.png
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   |-- not-found.tsx
|   |   |-- opengraph-image.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- layout/
|   |   |   |-- main-shell.tsx
|   |   |   |-- mobile-sidebar.tsx
|   |   |   |-- route-transition.tsx
|   |   |   |-- sidebar.tsx
|   |   |   `-- site-shell.tsx
|   |   |-- pages/
|   |   |   |-- contact-page.tsx
|   |   |   |-- experience-page.tsx
|   |   |   |-- home-page.tsx
|   |   |   |-- index.ts
|   |   |   |-- projects-page.tsx
|   |   |   `-- skills-page.tsx
|   |   |-- seo/
|   |   |   |-- json-ld.tsx
|   |   |   `-- portfolio-json-ld.tsx
|   |   |-- sections/
|   |   |   |-- contact/
|   |   |   |-- experience/
|   |   |   |-- home/
|   |   |   |-- projects/
|   |   |   `-- skills/
|   |   `-- ui/
|   |       |-- animated-role.tsx
|   |       |-- boot-loader.tsx
|   |       |-- icon.tsx
|   |       |-- loading-screen.tsx
|   |       |-- theme-provider.tsx
|   |       |-- theme-toggle.tsx
|   |       `-- toast.tsx
|   `-- data/
|       |-- experience.ts
|       |-- icons.ts
|       |-- portfolio.ts
|       |-- project.ts
|       `-- skills.ts
|   `-- lib/
|       |-- seo.ts
|       `-- site.ts
|-- .env.example
|-- .gitignore
|-- AGENTS.md
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

## Routing Rule

- Keep `src/app/**/page.tsx` as route entry files only.
- Put real page UI in `src/components/pages/*-page.tsx`.
- Route files should import page components from `@/components/pages`, not directly from individual page files.
- The central export file does not replace App Router route files.
- Each real URL still needs its own thin `src/app/**/page.tsx` file.
- Shared repeated page blocks may move into `src/components/sections`.
- Shared layout stays in `src/components/layout`.
- Shared editable content stays in `src/data`.
- Public assets stay organized under `public/images`, `public/documents`, and similar folders.
- Use the `scrollbar-hidden` utility when an area should remain scrollable but the scrollbar should not be visible.

## SEO Improvement Plan

Next SEO work should be done in small chunks. For each chunk, first create or edit the required files, then validate that the files and routes exist before marking the chunk complete. Do not mark a chunk `[x]` only because code was written; mark it complete only after its creation and behavior validation pass.

### SEO Chunk 0: Baseline Audit

Goal: confirm the current SEO surface before making changes.

- [x] Read `src/app/layout.tsx`, all route `page.tsx` files, `next.config.ts`, `.env.example`, and public assets.
- [x] Confirm whether `src/app/sitemap.ts` exists.
- [x] Confirm whether `src/app/robots.ts` exists.
- [x] Confirm whether `src/app/opengraph-image.*` or route-specific OG images exist.
- [x] Confirm whether JSON-LD structured data exists anywhere in `src/app` or `src/components`.
- [x] Creation validation: record which SEO files already exist and which files need to be created.
- [x] Behavior validation: run `npm.cmd run lint` before implementation if practical, so the SEO work starts from a known baseline.

### SEO Chunk 1: Site URL and Root Metadata

Goal: give the entire site a correct canonical base, stronger default metadata, and social card defaults.

- [x] Add `NEXT_PUBLIC_SITE_URL=` to `.env.example` if it is missing.
- [ ] Configure the production site URL in Vercel as `NEXT_PUBLIC_SITE_URL`.
- [x] Add a small helper or constant for the site URL if it prevents repeating `process.env.NEXT_PUBLIC_SITE_URL`.
- [x] Update `src/app/layout.tsx` with `metadataBase`.
- [x] Add a root `title` object with `default` and `template`.
- [x] Replace the generic root description with a specific description for Francis Emil M. Cortez.
- [x] Add root `alternates.canonical`.
- [x] Add root `openGraph` metadata.
- [x] Add root `twitter` metadata.
- [x] Add root `authors`, `creator`, and `publisher` where appropriate.
- [x] Creation validation: confirm `.env.example` contains `NEXT_PUBLIC_SITE_URL=` and `src/app/layout.tsx` exports the expanded `metadata`.
- [x] Behavior validation: run `npm.cmd run lint` and inspect built/page source output to confirm title, description, canonical, Open Graph, and Twitter tags render.

### SEO Chunk 2: Route-Level Metadata

Goal: make every implemented route distinct in search results and browser previews.

- [x] Add `metadata` export to `src/app/page.tsx` if home metadata should differ from root defaults.
- [x] Add `metadata` export to `src/app/projects/page.tsx`.
- [x] Add `metadata` export to `src/app/experience/page.tsx`.
- [x] Add `metadata` export to `src/app/skills/page.tsx`.
- [x] Add `metadata` export to `src/app/contact/page.tsx`.
- [x] Keep route files thin; metadata exports are allowed beside the page component.
- [x] Use a unique title, description, and canonical path for each route.
- [x] Creation validation: confirm each implemented route file contains route-specific metadata or intentionally inherits root metadata.
- [x] Behavior validation: run `npm.cmd run lint` and verify each route exposes unique title/description metadata in local or production HTML.

### SEO Chunk 3: Crawlability Files

Goal: create machine-readable crawl instructions for search engines.

- [x] Create `src/app/sitemap.ts`.
- [x] Generate entries for `/`, `/projects`, `/experience`, `/skills`, and `/contact`.
- [x] Include `lastModified`, `changeFrequency`, and `priority` only if they are maintainable and accurate.
- [x] Create `src/app/robots.ts`.
- [x] Allow normal crawling for the production site.
- [x] Reference the sitemap URL from `robots.ts`.
- [x] Creation validation: confirm `src/app/sitemap.ts` and `src/app/robots.ts` exist.
- [x] Behavior validation: run `npm.cmd run build`, then verify `/sitemap.xml` and `/robots.txt` work locally or on production after deployment.

### SEO Chunk 4: Structured Data

Goal: help search engines understand the portfolio as a real person/profile website.

- [x] Create a small reusable JSON-LD helper or component, for example `src/components/seo/json-ld.tsx`.
- [x] Add `Person` JSON-LD using verified profile data only.
- [x] Add `WebSite` JSON-LD for the portfolio.
- [x] Include `name`, `jobTitle`, `email`, `url`, `image`, `sameAs`, and location only when accurate.
- [x] Render the JSON-LD from the homepage or root layout depending on the scope.
- [x] Do not invent awards, employers, credentials, ratings, or metrics in structured data.
- [x] Creation validation: confirm the JSON-LD helper/component exists and is rendered by the intended route/layout.
- [x] Behavior validation: inspect local build/page source for `application/ld+json`.

### SEO Chunk 5: Social Preview Image

Goal: make the portfolio look intentional when shared on LinkedIn, Discord, Messenger, X/Twitter, and similar platforms.

- [x] Create `src/app/opengraph-image.png` or `src/app/opengraph-image.tsx`.
- [x] Keep the preview aligned with the black-and-white technical visual direction.
- [x] Include readable identity text such as `Francis Emil M. Cortez` and `Full Stack Developer`.
- [x] Configure metadata to use the OG image if Next.js does not pick it up automatically.
- [x] Add or reuse the image for Twitter card metadata.
- [x] Creation validation: confirm `src/app/opengraph-image.*` exists.
- [x] Behavior validation: inspect metadata after build and confirm `/opengraph-image` is generated.

### SEO Chunk 6: Content and Internal Linking

Goal: make important content crawlable, specific, and easy for users/search engines to follow.

- [x] Review all current page headings and ensure each route has one clear page-level `h1`.
- [x] Improve project copy where it is thin: problem, role, stack, implementation, result, and links.
- [x] Replace any placeholder/generic links, especially project live links that point to unrelated destinations.
- [x] Add contextual internal links between home, projects, skills, experience, and contact where useful.
- [ ] Consider adding crawlable project detail routes such as `/projects/twitch-insights` if individual project SEO matters.
- [x] Fill `README.md` with overview, environment setup, commands, deployment notes, and SEO maintenance notes.
- [x] Creation validation: confirm edited content appears in the route components/data files and any new project route files exist if created.
- [x] Behavior validation: inspect rendered pages to ensure important content is visible without relying only on client-selected state.

### SEO Chunk 7: Performance and Indexing Quality

Goal: keep search visibility from being weakened by slow pages, oversized assets, or avoidable indexing problems.

- [x] Revisit `ProjectDetail` image usage and remove `unoptimized` unless a deployment/image constraint requires it.
- [ ] Compress large public images while preserving screenshot readability.
- [x] Confirm meaningful images keep useful `alt` text.
- [x] Confirm static contact links remain visible even if the Web3Forms key is missing.
- [ ] Check for console errors and hydration warnings in production.
- [ ] Run Lighthouse/PageSpeed against the deployed site.
- [x] Creation validation: confirm image and component changes exist in the relevant files.
- [x] Behavior validation: run `npm.cmd run build` and confirm the optimized production build succeeds.

### SEO Chunk 8: Search Console and Post-Deployment Validation

Goal: verify the deployed result with external indexing tools.

- [ ] Deploy the SEO changes to Vercel.
- [ ] Open the production homepage and all implemented routes.
- [ ] Verify `/sitemap.xml`.
- [ ] Verify `/robots.txt`.
- [ ] Submit the sitemap in Google Search Console.
- [ ] Request indexing for the homepage and important routes.
- [ ] Check Google Search Console for coverage, indexing, mobile usability, and enhancement warnings.
- [ ] Creation validation: confirm the deployed production site exposes the new SEO files and metadata.
- [ ] Behavior validation: confirm Google Search Console accepts the sitemap and does not report blocking crawl/indexing issues.

## Development Commands

Use these commands from the repository root:

```bash
npm run dev
npm run build
npm run lint
```

On Windows PowerShell, `npm` may be blocked by script execution policy because it resolves to `npm.ps1`. If that happens, use:

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Run `npm run lint` after code changes when practical. Run `npm run build` for larger structural changes or before considering the implementation complete.

## Agent Working Rules

- Respect the black-and-white Next.js-inspired direction unless the user changes it.
- Ask for real personal information only when needed; otherwise use obvious placeholders.
- Keep changes focused on the portfolio website.
- Do not add unnecessary dependencies.
- Preserve TypeScript strictness.
- Prefer Tailwind utility classes consistent with the existing setup.
- Keep the UI responsive from the first implementation pass.
- Avoid unrelated cleanup or refactors unless required for the requested change.
- Be careful with the current dirty worktree; do not revert user changes.

## Project Progress Plan

Use this checklist as the implementation tracker. Mark completed work with `[x]` only after the validation item for that phase passes.

### Phase 0: Planning and Context

- [x] Analyze the initial Next.js codebase.
- [x] Create the initial `AGENTS.md` project context.
- [x] Define the portfolio direction as dark-first, black-and-white, Next.js-inspired, and multi-page.
- [x] Decide to use editable placeholder content where real content is unavailable.
- [x] Decide to use Web3Forms for the working contact form.
- [x] Validation: `AGENTS.md` contains the project context, design direction, implementation rules, and this phase-based progress plan.

### Phase 1: Foundation and Global Shell

- [x] Replace the default starter homepage entry with a real portfolio entry point.
- [x] Update `src/app/layout.tsx` metadata from `Create Next App` to portfolio metadata.
- [x] Update `src/app/globals.css` for the dark-first black, white, zinc, and restrained blue palette.
- [x] Keep Geist and Geist Mono as the site fonts.
- [x] Add accessible global focus, selection, background, foreground, and reduced-motion styling.
- [x] Ensure the body and root layout support full-height pages.
- [x] Add shared loading UI through `src/app/loading.tsx`, `LoadingScreen`, and `BootLoader`.
- [x] Add a custom `src/app/not-found.tsx`.
- [x] Validation: `npm.cmd run lint` passes.

### Phase 2: Portfolio Data Model

- [x] Add a typed portfolio data module for editable content.
- [x] Include editable profile fields: name, role, location, email, resume link, and profile image metadata.
- [x] Include navigation items for Home, Projects, Experience, Skills, and Contact.
- [x] Include social/contact links for email, GitHub, and LinkedIn.
- [x] Social/contact links include icon metadata and render through `react-icons`.
- [x] Include project, service, experience, education, and skills content.
- [x] Avoid invented real employers, schools, awards, metrics, or credentials.
- [x] Validation: implemented components import centralized data without TypeScript or lint errors.

### Phase 3: Shared Sidebar Navigation Layout

- [x] Build a shared site shell with a desktop left sidebar and mobile hamburger-triggered sidebar.
- [x] Desktop layout allocates a constrained 20% sidebar column and remaining main content column.
- [x] Sidebar is full-height on desktop and split into two main bordered divs: profile information and routes.
- [x] Top information div includes profile image, name, role, location, resume link, theme toggle, and icon external links.
- [x] Bottom routes div includes navigation links and current route styling.
- [x] The two sidebar divs each have a thin zinc-style border, with no border on their parent wrapper.
- [x] Sidebar parent does not use independent page-level scroll behavior.
- [x] Mobile navigation uses a hamburger button to open and close the sidebar drawer.
- [x] Mobile sidebar includes the same profile details and navigation as desktop.
- [x] Use semantic elements such as `aside`, `nav`, `header`, and `main`.
- [x] Validation: `npm.cmd run lint` passes.

### Phase 4: Core Pages

- [x] Create `src/components/pages` and keep App Router page files as thin wrappers.
- [x] Implement `/` as the homepage with identity, short intro, animated role label, and links to work/contact.
- [x] Implement `/projects` as a projects split-panel layout, separating list and detail views, with static project screenshots.
- [x] Implement `/skills` with grouped technical skills and tools.
- [x] Implement `/experience` with timeline/role entries and education.
- [x] Implement `/contact` with contact copy, static contact links, and the working Web3Forms contact form.
- [x] Validation: each route loads independently, navigation links route correctly, and headings follow a logical hierarchy.

### Phase 5: Web3Forms Contact Form

- [x] Add `.env.example` documenting `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [x] Build the form with fields for name, email, subject, and message.
- [x] Submit to `https://api.web3forms.com/submit` with client-side `fetch` so the user stays on the contact page.
- [x] Include the `access_key` from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the Web3Forms request payload.
- [x] Include Web3Forms honeypot spam protection with a hidden `botcheck` field.
- [x] If the access key is missing, render a clear disabled or configuration-needed state.
- [x] Keep the contact form dependency-free.
- [x] Validation: with an access key set, the form posts to Web3Forms; without an access key, the UI does not silently fail.

### Phase 6: Visual Polish and Accessibility

- [x] Apply a dark-first visual system using black backgrounds, white text, zinc gray borders, and restrained blue accent states.
- [x] Add light theme support without changing the portfolio's primary dark-first direction.
- [x] Use `font-mono` for metadata, small labels, animated role text, and route labels.
- [x] Keep corners square or absent in the current shell.
- [x] Avoid colorful gradients, decorative blobs, loud accents, and heavy visual effects.
- [x] Ensure the current profile and project images have useful `alt` text.
- [x] Ensure current links and buttons inherit visible global focus states.
- [x] Optimize initial load times by removing long artificial boot loading delays.
- [x] Manually verify common desktop and mobile viewport sizes.
- [x] Validation: pages meet the black-and-white direction, remain readable at common viewport sizes, and preserve strong contrast.

### Phase 7: Final Verification

- [x] Run `npm.cmd run lint` successfully.
- [x] Run `npm run build` or `npm.cmd run build`.
- [x] Manually verify desktop sidebar behavior.
- [x] Manually verify mobile hamburger sidebar behavior.
- [x] Manually verify there is no horizontal scrolling.
- [x] Manually verify all implemented routes render.
- [x] Manually verify contact form configured and unconfigured states.
- [x] Remove or stop referencing unused starter assets if they are no longer needed.
- [x] Validation: lint and build pass, all routes render, and the implementation matches this plan.

### Phase 8: Deployment

- [x] Connect the GitHub repository to Vercel.
- [x] Configure environment variables in Vercel dashboard, including `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [x] Deploy the portfolio to Vercel via GitHub integration.
- [x] Verify the production build renders correctly on the Vercel domain.
- [x] Test contact form submission on the live site.
- [x] Validation: the portfolio is live, accessible, and fully functional on Vercel.

### Phase 9: SEO Improvement

- [x] Complete SEO Chunk 0: Baseline Audit.
- [ ] Complete SEO Chunk 1: Site URL and Root Metadata.
- [x] Complete SEO Chunk 2: Route-Level Metadata.
- [x] Complete SEO Chunk 3: Crawlability Files.
- [x] Complete SEO Chunk 4: Structured Data.
- [x] Complete SEO Chunk 5: Social Preview Image.
- [ ] Complete SEO Chunk 6: Content and Internal Linking.
- [ ] Complete SEO Chunk 7: Performance and Indexing Quality.
- [ ] Complete SEO Chunk 8: Search Console and Post-Deployment Validation.
- [ ] Validation: each SEO chunk has both creation validation and behavior validation checked before being marked complete.
