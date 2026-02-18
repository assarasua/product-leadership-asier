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

## Build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

This project is ready for Cloudflare Pages (static Vite build).

Use these settings when connecting the GitHub repo:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (repo root)
- Node.js version: `20` (recommended)

Add these environment variables in Cloudflare Pages (Production + Preview):

- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`

Notes:

- `public/_redirects` is included for SPA routing (`/* /index.html 200`) so direct URL refreshes do not 404.
- If using a custom domain, add `bizkardolab.eu` in Pages -> Custom domains.

## Visibility checklist

- Public repository
- Clear README with project scope
- Environment values excluded from source control
