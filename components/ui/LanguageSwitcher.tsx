'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeFlags, localeNames, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    // Store preference in both localStorage and cookie
    localStorage.setItem('preferred-locale', newLocale);
    document.cookie = `preferred-locale=${newLocale};path=/;max-age=31536000`;

    // Navigate to new locale
    const segments = pathname.split('/');
    segments[1] = newLocale === 'en' ? '' : newLocale;
    const newPath = segments.filter(Boolean).join('/');
    router.push(newPath === '' ? '/' : `/${newPath}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-tertiary border-2 border-border-default hover:border-accent-primary transition-colors cursor-pointer"
        aria-label="Switch language"
      >
        <span className="text-xl">{localeFlags[locale as Locale]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {localeNames[locale as Locale]}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-background-tertiary border-2 border-border-default rounded-lg shadow-xl z-20">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-background-elevated transition-colors cursor-pointer',
                  locale === loc && 'bg-background-elevated'
                )}
              >
                <span className="text-xl">{localeFlags[loc]}</span>
                <span className="font-medium">{localeNames[loc]}</span>
                {locale === loc && (
                  <span className="ml-auto text-accent-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
