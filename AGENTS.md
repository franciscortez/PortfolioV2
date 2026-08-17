# AGENTS.md

## Project Overview

Personal portfolio website for Francis Emil M. Cortez built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

Design aesthetic: minimal, black-and-white, sharp, technical, inspired by the Next.js visual direction.

---

## Core Guidelines

1. **Routing & Pages**:
   - `src/app/**/page.tsx` are thin route wrappers exporting metadata and importing page components from `@/components/pages`.
   - Real page UI lives in `src/components/pages/*-page.tsx` and re-exports from `src/components/pages/index.ts`.
   - Server Components by default; `"use client"` only when client state/events are needed.

2. **Data & Content**:
   - Centralize editable portfolio content in `src/data/` (`portfolio.ts`, `project.ts`, `experience.ts`, `skills.ts`, `icons.ts`).
   - Do not invent credentials, awards, or employers.

3. **Visual Style**:
   - Palette: Black background (`#000`), neutral zinc borders (`border-zinc-800`), white text (`#fff`), restrained blue accent for hover/active states.
   - Fonts: Geist Sans for UI body, Geist Mono for tags, dates, and metadata labels.

4. **Quality & Formatting**:
   - Code auto-formats via Prettier and runs targeted tests on file edits via lifecycle hooks.
   - Always verify changes with `npm test`, `npm run lint`, and `npm run format:check`.

5. **AI Safety & Commits**:
   - `PreToolUse` hooks strictly block pushes, block uninstructed commits (`ALLOW_GIT_COMMIT=1` / `--allow-commit` to permit), block `package.json` package mutations, block `.env` secrets staging, and block destructive git operations.
   - Keep commits minimal and use caveman commit style (e.g. `feat: add auto test hook`).

---

## Documentation

Detailed references are modularized in `docs/`:

- [Architecture, Folder Structure & Layout](docs/ARCHITECTURE.md)
- [Workflow, Commands, Hooks & SEO](docs/WORKFLOW.md)
