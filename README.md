# Product Leadership Portfolio (Asier)

Public portfolio website for Asier Sarasua focused on product leadership, innovation, and cross-cultural technology work.

Repository: [assarasua/product-leadership-asier](https://github.com/assarasua/product-leadership-asier)

## What this project includes

- Leadership profile and career journey
- Product philosophy and achievements
- Multilingual content (English, Spanish, Basque, Catalan, Galician)
- Blog section
- Contact form backed by Supabase

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Supabase
- i18next
- InfiniteWatch (session analytics)

## Run locally

```bash
git clone https://github.com/assarasua/product-leadership-asier.git
cd product-leadership-asier
npm install
cp .env.example .env
npm run dev
```

## Environment variables

Create a `.env` file from `.env.example`:

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`
- `VITE_INFINITEWATCH_ORG_ID`

## Build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare

This project is configured for static Vite output on Cloudflare.

Recommended build settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (repo root)
- Node.js version: `20` (recommended)

Add these environment variables in Cloudflare (Production + Preview):

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`
- `VITE_INFINITEWATCH_ORG_ID`

Notes:

- SPA fallback is handled by `wrangler.toml` with `not_found_handling = "single-page-application"`.
- If using a custom domain, add `bizkardolab.eu` in Pages -> Custom domains.

## InfiniteWatch integration

The app uses `@infinitewatch/react` via `InfiniteWatchProvider` in `src/App.tsx`.

Current integration is configured to aid validation in production:

- `debug={true}`
- `defaultSamplingPercent={100}`
- `endpointConfig=""` (bypasses remote sampling config)

## Visibility checklist

- Public repository
- Clear README with project scope
- Environment values excluded from source control
