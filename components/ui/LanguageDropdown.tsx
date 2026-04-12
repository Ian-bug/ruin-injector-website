'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { localeFlags, localeNames, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchLocale(newLocale: string) {
    localStorage.setItem('preferred-locale', newLocale);
    document.cookie = `preferred-locale=${newLocale};path=/;max-age=31536000`;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-tertiary border border-border hover:border-border-hover transition-colors cursor-pointer text-sm"
      >
        <span className="text-xs font-bold text-txt-secondary">
          {localeFlags[locale]}
        </span>
        <span className="hidden sm:inline text-txt-secondary font-medium">
          {localeNames[locale]}
        </span>
        <svg
          className={cn('w-3.5 h-3.5 text-txt-tertiary transition-transform', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-bg-tertiary border border-border rounded-lg shadow-2xl overflow-hidden z-50">
          {(['en', 'zh'] as const).map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors cursor-pointer',
                locale === loc ? 'bg-accent-soft text-accent' : 'text-txt-secondary hover:bg-bg-elevated hover:text-txt'
              )}
            >
              <span className="text-xs font-bold">{localeFlags[loc]}</span>
              <span className="font-medium">{localeNames[loc]}</span>
              {locale === loc && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
