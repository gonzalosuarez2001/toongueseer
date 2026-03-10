# Toon Guesser — Copilot Instructions

## Project overview

A daily Wordle-style cartoon character guessing game. Players guess a pixelated/desaturated character image with progressive hints. Supports multiple cartoon franchises (Simpsons, Pokémon, Dragon Ball).

The repo has two independent packages:

- **`app/`** — Next.js 16 frontend with ISR, TypeScript, Tailwind v4, Prisma, Redux Toolkit
- **`cron/`** — Node.js/Express service that runs daily at midnight UTC to rotate the daily character and trigger Next.js cache revalidation

Both packages share the same PostgreSQL database (separate Prisma schemas, kept in sync manually).

## Commands

### app/
```bash
cd app
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run migrate      # Run Prisma migrations
npm run seed         # Seed database

# Data scripts (fetch characters/images from external APIs)
npm run get-simpsons-toons
npm run get-simpsons-images
# same pattern for pokemon, dragonball
```

### cron/
```bash
cd cron
npm run dev          # nodemon (ts-node) for development
npm run build        # tsc compile to dist/
npm run prisma-update  # Pull DB schema and regenerate Prisma client
```

### Local DB
```bash
cd app
docker compose up -d  # Starts postgres:16 on port 3310
```

## Architecture

### Game data flow
Each cartoon page (`/simpsons`, `/pokemon`, `/dragonball`) is a Next.js server component with `revalidate = 86400`. It calls `getToons()` and `getDailyToon()` from `src/lib/repository.ts` (Prisma queries), then passes data down to `ToonTemplate`.

`ToonTemplate` is a client component that boots the Redux store via `dispatch(setupToonGame(...))` on mount. All game state (pixelation level, saturation, guesses, solved status) lives in `src/store/features/game/gameSlice.ts`.

The cron service updates `Stats.daily_toon` in the DB each midnight, then calls `/api/revalidate` to invalidate the Next.js ISR cache.

### Adding a new cartoon
Follow the steps in `README.md`. Key files to touch:

1. **`app/src/cartoonConfig.ts`** — add config entry (styles, pixelation/saturation levels, rotation angles). The `Cartoon` type is derived as `keyof typeof cartoonConfig`, so adding an entry here automatically expands the type.
2. **`app/src/globals.css`** — add Tailwind v4 theme variables (`font-{name}`, `color-{name}`) and utilities (`@utility bg-toon-{name}`, `@utility scrollbar-{name}`).
3. **`app/src/app/{cartoon_name}/page.tsx`** — server component with `revalidate = 86400`, calls `getToons` + `getDailyToon`, renders `<ToonTemplate>`.
4. **`app/src/app/{cartoon_name}/layout.tsx`** — metadata only.
5. **`app/data/{cartoon_name}.json`** — character data.
6. **`app/public/{cartoon_name}/`** — character images in `.webp`.
7. **`app/public/{cartoon_name}_bg.webp`** and **`{cartoon_name}_logo.webp`** — background and logo.

### Component structure (Atomic Design)
`src/components/` follows atoms → molecules → organisms → templates. `ToonTemplate` is the single template that all cartoon pages reuse.

### Key conventions
- `Cartoon` type is `keyof typeof cartoonConfig` (from `src/types.ts`) — never hardcode cartoon strings as plain `string`.
- Tailwind utility classes come from `cartoonConfig` entries (e.g., `cartoonConfig[cartoon].font`, `.border`, `.text`). Don't write per-cartoon conditional class logic — always look up from the config.
- Redux typed hooks: use `useAppDispatch` and `useAppSelector` from `src/store/hooks.ts`, not raw `useDispatch`/`useSelector`.
- `pixelDificulty` and `saturationDificulty` in the Redux state read from `NEXT_PUBLIC_MAX_DIFFICULTY` env var (defaults to `7`).
- Images must be `.webp` for performance.
- The cron service uses CommonJS `require()` despite TypeScript (note the mixed `require` / type annotations in `cron/app.ts`).
