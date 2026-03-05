# AI Storyboard

AI-powered storyboard editor for video productions. Create characters, design environments, write scripts, and generate complete storyboards with consistent AI imagery.

## Features

- **Visual Character Builder** — Build characters step-by-step: type (human/cartoon/anime/animal/fantasy/robot), gender, age, body, skin tone, hair, clothing, expression, accessories
- **Environment Builder** — Choose from 50+ settings across 8 categories (indoor, outdoor, urban, nature, studio, fantasy, sci-fi, abstract) with time of day, weather, and lighting
- **AI Storyboard Generation** — Claude generates a structured storyboard JSON from your script, maintaining narrative flow and character consistency
- **Reference Image Pipeline** — Generate a character reference image, then use image-to-image for consistent visuals across all shots
- **Image & Video Generation** — Flux for images, MiniMax for video, Suno for music — all via FAL.ai
- **Timeline Editor** — Visual timeline with drag-and-drop shot reordering
- **Multi-language** — Full English + Hebrew (RTL) support
- **Export** — PDF, JSON, or Kolbo format

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript + Vite 7 |
| Styling | Tailwind CSS v4 |
| State | Zustand 5 (persisted to IndexedDB via Dexie) |
| Routing | React Router v7 |
| i18n | react-i18next (EN + HE with RTL) |
| AI Images | FAL.ai (Flux Dev, Flux Kontext) |
| AI Video | FAL.ai (MiniMax) |
| AI Storyboard | Claude API (Anthropic) |
| Icons | Lucide React |
| DnD | @dnd-kit |
| Export | html2canvas + jsPDF |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### API Keys

You need two API keys:

1. **FAL.ai** — For image/video generation → [fal.ai](https://fal.ai)
2. **Claude (Anthropic)** — For storyboard generation → [console.anthropic.com](https://console.anthropic.com)

Enter them in the Settings page (`/settings`), or set in `.env`:

```env
FAL_KEY=your_fal_key
CLAUDE_API_KEY=your_claude_key
```

### Run

```bash
npm run dev     # Dev server at http://localhost:5173
npm run build   # Production build
npx tsc --noEmit  # Type check
```

## Project Structure

```
src/
├── pages/                      # Route pages
│   ├── home-page.tsx           #   / — Project list
│   ├── project-page.tsx        #   /project/:id — Storyboard editor
│   ├── idea-page.tsx           #   /idea — AI wizard
│   ├── import-page.tsx         #   /import — JSON import
│   ├── settings-page.tsx       #   /settings — Configuration
│   └── test-generation-page.tsx #  /test — API debug
│
├── components/
│   ├── idea-wizard/            # Wizard flow (7 components)
│   │   ├── character-builder-step.tsx
│   │   ├── environment-builder-step.tsx
│   │   ├── story-input-step.tsx
│   │   ├── wizard-step-indicator.tsx
│   │   ├── reference-image-step.tsx
│   │   ├── generation-progress.tsx
│   │   └── storyboard-preview.tsx
│   ├── storyboard/             # Editor views
│   │   ├── storyboard-editor.tsx
│   │   ├── card-view.tsx
│   │   ├── shot-editor.tsx
│   │   ├── image-editor.tsx
│   │   └── angle-cube.tsx
│   ├── timeline/               # Timeline editor
│   ├── prompts/                # Prompt editing panel
│   ├── export/                 # Export modal
│   └── layout/                 # Header, language toggle
│
├── services/generation/        # AI generation layer
│   ├── types.ts                #   Provider interfaces
│   ├── fal-provider.ts         #   FAL.ai implementation
│   ├── generation-service.ts   #   High-level service
│   ├── provider-registry.ts    #   Provider registry
│   └── claude-storyboard.ts    #   Claude storyboard generation
│
├── store/                      # Zustand stores
│   ├── project-store.ts        #   Current project state
│   ├── settings-store.ts       #   API keys, preferences (persisted)
│   ├── generation-store.ts     #   Generation status (ephemeral)
│   └── editor-store.ts         #   UI state (ephemeral)
│
├── config/                     # Configuration
│   ├── fal-models.ts           #   FAL model registry
│   ├── character-options.ts    #   Character builder options
│   ├── environment-presets.ts  #   Environment presets (50+)
│   ├── style-presets.ts        #   Visual style options
│   └── kolbo-models.ts         #   Prompt formatting (export)
│
├── types/                      # TypeScript types
│   ├── project.ts              #   Project, Shot, Storyboard, enums
│   ├── character-builder.ts    #   Character definition
│   ├── environment-builder.ts  #   Environment definition
│   └── idea-wizard.ts          #   Wizard state machine
│
├── lib/                        # Utilities
│   ├── prompt-builders.ts      #   Character/environment → text prompt
│   ├── img2img-strength.ts     #   Camera angle → strength mapping
│   ├── prompt-engine/          #   Auto-generate prompts from shots
│   ├── ai/json-importer.ts     #   Validate storyboard JSON
│   └── export/kolbo-exporter.ts
│
├── hooks/
│   └── use-generation.ts       # Generation hook (img2img aware)
│
├── db/
│   └── database.ts             # Dexie IndexedDB setup
│
└── i18n/
    └── index.ts                # i18next config
```

## Architecture

### Wizard Flow

```
Character Builder → Character Preview → Environment Builder → Environment Preview → Story Input → Claude Generation → Storyboard Preview → Import to Editor
```

Each step generates a text prompt from structured UI selections. Character and environment reference images are generated for visual approval before proceeding.

### Generation Pipeline

```
UI → useGeneration hook → generation-service → provider-registry → FalProvider → /api/fal/* (Vite proxy) → fal.run
```

**Image-to-image consistency:** If a project has a `referenceImageUrl`, shots use img2img (Flux Dev) with strength varying by camera angle:

| Camera Angle | Strength | Reason |
|-------------|----------|--------|
| extreme-close-up | 0.92 | Preserve facial details |
| close-up | 0.90 | Preserve face |
| medium-shot | 0.85 | Balance |
| wide-shot | 0.75 | Allow environment variation |
| birds-eye | 0.70 | Character small in frame |

### API Proxy

Vite dev server proxies two endpoints:

- `/api/fal/*` → `https://fal.run/*` (FAL.ai — images, video, music)
- `/api/claude/*` → `https://api.anthropic.com/*` (Claude — storyboard generation)

Auth headers are injected server-side from settings or `.env` fallback.

### Database

Dexie (IndexedDB) with a single `projects` table. Each project stores the full storyboard (intro, shots, outro, music) as a nested object.

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Project list, create/delete |
| `/idea` | Idea Wizard | AI-powered storyboard creation |
| `/import` | Import | Paste JSON storyboard |
| `/project/:id` | Editor | Storyboard editor (cards, timeline, prompts) |
| `/settings` | Settings | API keys, language, model preferences |
| `/test` | Test AI | Debug FAL.ai API calls |

## Conventions

- Hebrew is the default language (RTL)
- Use `start`/`end` instead of `left`/`right` for RTL compatibility
- No `@fal-ai/client` SDK — plain fetch through Vite proxy
- Zustand selectors return primitives for proper reactivity
- generation-store is ephemeral (resets on refresh)
- settings-store is persisted (localStorage)

## License

Private project.
