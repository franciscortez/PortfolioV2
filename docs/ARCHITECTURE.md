# Architecture & Project Structure

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React Compiler enabled
- **UI Runtime**: React 19
- **Language**: TypeScript (`strict` mode)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`)
- **Typography**: Geist Sans & Geist Mono (`next/font/google`)
- **Icons**: `react-icons` (centralized in `src/data/icons.ts`)
- **Theme**: `next-themes` (dark-first, light support)
- **Forms**: Web3Forms client-side integration
- **Formatting & Linting**: Prettier + ESLint 9
- **Testing**: Vitest + React Testing Library (Unit/Component), Playwright (E2E)

---

## Folder Structure

```text
portfolio-v2/
|-- .agents/                  # Antigravity agent configuration
|   |-- hooks/                # Lifecycle hooks (format-hook, safety-guard)
|   `-- hooks.json
|-- .claude/                  # Claude Code configuration
|   |-- hooks/
|   `-- settings.json
|-- .codex/                   # OpenAI Codex configuration
|   |-- hooks/
|   |-- config.toml
|   `-- hooks.json
|-- docs/                     # Project documentation
|   |-- ARCHITECTURE.md
|   `-- WORKFLOW.md
|-- public/                   # Static assets (images, documents)
|   |-- documents/
|   `-- images/
|-- src/
|   |-- app/                  # App Router thin route entries & metadata
|   |   |-- contact/page.tsx
|   |   |-- experience/page.tsx
|   |   |-- projects/page.tsx
|   |   |-- skills/page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   |-- not-found.tsx
|   |   |-- opengraph-image.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- layout/           # Shell, sidebar, mobile drawer, route transitions
|   |   |-- pages/            # Page components (home, projects, experience, skills, contact)
|   |   |-- sections/         # Feature-specific section blocks
|   |   |-- seo/              # JSON-LD and structured data components
|   |   `-- ui/               # Reusable primitives (toast, theme-toggle, animated-role, etc.)
|   |-- data/                 # Centralized content & icon mappings
|   |   |-- experience.ts
|   |   |-- icons.ts
|   |   |-- portfolio.ts
|   |   |-- project.ts
|   |   `-- skills.ts
|   `-- lib/                  # Shared utilities & SEO helpers
|       |-- seo.ts
|       `-- site.ts
|-- tests/                    # Testing suites
|   |-- setup.ts              # Vitest global environment & mocks
|   |-- unit/                 # Vitest unit & component tests
|   |   |-- components/
|   |   |-- data/
|   |   |-- lib/
|   |   `-- pages/
|   `-- e2e/                  # Playwright end-to-end tests
|       |-- contact.spec.ts
|       |-- mobile.spec.ts
|       |-- navigation.spec.ts
|       |-- projects.spec.ts
|       |-- skills.spec.ts
|       `-- theme.spec.ts
|-- .prettierrc
|-- .prettierignore
|-- AGENTS.md
|-- CLAUDE.md
|-- package.json
|-- playwright.config.ts
|-- tsconfig.json
|-- vitest.config.ts
`-- README.md
```

---

## Layout & Component Architecture

### Desktop Layout

- **Site Shell Grid**: `lg:grid-cols-[minmax(15rem,20%)_minmax(0,1fr)]`
- **Persistent Sidebar**: Left sticky column divided into two separately bordered panels:
  1. Profile panel (photo, name, role, location, resume, social links, theme toggle).
  2. Navigation panel (route links with active indicator).
- **Main Content**: Dynamic scroll area rendering the active page.

### Mobile Layout

- Collapsible drawer triggered via mobile hamburger header.
- Mirror desktop sidebar content (profile, links, navigation) in responsive drawer.

### Routing Rules

- `src/app/**/page.tsx`: Thin route wrapper files exporting metadata and importing the corresponding page component from `@/components/pages`.
- Page implementations reside in `src/components/pages/*-page.tsx` and re-export through `src/components/pages/index.ts`.
- Server Components by default; `"use client"` only where client state (hooks, animations, interactive forms) is required.

---

## Design System

- **Palette**: Dark-first default (black `#000`, neutral zinc `#18181b`, `#27272a`, `#71717a`, white `#fff`). Restrained blue accent for interactive states.
- **Borders & Corners**: Subtle zinc borders (`border-border` / `border-zinc-800`), small radius (`rounded-md` or square).
- **Typography**: Clean hierarchy using `font-sans` for main content and `font-mono` for metadata, badges, dates, and technical labels.
