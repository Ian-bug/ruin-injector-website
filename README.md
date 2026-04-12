<div align="center">

<img src="public/extension_icon512.png" alt="Ruin Injector" height="80" />

# Ruin DLL Injector Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

Dark-themed marketing website for the [Ruin DLL Injector](https://github.com/Ian-bug/ruin-injector) — a modern Windows DLL injection tool built with Rust and egui.

</div>

## Overview

A single-page website showcasing the Ruin DLL Injector's features, technical implementation, documentation, and download links. It fetches the latest release version from GitHub and presents it alongside animated UI sections with full English/Chinese internationalization.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) (App Router) | React framework with SSR/ISR |
| [TypeScript](https://www.typescriptlang.org/) | Type safety (strict mode) |
| [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling with custom design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animations |
| [next-intl](https://next-intl.dev/) | Internationalization (EN/ZH) |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Viewport-based reveal triggers |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site will be available at `/en` (English) or `/zh` (Chinese).

### Prerequisites

- Node.js 18+
- npm

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
app/[locale]/           # App Router — pages & layout (server components)
  layout.tsx            # Root layout with fonts, metadata, providers
  page.tsx              # Home page — fetches GitHub release, renders all sections
  globals.css           # Global styles, custom utilities, animations
components/
  layout/               # Header (sticky nav with frosted-glass scroll effect)
  providers/            # ThemeProvider wrapper
  sections/             # Hero, Features, Screenshots, Technical, Documentation, Download, Footer
  ui/                   # Button, Card, CodeBlock, ScrollReveal, LanguageDropdown
lib/
  data/features.ts      # 12 feature definitions with translation keys & icons
  github.ts             # GitHub API client (latest release fetching)
  i18n/                 # next-intl config, request handler, middleware
  utils.ts              # cn() — clsx + tailwind-merge utility
messages/               # Translation files (en.json, zh.json)
middleware.ts           # Locale routing middleware
public/images/          # Static assets (screenshot, icons)
```

## Architecture

The app uses Next.js App Router with a `[locale]` dynamic segment for i18n. The home page is a **server component** that fetches the latest GitHub release via ISR (revalidated every 5 minutes) and passes the version to client-side section components.

```
RootLayout (server)
  └── ThemeProvider (passthrough)
       └── NextIntlClientProvider
            └── Home (server) — GitHub API fetch
                 ├── Header (client)
                 ├── Hero (client)
                 ├── Features (client)
                 ├── Screenshots (client)
                 ├── Technical (client)
                 ├── Documentation (client)
                 ├── Download (client)
                 └── Footer (client)
```

- **Locale prefix is always visible** in the URL (`/en`, `/zh`)
- All section and UI components are client components (animations require client-side rendering)
- GitHub release data is fetched server-side with error fallback to a hardcoded version

## Key Features

- **Dark-only theme** with custom color palette (charcoal backgrounds, red accent)
- **Scroll-triggered animations** with Framer Motion and intersection observer
- **Full i18n** — English and Chinese with locale-prefixed URLs
- **Live version display** — fetches latest release from GitHub API
- **Responsive design** — mobile hamburger menu, fluid grids, adaptive typography
- **Interactive documentation** — accordion-style FAQ with animated transitions
- **Technical showcase** — injection process flow, Windows API references, Rust code samples

## Development Notes

- Use `cn()` from `@/lib/utils` for conditional Tailwind class merging
- Translations are keyed in `messages/en.json` and `messages/zh.json` — add new keys to both files
- Custom design tokens are defined in `tailwind.config.ts` (`bg-*`, `txt-*`, `accent`, `border-*`)
- Run `npm run build` after changes to verify no errors; `npm run lint` to check code style
- Deployed on [Vercel](https://vercel.com/) with ISR for the GitHub release data

## Related

- [Ruin DLL Injector](https://github.com/Ian-bug/ruin-injector) — the Rust/egui application this site documents
