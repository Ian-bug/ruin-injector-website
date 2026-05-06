'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Footer() {
  const t = useTranslations('footer');

  const links = [
    { href: 'https://github.com/Ian-bug/ruin-injector', label: t('links.github') },
    { href: 'https://github.com/Ian-bug/ruin-injector/issues', label: t('links.issues') },
    { href: 'https://github.com/Ian-bug/ruin-injector/releases', label: t('links.releases') },
  ];

  return (
    <footer className="relative border-t border-border/30 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10 py-14 md:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" />
                </svg>
              </div>
              <span className="text-xs text-txt-tertiary font-light">
                {t('description')}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex items-center gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-txt-secondary hover:text-accent transition-colors duration-200 font-light relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent/50 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">
              {t('legal')}
            </span>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
