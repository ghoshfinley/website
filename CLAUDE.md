# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
```

Deployed to Netlify; builds run `npm run build` and publish `.next/`.

## Stack

Next.js 14 · TypeScript · Tailwind CSS v4

## Architecture

Single-page personal brand site (`pages/index.tsx`) with four scroll sections.

**Section components** (`components/`):
- `Hero.tsx` — full-viewport dark section with canvas node network animation (spawning nodes + teal connection lines via `requestAnimationFrame`) and name/title text
- `About.tsx` — three-paragraph personal bio
- `Work.tsx` — two project cards (CORE, AI Sales Pipeline) in a responsive grid
- `Contact.tsx` — email + LinkedIn links
- `Footer.tsx` — single-line footer

## Design system

- Background: `bg-gray-950` throughout
- Accent: `text-cyan-400` / `border-cyan-400`
- Section label style: `text-xs font-semibold tracking-widest text-cyan-400 uppercase`
- Node network colour: `#22d3ee` (cyan-400)

## Path aliases

`@components/*`, `@styles/*`, `@data/*` — defined in `tsconfig.json`.
