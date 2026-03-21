# AGENTS.md - Agent Guide for Ruin DLL Injector Website

This document helps AI agents work effectively in this Next.js website codebase.

## Project Overview

This is a bilingual (English/Chinese) landing website for **Ruin DLL Injector**, a Windows DLL injection tool. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and next-intl for internationalization.

## Essential Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Prerequisites
- Node.js 18+
- npm

## Project Structure

```
injector-website/
├── app/[locale]/           # Internationalized routes
│   ├── layout.tsx          # Root layout with i18n provider
│   ├── page.tsx            # Main landing page (imports all sections)
│   └── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── sections/           # Page sections (Hero, Features, Download, etc.)
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   ├── layout/             # Layout components (Header, Container)
│   └── providers/          # Context providers (ThemeProvider)
├── lib/
│   ├── utils.ts            # Utility functions (cn for class merging)
│   ├── i18n/               # Internationalization config and request setup
│   └── data/               # Static data (features list)
├── messages/               # Translation files
│   ├── en.json             # English translations
│   └── zh.json             # Chinese translations
├── middleware.ts           # Locale detection and redirection
├── tailwind.config.ts      # Custom theme with color system
└── next.config.js          # Next.js + next-intl plugin config
```

## Code Patterns & Conventions

### Component Structure

- **Section components** go in `components/sections/` - each is a self-contained page section
- **UI components** go in `components/ui/` - reusable building blocks
- **Layout components** go in `components/layout/` - structural elements

### Client vs Server Components

- Use `'use client'` directive at the top of client components
- Client components are needed for:
  - Event handlers (onClick, onChange, etc.)
  - React hooks (useState, useEffect, etc.)
  - Browser APIs
  - `useTranslations` from next-intl (client-side)
- Server components (default) for static content and data fetching

### Internationalization (i18n)

1. **Translation keys** are accessed via `useTranslations('namespace')` hook:
   ```tsx
   const t = useTranslations('hero');
   // Access: t('title'), t('cta.download')
   ```

2. **Add new translations**:
   - Add key to both `messages/en.json` and `messages/zh.json`
   - Use nested structure matching component organization

3. **Locale configuration**:
   - Defined in `lib/i18n/config.ts`
   - Current locales: `en`, `zh`
   - Default locale: `en`

4. **URL structure**: `/` (English), `/zh` (Chinese)

### Styling

1. **Use Tailwind CSS classes** with the custom color system:
   - Backgrounds: `bg-background-primary`, `bg-background-secondary`, etc.
   - Text: `text-text-primary`, `text-text-secondary`, etc.
   - Accents: `bg-accent-primary`, `text-accent-primary`, etc.
   - Borders: `border-border-default`, `border-border-accent`, etc.

2. **Use `cn()` utility** for conditional class merging:
   ```tsx
   import { cn } from '@/lib/utils';
   className={cn('base-classes', condition && 'conditional-class')}
   ```

3. **Custom utility classes** (defined in globals.css):
   - `container-custom` - Max-width container with responsive padding
   - `section-padding` - Responsive section vertical padding
   - `text-gradient` - Gradient text effect
   - `bg-gradient-radial` / `bg-gradient-mesh` - Gradient backgrounds
   - `glow-primary` / `glow-secondary` - Glow shadows

4. **Animations**:
   - `animate-fade-in`, `animate-slide-up`, `animate-float`
   - `animate-pulse-glow`, `animate-gradient`

### ScrollReveal Pattern

For scroll-triggered animations, use the `ScrollReveal` component:
```tsx
<ScrollReveal delay={0.1} direction="up">
  <YourContent />
</ScrollReveal>
```

Directions: `'up' | 'down' | 'left' | 'right'`

### Button Component

```tsx
<Button variant="primary" size="lg">
  Button Text
</Button>
```

Variants: `'primary'`, `'secondary'`, `'outline'`
Sizes: `'sm'`, `'md'`, `'lg'`

## Color System

The site uses a dark theme with red accent:

| Category | Name | Value | Usage |
|----------|------|-------|-------|
| Background | primary | `#0D0D0D` | Main background |
| Background | secondary | `#1A1A1A` | Cards, sections |
| Background | tertiary | `#262626` | Elevated surfaces |
| Background | elevated | `#333333` | Hover states |
| Text | primary | `#E5E5E5` | Headlines |
| Text | secondary | `#A3A3A3` | Body text |
| Text | tertiary | `#737373` | Muted text |
| Accent | primary | `#FF4444` | Primary CTAs |
| Accent | primaryHover | `#CC0000` | Button hover |
| Border | default | `#404040` | Default borders |

All colors are defined in both `tailwind.config.ts` and as CSS variables in `globals.css`.

## Import Aliases

Use `@/` for root-relative imports:
```tsx
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
```

## Adding a New Section

1. Create component in `components/sections/YourSection.tsx`
2. Add translations to `messages/en.json` and `messages/zh.json`
3. Import and add to `app/[locale]/page.tsx`

## Adding a New Language

1. Add locale to `lib/i18n/config.ts`:
   ```ts
   export const locales = ['en', 'zh', 'new'] as const;
   export const localeNames: Record<Locale, string> = {
     en: 'English',
     zh: '中文',
     new: 'New Language',
   };
   ```

2. Create `messages/new.json` with translations

3. Update `components/ui/LanguageSwitcher.tsx` if needed

## Deployment

- **Vercel** (recommended): Push to GitHub, import in Vercel
- **Other**: Run `npm run build`, deploy `.next` directory

No environment variables required for basic deployment.

## Important Notes

- The site uses static site generation via `generateStaticParams()` in layout.tsx
- The middleware handles locale detection and redirects
- All section components use `'use client'` due to `useTranslations` hook
- The `ThemeProvider` wraps the entire app for future theme support
- Default locale is always English unless `preferred-locale` cookie is set to `zh`
