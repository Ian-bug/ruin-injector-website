'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageDropdown from '@/components/ui/LanguageDropdown';
import { cn } from '@/lib/utils';

const NAV_LINKS = ['features', 'docs', 'download'] as const;

export default function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-bg/70 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className={cn(
        'absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500',
        scrolled ? 'opacity-100 bg-gradient-to-r from-transparent via-accent/20 to-transparent' : 'opacity-0'
      )} />

      <div className="container-main">
        <nav className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/20 transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="text-white">
                <path fill="currentColor" d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-txt tracking-tight">{t('logo')}</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative px-4 py-2 text-sm text-txt-secondary hover:text-txt transition-colors group"
              >
                {t(`nav.${key}`)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageDropdown />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-bg-tertiary transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-txt-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-bg/95 backdrop-blur-xl z-40 animate-[slideDown_0.2s_ease-out]">
          <div className="flex flex-col gap-1 p-6">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="block py-3 px-4 text-base text-txt-secondary hover:text-txt rounded-lg hover:bg-bg-tertiary/50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
