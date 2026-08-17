# Development Workflow & Operations

## Commands

Run from project root:

```bash
npm run dev           # Start Next.js dev server
npm run build         # Build production bundle
npm run lint          # Run ESLint check
npm run format        # Format codebase with Prettier
npm run format:check  # Verify Prettier compliance
npm test              # Run Vitest unit/component tests
npm run test:watch    # Run Vitest in watch mode
npm run test:e2e      # Run Playwright E2E tests
```

_Note for Windows PowerShell users: if execution policy restricts `npm`, use `npm.cmd run <script>`._

---

## AI Agent Restrictions & Safety Guardrails

`PreToolUse` lifecycle hooks intercept agent tool calls and enforce strict safety policies:

- **Git Push Protection**: `git push` is unconditionally blocked. Only the user may push changes.
- **Git Commit Protection**: `git commit` is unconditionally blocked. Only the user may commit changes.
- **Package.json Protection**: Adding/removing dependencies (`npm i <pkg>`, `npm rm <pkg>`, `yarn add`, `pnpm add`) and directly modifying `package.json` / `package-lock.json` via file tools is strictly blocked.
- **Secrets & Environment Files**: Staging/committing `.env`, `.env.local`, `.env.production` is blocked (except `.env.example`).
- **Destructive Git Commands**: `git reset --hard`, `git clean -f`, and forced branch rollbacks are blocked to prevent data loss.
- **Destructive File Operations**: Recursive root deletions (`rm -rf /`, `rm -rf *`) and disk formatting are blocked.

### Guard Hook Locations

- **Antigravity**: `.agents/hooks/safety-guard.mjs` (configured in `.agents/hooks.json`)
- **Claude Code**: `.claude/hooks/safety-guard.mjs` (configured in `.claude/settings.json`)
- **OpenAI Codex**: `.codex/hooks/safety-guard.mjs` (configured in `.codex/hooks.json`)

---

## Multi-Agent Hooks (Formatting & Auto-Testing)

Lifecycle hooks run on `PostToolUse` file edits across AI agents:

### 1. Prettier Auto-Formatter

- **Antigravity**: `.agents/hooks/format-hook.mjs`
- **Claude Code**: `.claude/hooks/format-hook.mjs`
- **OpenAI Codex**: `.codex/hooks/format-hook.mjs`

Formats modified `.ts`, `.tsx`, `.js`, `.jsx`, `.json`, `.css`, and `.md` files automatically.

### 2. Auto-Tester (Targeted Test Execution)

- **Antigravity**: `.agents/hooks/test-hook.mjs`
- **Claude Code**: `.claude/hooks/test-hook.mjs`
- **OpenAI Codex**: `.codex/hooks/test-hook.mjs`

Automatically executes the matching Vitest unit test, Playwright E2E spec, or related tests (`vitest related <file> --run`) based on the modified file.

---

## Commit Guidelines

- **Minimal Frequency**: Do not create excessive micro-commits. Bundle cohesive changes together.
- **Caveman Style**: Use ultra-compressed, direct commit messages with zero filler:
  - `feat: add vitest and playwright suites`
  - `fix: update experience location`
  - `docs: add package.json guardrail to workflow`
  - `chore: format codebase with prettier`

---

## Environment & Configuration

Create `.env` based on `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://francisemilcortez.vercel.app
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

---

## SEO & Metadata Implementation

- **Root Metadata**: Configured with `metadataBase`, Open Graph, Twitter cards, and canonical URL in `src/app/layout.tsx`.
- **Route Metadata**: Each route (`/`, `/projects`, `/experience`, `/skills`, `/contact`) exports dedicated title and description.
- **Sitemap & Robots**: Dynamically generated via `src/app/sitemap.ts` and `src/app/robots.ts`.
- **Structured Data**: JSON-LD `Person` and `WebSite` schemas rendered via `src/components/seo/portfolio-json-ld.tsx`.
- **Social Preview**: Branded image dynamically generated in `src/app/opengraph-image.tsx`.
