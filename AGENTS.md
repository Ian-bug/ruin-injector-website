# Project Guidelines

## Development

- Run `npm run build` after making changes to verify no errors
- Run `npm run lint` to check code style
- Use TypeScript strict mode

## Architecture

- App Router with `[locale]` dynamic segment for i18n
- All components are client components unless they need server-only features
- Translations stored in `messages/en.json` and `messages/zh.json`
- GitHub release data fetched server-side in `app/[locale]/page.tsx`

## Styling

- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- Custom colors: `bg-*`, `txt-*`, `accent`, `border-*`
- Use `cn()` from `@/lib/utils` for conditional class merging
- Dark theme only

## i18n

- `localePrefix: 'always'` — locale always visible in URL (`/en`, `/zh`)
- Default locale: `en`
- Supported locales: `en`, `zh`
