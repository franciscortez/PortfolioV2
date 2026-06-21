# AGENTS.md

## Project Context

This is a personal portfolio website built with Next.js App Router.

The project is currently close to a fresh `create-next-app` baseline. The visible app lives in `src/app`, uses Tailwind CSS v4 through `globals.css`, and has the standard starter homepage in `src/app/page.tsx`. Future work should replace the starter content with a polished black-and-white portfolio experience.

## Current Stack

- Framework: Next.js 16 App Router
- Runtime UI: React 19
- Language: TypeScript with `strict` enabled
- Styling: Tailwind CSS v4 via `@import "tailwindcss"`
- Fonts: Geist and Geist Mono from `next/font/google`
- Linting: ESLint 9 with `eslint-config-next`
- Path alias: `@/*` maps to `./src/*`
- React Compiler: enabled in `next.config.ts`

## Important Files

- `src/app/layout.tsx`: Root HTML, Geist font setup, metadata, and body shell.
- `src/app/page.tsx`: Current starter homepage. Replace this with the portfolio layout.
- `src/app/globals.css`: Tailwind import, theme tokens, global background and foreground colors.
- `public/`: Currently contains default Next/Vercel SVG assets. Add portfolio images here only when they are static public assets.
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

Use black, white, and neutral zinc/stone grays as the main palette. Avoid colorful gradients, decorative blobs, loud accent colors, and heavy visual effects unless the user explicitly asks for them.

## Layout Direction

The primary layout should include a persistent sidebar for identity and navigation.

Expected sidebar content:

- Top information div:
  - Profile picture or avatar area
  - Name
  - Role/title
  - Location
  - Resume link or resume button
  - Optional external links such as GitHub, LinkedIn, email, or resume when the user provides them
  - External links should render as icon buttons instead of text labels
- Bottom routes div:
  - Navigation links for the portfolio sections
  - Current route or active link styling where practical

The user will provide exact personal details later. Until then, use clear placeholders that are easy to replace.

Recommended navigation sections:

- Home
- About
- Projects
- Services
- Experience
- Skills
- Contact

Desktop behavior:

- Sidebar should sit on the left and remain visible as the static details/navigation column.
- Sidebar should use 20% of the desktop viewport width.
- Main content should use the remaining 80% of the desktop viewport width.
- Sidebar should be `height: 100%` or viewport-height/full-height equivalent.
- Sidebar content should be split into two main divs: top information and bottom routes.
- The sidebar itself must not have independent scroll behavior such as `overflow-y-auto`.
- The top information div and bottom routes div should each have their own border.
- Do not put the border on the parent wrapper of the two sidebar containers.
- Sidebar may be sticky only if it preserves the 20% / 80% layout, does not overlap content, and scrolls with the page once the main content reaches the bottom.
- Keep spacing tight and structured, similar to modern documentation/product sites.

Mobile behavior:

- Do not force the full sidebar to stay visible on small screens.
- Use a hamburger button to open and close the sidebar on mobile.
- The mobile sidebar should behave like an overlay or drawer and must include the same profile details, resume link, icon links, and navigation.
- Content must remain readable without horizontal scrolling while the sidebar is closed.

## Visual Guidelines

- Prefer a black background with white text by default, with white or zinc panels used intentionally.
- Keep the site strictly black, white, and neutral gray.
- Use thin borders such as `border-zinc-200` or `border-zinc-800`.
- Prefer square or small-radius corners. Use `rounded-md` or lower unless there is a strong reason.
- Use typography hierarchy instead of decoration.
- Use `font-sans` for most text and `font-mono` for small metadata, labels, dates, and technical tags.
- Avoid oversized hero marketing copy. This is a portfolio, so the first screen should quickly show identity and work context.
- Keep animations subtle: opacity, transform, or border/background transitions are enough.

## Implementation Guidelines

- Keep components small and portfolio-specific.
- Prefer server components by default. Add `"use client"` only for interactivity that needs client state or browser APIs.
- The mobile hamburger sidebar toggle is an acceptable reason to use a small client component.
- Use `next/image` for profile photos and project images.
- Use `react-icons` for sidebar/social icons instead of hand-written SVG.
- Keep shared icon imports and icon-name mappings in `src/data/icons.ts`.
- Use semantic HTML: `aside`, `nav`, `main`, `section`, `header`, `article`, and proper headings.
- Keep portfolio data easy to edit. If content grows, move repeated data into typed arrays or objects under `src/lib`, `src/data`, or a local module near the page.
- Maintain accessibility:
  - All images need meaningful `alt` text unless decorative.
  - Navigation links should have clear labels.
  - Text contrast must remain strong.
  - Interactive elements need visible focus states.
- Do not introduce a component library unless the project clearly needs it.

## Suggested Future Structure

The project is small, so avoid over-structuring early. A reasonable next structure is:

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      sidebar.tsx
    sections/
      hero-section.tsx
      about-section.tsx
      projects-section.tsx
      services-section.tsx
      experience-section.tsx
      contact-section.tsx
  data/
    portfolio.ts
```

Only create these files when they are useful. For the first implementation pass, it is acceptable to keep the layout in `page.tsx` if the code remains readable.

## Content Placeholders

Until real user content is available, use placeholders like:

- Name: `Your Name`
- Role: `Frontend Developer`
- Location: `Location`
- Email: `your.email@example.com`
- Bio: short, direct copy that is easy to replace
- Projects: 2-4 sample project cards with neutral descriptions
- Services: 3-4 placeholder services with clear offer-focused descriptions

Do not invent specific real credentials, employers, schools, awards, or metrics for the user.

## Development Commands

Use these commands from the repository root:

```bash
npm run dev
npm run build
npm run lint
```

Run `npm run lint` after code changes when practical. Run `npm run build` for larger structural changes or before considering the implementation complete.

## Current Codebase Notes

- The current homepage is still the default Next.js starter and should be replaced.
- The current metadata in `layout.tsx` is still `Create Next App`; update it when building the real portfolio.
- Global CSS currently defines `--background` and `--foreground`, with a dark-mode media query. Keep or revise these tokens to support the black-and-white direction.
- Default public SVGs are unused portfolio assets and can be removed later if they are no longer referenced.

## Agent Working Rules

- Respect the black-and-white Next.js-inspired direction unless the user changes it.
- Ask for real personal information only when needed; otherwise use obvious placeholders.
- Keep changes focused on the portfolio website.
- Do not add unnecessary dependencies.
- Preserve TypeScript strictness.
- Prefer Tailwind utility classes consistent with the existing setup.
- Keep the UI responsive from the first implementation pass.
- Avoid unrelated cleanup or refactors unless required for the requested change.

## Project Progress Plan

Use this checklist as the implementation tracker. Finish and validate each phase before moving to the next phase. Mark completed work with `[x]` only after the validation item for that phase passes.

### Phase 0: Planning and Context

- [x] Analyze the current Next.js codebase.
- [x] Create the initial `AGENTS.md` project context.
- [x] Define the portfolio direction as dark-first, black-and-white, Next.js-inspired, and multi-page.
- [x] Decide to use placeholder content until real identity, project, and contact details are provided.
- [x] Decide to include Services as a core page for offers provided by the portfolio owner.
- [x] Decide to use Web3Forms for the working contact form.
- [x] Validation: `AGENTS.md` contains the project context, design direction, implementation rules, and this phase-based progress plan.

### Phase 1: Foundation and Global Shell

- [x] Replace the current empty homepage shell with a real portfolio entry point.
- [x] Update `src/app/layout.tsx` metadata from `Create Next App` to portfolio placeholder metadata.
- [x] Update `src/app/globals.css` for the dark-first black, white, and zinc palette.
- [x] Keep Geist and Geist Mono as the site fonts.
- [x] Add accessible global focus, selection, background, and foreground styling.
- [x] Ensure the body and root layout support full-height pages.
- [x] Validation: `npm run lint` passes and the app renders a dark-first base layout without horizontal overflow.

### Phase 2: Portfolio Data Model

- [x] Add a typed portfolio data module for placeholder content.
- [x] Include editable profile fields: name, role, location, email, resume link, and profile image placeholder metadata.
- [x] Include navigation items for Home, About, Projects, Services, Experience, Skills, and Contact.
- [x] Include placeholder social/contact links such as email, GitHub, LinkedIn, and a resume link.
- [x] Social/contact links include icon metadata and render through `react-icons`.
- [x] Include placeholder projects, services, experience entries, and skills grouped by category.
- [x] Do not invent real employers, schools, awards, metrics, or credentials.
- [x] Validation: page components can import the data without TypeScript errors or duplicated hardcoded content.

### Phase 3: Shared Sidebar Navigation Layout

- [x] Build a shared site layout with a static desktop left sidebar and mobile hamburger-triggered sidebar.
- [x] Desktop layout must allocate 20% width to the sidebar and 80% width to the main content.
- [x] Sidebar must be full-height and split into two main divs: a top information div and a bottom routes div.
- [x] Top information div must include profile image placeholder, name, role, location, resume link/button, and optional icon external links.
- [x] Bottom routes div must include the navigation links and current route or active link styling where practical.
- [x] The two sidebar divs should each have a thin zinc border, with no border on their parent wrapper.
- [x] Sidebar should not use independent scroll behavior.
- [x] Mobile navigation must use a hamburger button to open and close the sidebar drawer or overlay.
- [x] Mobile sidebar must include the same details and navigation as desktop.
- [x] Use semantic elements such as `aside`, `nav`, and `main`.
- [x] Add visible active or current-page treatment for navigation links where practical.
- [x] Validation: desktop and mobile layouts are readable, navigable, and do not overlap or clip content.

### Phase 4: Core Pages

- [ ] Implement `/` as the homepage with identity, short intro, and previews linking to major pages.
- [ ] Implement `/about` with placeholder biography, working style, and personal context sections.
- [ ] Implement `/projects` as a projects index with placeholder project cards only; do not add dynamic detail routes yet.
- [ ] Implement `/services` with placeholder service offerings, deliverables, and contact call-to-action.
- [ ] Implement `/experience` with placeholder timeline or role entries.
- [ ] Implement `/skills` with grouped technical skills and tools.
- [ ] Implement `/contact` with contact copy, static contact links, and the working Web3Forms contact form.
- [ ] Validation: each route loads independently, navigation links route correctly, and headings follow a logical hierarchy.

### Phase 5: Web3Forms Contact Form

- [ ] Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as the contact form access key variable.
- [ ] Add `.env.example` documenting the Web3Forms access key.
- [ ] Build the form with fields for name, email, subject, and message.
- [ ] Submit via standard HTML `method="POST"` to `https://api.web3forms.com/submit`.
- [ ] Include the hidden `access_key` input using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- [ ] Include Web3Forms honeypot spam protection with a hidden `botcheck` field.
- [ ] If the access key is missing, render a clear disabled or configuration-needed state.
- [ ] Keep the contact form dependency-free.
- [ ] Validation: with an access key set, the form posts to Web3Forms; without an access key, the UI does not silently fail.

### Phase 6: Visual Polish and Accessibility

- [ ] Apply a consistent dark-first visual system using black backgrounds, white text, zinc gray borders, and restrained spacing.
- [ ] Use `font-mono` for metadata, small labels, dates, and technical tags.
- [ ] Keep corners square or small-radius, using `rounded-md` or lower.
- [ ] Avoid colorful gradients, decorative blobs, loud accents, and unnecessary animation.
- [ ] Ensure all meaningful images have useful `alt` text.
- [ ] Ensure links and form controls have visible focus states.
- [ ] Validation: pages meet the black-and-white direction, remain readable at common viewport sizes, and preserve strong contrast.

### Phase 7: Final Verification

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Manually verify desktop sidebar behavior.
- [ ] Manually verify mobile hamburger sidebar behavior.
- [ ] Manually verify there is no horizontal scrolling.
- [ ] Manually verify the contact form configured and unconfigured states.
- [ ] Remove or stop referencing unused starter assets if they are no longer needed.
- [ ] Validation: lint and build pass, all routes render, and the implementation matches this plan.
