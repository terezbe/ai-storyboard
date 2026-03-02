# AI Storyboard

## Project Overview
A React + TypeScript storyboard editor for video productions. Users import JSON storyboards, generate AI images/videos for each shot, and export the result.

## Tech Stack
- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **State:** Zustand (persisted to IndexedDB via Dexie)
- **Routing:** React Router v6
- **i18n:** react-i18next (EN + HE with RTL support)
- **AI Generation:** FAL.ai via Vite dev proxy (no SDK, plain fetch)

## Architecture

### Generation Pipeline
```
UI (buttons/hooks) → useGeneration hook → generation-service → provider-registry → FalProvider → /api/fal/* (Vite proxy) → https://fal.run/*
```

### Key Directories
- `src/services/generation/` — Provider abstraction (types, fal-provider, registry, service)
- `src/store/` — Zustand stores (project-store, settings-store, generation-store)
- `src/hooks/` — React hooks (use-generation)
- `src/config/` — Model configs (fal-models.ts for FAL, kolbo-models.ts for prompt formatting)
- `src/lib/prompt-engine/` — Generates text prompts from shot descriptions
- `src/components/storyboard/` — Card view, shot editor, timeline
- `src/components/prompts/` — Prompt panel with per-type cards

### Import Flow
1. User pastes JSON at `/import`
2. Validated by `src/lib/ai/json-importer.ts`
3. Prompts auto-generated from shot descriptions via prompt-engine
4. Project saved to IndexedDB, navigate to editor with `?generate=true`
5. Batch image generation auto-starts

### API Key Setup
- FAL key entered in Settings page UI (stored in Zustand/localStorage)
- Fallback: `FAL_KEY=...` in `.env` file (read by Vite proxy)
- Proxy at `vite.config.ts` forwards `/api/fal/*` to `https://fal.run/*`

## Important Notes
- **kolbo-models.ts is NOT deleted** — still used by prompt-engine for text formatting and kolbo-exporter
- **fal-models.ts** is the active model registry for actual image/video generation
- **generation-store is ephemeral** — not persisted, status resets on page refresh
- Settings store IS persisted (includes falApiKey, preferred models)
- The `/test` route has a standalone API test page for debugging FAL calls

## Commands
```bash
npm run dev     # Start dev server (proxy active)
npm run build   # Production build
npx tsc --noEmit  # Type check
```

## Conventions
- Hebrew is the default language (RTL)
- Use `start`/`end` instead of `left`/`right` for RTL compatibility
- Zustand selectors should return primitives for proper reactivity (see generation-store)
- No `@fal-ai/client` SDK — plain fetch through Vite proxy
