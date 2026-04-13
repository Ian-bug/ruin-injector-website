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
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
              <svg className="w-4 h-4 text-accent relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-txt tracking-tight leading-none font-mono">RUIN</span>
              <span className="text-[9px] text-txt-tertiary font-mono uppercase tracking-widest leading-none mt-0.5">injector</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="relative px-4 py-2 text-xs font-mono text-txt-secondary hover:text-accent transition-colors duration-200 group"
              >
                <span className="relative z-10">{t(`nav.${key}`)}</span>
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-accent/0 group-hover:bg-accent/60 transition-colors duration-200" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageDropdown />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-sm border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4 text-txt-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-bg/95 backdrop-blur-xl z-40 animate-[slideDown_0.2s_ease-out] border-t border-border/50">
          <div className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-sm font-mono text-txt-secondary hover:text-accent hover:bg-accent/5 rounded-sm transition-colors border-l-2 border-transparent hover:border-accent/50"
              >
                {'//'} {t(`nav.${key}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
