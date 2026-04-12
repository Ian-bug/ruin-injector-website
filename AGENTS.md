# Project Guidelines

## Build / Lint / Dev Commands

- `npm run dev` — start dev server
- `npm run build` — production build (run after making changes to verify no errors)
- `npm run lint` — ESLint check (extends `next/core-web-vitals`)
- No test framework is configured — there is no `npm test` command

## Architecture

- **Next.js 14** App Router with `[locale]` dynamic segment for i18n
- **Server components by default** — only add `'use client'` when the component needs hooks, browser APIs, or interactivity
- Server-side data fetching in `app/[locale]/page.tsx` (GitHub releases via `getLatestRelease`)
- `revalidate = 300` on the page for ISR (revalidate every 5 minutes)

## Directory Structure

```
app/[locale]/          # Route pages (layout.tsx, page.tsx, globals.css)
components/
  ui/                  # Reusable UI primitives (Button, Card, CodeBlock, ScrollReveal, LanguageDropdown)
  sections/            # Page sections (Hero, Features, Download, etc.)
  layout/              # Layout components (Header)
  providers/           # React context providers (ThemeProvider)
lib/
  utils.ts             # cn() utility for class merging
  github.ts            # GitHub API helpers
  data/                # Static data (features list)
  i18n/                # i18n config, request handler, middleware
messages/              # Translation files (en.json, zh.json)
```

## Code Style

### Imports

- Use `@/` path alias for all local imports (configured in `tsconfig.json` `paths`)
- External packages first, then local `@/` imports
- Use `import type` for type-only imports:
  ```ts
  import type { Metadata } from 'next';
  import { type ClassValue, clsx } from 'clsx';
  ```

### Formatting

- No semicolons in `.tsx`/`.ts` source files (excluding config files like `next.config.js`, `postcss.config.js`)
- Single quotes for strings
- No trailing commas enforced at the style level, but follow existing patterns
- No code comments unless explicitly asked

### Components

- **Default exports** for components: `export default function Button() {}`
- **Named exports** for utilities, types, and data: `export function cn() {}`, `export interface Feature {}`
- Props defined as `interface` (not `type`):
  ```tsx
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
  }
  ```
- Use `cn()` from `@/lib/utils` for conditional/merged Tailwind classes (wraps `clsx` + `tailwind-merge`)
- Inline SVG icons — no icon library dependency

### Naming Conventions

- **PascalCase** for component filenames and component names: `ScrollReveal.tsx`, `LanguageDropdown`
- **camelCase** for functions, variables, and props: `getLatestRelease`, `mobileOpen`
- **SCREAMING_SNAKE_CASE** for module-level constants: `NAV_LINKS`, `GITHUB_REPO`, `locales`
- **camelCase** for Tailwind utility usage in JSX

### TypeScript

- Strict mode enabled (`"strict": true` in `tsconfig.json`)
- Use `as const` for literal arrays that need narrowing: `['en', 'zh'] as const`
- Use `satisfies` or explicit return types where type inference is insufficient
- Prefer `interface` over `type` for object shapes
- Prefer `Record<Key, Value>` for typed dictionaries

### Error Handling

- External API calls (e.g., GitHub) should gracefully return `null` on failure, never throw
- Use try/catch with empty catch or silent fallback — the UI must always render:
  ```ts
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
  ```

## Styling

- **Tailwind CSS** with custom design tokens in `tailwind.config.ts`
- **Dark theme only** — no light mode toggle
- Custom color palette (use these, not arbitrary values):
  - `bg` — backgrounds: `bg-bg`, `bg-bg-secondary`, `bg-bg-tertiary`, `bg-bg-elevated`
  - `txt` — text: `text-txt`, `text-txt-secondary`, `text-txt-tertiary`, `text-txt-muted`
  - `accent` — primary actions: `bg-accent`, `hover:bg-accent-hover`, `bg-accent-soft`
  - `border` — borders: `border-border`, `hover:border-border-hover`, `border-accent`
- Custom animations: `animate-fade-in`, `animate-slide-up`, `animate-float`
- Container class: `container-main` (defined in globals.css)
- Section spacing class: `section-y` (defined in globals.css)
- Framer Motion for scroll-triggered animations via the `ScrollReveal` wrapper component

## i18n

- **next-intl** for internationalization
- `localePrefix: 'always'` — locale always visible in URL (`/en`, `/zh`)
- Default locale: `en`; supported: `en`, `zh`
- Client components use `useTranslations('namespace')` to access translations
- Translation keys are dot-accessed: `t('list.modernGui.title')`
- Translation files are nested JSON in `messages/en.json` and `messages/zh.json` — **keep both files in sync**
- Locale config (locale list, names, flags) lives in `lib/i18n/config.ts`
- Adding a new locale requires: updating `locales` in `lib/i18n/config.ts`, adding `messages/<locale>.json`, updating the middleware matcher in `middleware.ts`

## Key Dependencies

| Package | Purpose |
|---|---|
| `next` (14) | Framework |
| `next-intl` | i18n |
| `framer-motion` | Animations |
| `react-intersection-observer` | Scroll-triggered reveals |
| `clsx` + `tailwind-merge` | Class merging via `cn()` |

## Common Patterns

### Adding a new section component
1. Create file in `components/sections/YourSection.tsx`
2. Add `'use client'` if it uses hooks or `useTranslations`
3. Import `ScrollReveal` for animated entry, `Card` for contained content
4. Add translation keys to both `messages/en.json` and `messages/zh.json`
5. Import and render in `app/[locale]/page.tsx`

### Adding a new UI component
1. Create in `components/ui/YourComponent.tsx`
2. Accept `className` prop and merge with `cn()`
3. Define props as an `interface`
4. Use variant objects for style variations (see `Button.tsx` for reference)
