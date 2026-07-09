# Keyword Crew

Marketing website for **Keyword Crew**, a digital marketing agency in
Coimbatore. Built with React, TypeScript, Vite, Tailwind CSS v4, and
Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production (output in `dist/`)
- `npm run preview` — preview the production build locally

## Project Structure

- `src/components/` — page sections (Navbar, Hero, About, Services, Process,
  Industries, Contact, Footer) and shared UI (Reveal animation wrapper,
  Counter, SocialIcons)
- `src/data/` — site content (services list, process steps, industries,
  contact details)
- `src/assets/` — optimized logo assets used in the app
- `brand-assets/` — original brand kit files (raw logo exports, brand board)
  kept for reference, not imported into the app bundle

## Deployment

The `dist/` folder produced by `npm run build` is a static site and can be
deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).
