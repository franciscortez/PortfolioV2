# AGENTS.md

## Project Context

This is a personal portfolio website built with the Next.js App Router. The project has moved past the default `create-next-app` starter: the current app has a dark-first portfolio shell, a persistent desktop sidebar, a mobile drawer sidebar, centralized portfolio data, a homepage hero, route loading UI, and a custom 404 page.

The portfolio direction remains black-and-white, restrained, technical, and inspired by the visual discipline of the Next.js website.

## Current Stack

- Framework: Next.js 16 App Router
- Runtime UI: React 19
- Language: TypeScript with `strict` enabled
- Styling: Tailwind CSS v4 via `@import "tailwindcss"`
- Fonts: Geist and Geist Mono from `next/font/google`
- Linting: ESLint 9 with `eslint-config-next`
- Icons: `react-icons`
- Path alias: `@/*` maps to `./src/*`
- React Compiler: enabled in `next.config.ts`

## Current Implementation Snapshot

- The root layout in `src/app/layout.tsx` wraps all routes with `SiteShell`.
- `src/app/page.tsx` is a thin route entry that renders `HomePage` from `@/components/pages`.
- The only implemented real page route is `/`.
- Navigation data already includes `/projects`, `/services`, `/experience`, `/skills`, and `/contact`, but those route files and page components do not exist yet. Those links currently resolve to the app 404 until implemented.
- `src/app/loading.tsx` renders the shared loading screen.
- `src/app/not-found.tsx` renders a dark custom 404 page.
- Portfolio data is centralized in `src/data/portfolio.ts`.
- Icon mappings are centralized in `src/data/icons.ts`.
- Public assets currently include:
  - `public/images/profile/profile-2x2.jpeg`
  - `public/documents/resume.pdf`
  - empty `public/images/projects/` directory
- `.env.example` already contains `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=`, but the contact form has not been implemented.

## Important Files

- `src/app/layout.tsx`: Root HTML, Geist font setup, metadata, and global `SiteShell` wrapper.
- `src/app/page.tsx`: Thin home route entry.
- `src/app/loading.tsx`: Route loading UI using `LoadingScreen`.
- `src/app/not-found.tsx`: Custom 404 page.
- `src/app/globals.css`: Tailwind import, dark theme tokens, global focus/selection styles, loading animations, and `scrollbar-hidden`.
- `src/components/layout/site-shell.tsx`: Root shell combining the boot loader, mobile sidebar, desktop sidebar, and main content.
- `src/components/layout/sidebar.tsx`: Desktop/sidebar drawer content, profile block, external icon links, resume button, and active navigation.
- `src/components/layout/mobile-sidebar.tsx`: Client-side hamburger and drawer state.
- `src/components/layout/main-shell.tsx`: Main content wrapper.
- `src/components/pages/home-page.tsx`: Home page component.
- `src/components/pages/index.ts`: Central page exports.
- `src/components/sections/hero-section.tsx`: Current homepage hero.
- `src/components/ui/animated-role.tsx`: Client-side animated role label.
- `src/components/ui/boot-loader.tsx`: Client-side initial load overlay.
- `src/components/ui/loading-screen.tsx`: Shared loading screen component.
- `src/data/portfolio.ts`: Editable profile, navigation, external links, projects, services, experience, skills, and build notes.
- `src/data/icons.ts`: Shared icon import and mapping.
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

Some real personal details are now present in `src/data/portfolio.ts`:

- Name: `Francis Emil M. Cortez`
- Role: `Full Stack Developer`
- Location: `Pampanga, Philippines`
- Email: `francisemil.cortez@gmail.com`
- GitHub: `https://github.com/franciscortez`
- LinkedIn: `https://www.linkedin.com/in/francisemilcortez/`
- Resume: `/documents/resume.pdf`
- Profile image: `/images/profile/profile-2x2.jpeg`

Do not invent additional real credentials, employers, schools, awards, or metrics. Placeholder project/service/experience/skill content may be used until the user provides exact details.

## Layout Direction

The primary layout uses a persistent sidebar for identity and navigation.

Desktop behavior:

- Sidebar sits on the left and remains visible as the static details/navigation column.
- `SiteShell` uses `lg:grid-cols-[20%_80%]`.
- Main content uses the remaining 80% of the desktop viewport width.
- Sidebar is split into two bordered divs: profile information and routes.
- The sidebar parent should not receive the border; the profile and route containers each own their own border.
- The sidebar itself should not have independent scroll behavior.
- Keep spacing tight and structured, similar to modern documentation/product sites.

Mobile behavior:

- Do not force the full sidebar to stay visible on small screens.
- Use the existing hamburger button in `MobileSidebar` to open and close the drawer.
- The mobile drawer should include the same profile details, resume link, icon links, and navigation.
- Content must remain readable without horizontal scrolling while the sidebar is closed.

## Visual Guidelines

- Prefer a black background with white text by default, with zinc panels used intentionally.
- Keep the site primarily black, white, and neutral gray, with blue reserved for deliberate hover and active states.
- Use thin borders such as `border-border`, `border-zinc-800`, or equivalent.
- Prefer square or small-radius corners. Use `rounded-md` or lower unless there is a strong reason.
- Use typography hierarchy instead of decoration.
- Use `font-sans` for most text and `font-mono` for small metadata, labels, dates, and technical tags.
- Avoid oversized hero marketing copy. This is a portfolio, so the first screen should quickly show identity and work context.
- Keep animations subtle: opacity, transform, border/background transitions, and restrained loading/role animation are acceptable.

## Implementation Guidelines

- Keep components small and portfolio-specific.
- Prefer server components by default. Add `"use client"` only for interactivity that needs client state or browser APIs.
- Existing client components are justified for mobile drawer state, active route detection, animated role text, and boot loading behavior.
- Use `next/image` for profile photos and future project images.
- Use `react-icons` for sidebar/social icons instead of hand-written SVG.
- Keep shared icon imports and icon-name mappings in `src/data/icons.ts`.
- Use semantic HTML: `aside`, `nav`, `main`, `section`, `header`, `article`, and proper headings.
- Keep portfolio data easy to edit in `src/data/portfolio.ts` unless content grows enough to justify splitting it.
- Keep `src/app/**/page.tsx` files thin. Route files should import page components from `@/components/pages`.
- Centralize page exports in `src/components/pages/index.ts`.
- Maintain accessibility:
  - All meaningful images need useful `alt` text.
  - Navigation links should have clear labels.
  - Text contrast must remain strong.
  - Interactive elements need visible focus states.
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
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   |-- not-found.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- layout/
|   |   |   |-- main-shell.tsx
|   |   |   |-- mobile-sidebar.tsx
|   |   |   |-- sidebar.tsx
|   |   |   `-- site-shell.tsx
|   |   |-- pages/
|   |   |   |-- home-page.tsx
|   |   |   `-- index.ts
|   |   |-- sections/
|   |   |   `-- hero-section.tsx
|   |   `-- ui/
|   |       |-- animated-role.tsx
|   |       |-- boot-loader.tsx
|   |       `-- loading-screen.tsx
|   `-- data/
|       |-- icons.ts
|       `-- portfolio.ts
|-- .env.example
|-- .gitignore
|-- AGENTS.md
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

## Target Folder Additions

Future work should add these missing routes and components as the portfolio grows:

```text
src/app/projects/page.tsx
src/app/services/page.tsx
src/app/experience/page.tsx
src/app/skills/page.tsx
src/app/contact/page.tsx

src/components/pages/projects-page.tsx
src/components/pages/services-page.tsx
src/components/pages/experience-page.tsx
src/components/pages/skills-page.tsx
src/components/pages/contact-page.tsx

src/components/sections/project-card.tsx
src/components/sections/service-card.tsx
src/components/sections/experience-timeline.tsx
src/components/sections/skills-grid.tsx
src/components/sections/contact-form.tsx
```

Routing rule:

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
- [x] Decide to include Services as a core page for offers provided by the portfolio owner.
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
- [x] Validation: `npm.cmd run lint` passes as of 2026-06-22.

### Phase 2: Portfolio Data Model

- [x] Add a typed portfolio data module for editable content.
- [x] Include editable profile fields: name, role, location, email, resume link, and profile image metadata.
- [x] Include navigation items for Home, Projects, Services, Experience, Skills, and Contact.
- [x] Include social/contact links for email, GitHub, and LinkedIn.
- [x] Social/contact links include icon metadata and render through `react-icons`.
- [x] Include placeholder projects, services, experience entries, and skills grouped by category.
- [x] Avoid invented real employers, schools, awards, metrics, or credentials.
- [x] Validation: implemented components import centralized data without TypeScript or lint errors.

### Phase 3: Shared Sidebar Navigation Layout

- [x] Build a shared site shell with a desktop left sidebar and mobile hamburger-triggered sidebar.
- [x] Desktop layout allocates 20% width to the sidebar and 80% width to the main content.
- [x] Sidebar is full-height on desktop and split into two main bordered divs: profile information and routes.
- [x] Top information div includes profile image, name, role, location, resume link, and icon external links.
- [x] Bottom routes div includes navigation links and current route styling.
- [x] The two sidebar divs each have a thin zinc-style border, with no border on their parent wrapper.
- [x] Sidebar parent does not use independent scroll behavior.
- [x] Mobile navigation uses a hamburger button to open and close the sidebar drawer.
- [x] Mobile sidebar includes the same profile details and navigation as desktop.
- [x] Use semantic elements such as `aside`, `nav`, `header`, and `main`.
- [x] Validation: `npm.cmd run lint` passes.

### Phase 4: Core Pages

- [x] Create `src/components/pages` and keep the home App Router page file as a thin wrapper.
- [x] Implement `/` as the homepage with identity, short intro, animated role label, and links to work/contact.
- [ ] Implement `/projects` as a projects index with placeholder project cards only; do not add dynamic detail routes yet.
- [ ] Implement `/services` with service offerings, deliverables, and contact call-to-action.
- [ ] Implement `/experience` with timeline or role entries.
- [ ] Implement `/skills` with grouped technical skills and tools.
- [ ] Implement `/contact` with contact copy, static contact links, and the working Web3Forms contact form.
- [ ] Validation: each route loads independently, navigation links route correctly, and headings follow a logical hierarchy.

### Phase 5: Web3Forms Contact Form

- [x] Add `.env.example` documenting `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [ ] Build the form with fields for name, email, subject, and message.
- [ ] Submit via standard HTML `method="POST"` to `https://api.web3forms.com/submit`.
- [ ] Include the hidden `access_key` input using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [ ] Include Web3Forms honeypot spam protection with a hidden `botcheck` field.
- [ ] If the access key is missing, render a clear disabled or configuration-needed state.
- [ ] Keep the contact form dependency-free.
- [ ] Validation: with an access key set, the form posts to Web3Forms; without an access key, the UI does not silently fail.

### Phase 6: Visual Polish and Accessibility

- [x] Apply a dark-first visual system using black backgrounds, white text, zinc gray borders, and restrained blue accent states.
- [x] Use `font-mono` for metadata, small labels, animated role text, and route labels.
- [x] Keep corners square or absent in the current shell.
- [x] Avoid colorful gradients, decorative blobs, loud accents, and heavy visual effects.
- [x] Ensure the current profile image has useful `alt` text.
- [x] Ensure current links and buttons inherit visible global focus states.
- [ ] Manually verify common desktop and mobile viewport sizes.
- [ ] Validation: pages meet the black-and-white direction, remain readable at common viewport sizes, and preserve strong contrast.

### Phase 7: Final Verification

- [x] Run `npm.cmd run lint` successfully after the current foundation/sidebar/home implementation.
- [ ] Run `npm run build` or `npm.cmd run build`.
- [ ] Manually verify desktop sidebar behavior.
- [ ] Manually verify mobile hamburger sidebar behavior.
- [ ] Manually verify there is no horizontal scrolling.
- [ ] Manually verify all implemented routes render.
- [ ] Manually verify contact form configured and unconfigured states after the contact form is implemented.
- [ ] Remove or stop referencing unused starter assets if they are no longer needed.
- [ ] Validation: lint and build pass, all routes render, and the implementation matches this plan.

### Phase 8: Deployment

- [ ] Connect the GitHub repository to Vercel.
- [ ] Configure environment variables in Vercel dashboard, including `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [ ] Deploy the portfolio to Vercel via GitHub integration.
- [ ] Verify the production build renders correctly on the Vercel domain.
- [ ] Test contact form submission on the live site.
- [ ] Validation: the portfolio is live, accessible, and fully functional on Vercel.
