# Ruin DLL Injector Website

Next.js website for the [Ruin DLL Injector](https://github.com/Ian-bug/ruin-injector) project.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** next-intl (English / Chinese)
- **Icons:** Inline SVG (Heroicons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/[locale]/       # App router pages & layout
components/
  layout/           # Header
  providers/        # ThemeProvider
  sections/         # Hero, Features, Screenshots, Technical, Documentation, Download, Footer
  ui/               # Button, Card, CodeBlock, ScrollReveal, LanguageDropdown
lib/
  data/             # Feature definitions
  i18n/             # Internationalization config & middleware
  github.ts         # GitHub API helpers
  utils.ts          # cn() utility
messages/           # en.json, zh.json translations
middleware.ts       # Locale routing
```

## License

MIT
