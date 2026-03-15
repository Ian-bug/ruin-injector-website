import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n/config';

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Check if user has a preferred locale stored
    const preferredLocale = request.cookies.get('preferred-locale')?.value || defaultLocale;

    // Always default to English unless Chinese is explicitly stored
    const locale = preferredLocale === 'zh' ? 'zh' : 'en';

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return Response.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
