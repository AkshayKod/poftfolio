# Akshay G — Developer Portfolio

Premium futuristic single-page portfolio built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Start dev server     |
| `npm run build`| Production build     |
| `npm run preview` | Preview production build |

## Project structure

```
src/
  data/portfolio.json    # All content — edit here
  hooks/usePortfolio.ts  # Typed data hook
  types/portfolio.ts     # TypeScript interfaces
  components/
    layout/              # Navbar, footer, effects
    sections/            # Page sections
    ui/                  # Reusable UI primitives
```

## Editing content

Update `src/data/portfolio.json` only. Components read from `usePortfolio()` and stay unchanged when you update profile, experience, projects, or skills.

## Design tokens

- Background: `#0C0C0C`
- Headline: chrome/silver gradient (`.hero-heading`)
- Accent: purple → magenta → orange (`.accent-gradient`)
- Font: Kanit (Google Fonts)

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
