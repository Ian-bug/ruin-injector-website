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
    <footer className="relative border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/30 pointer-events-none" />

      <div className="container-main relative z-10 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <ScrollReveal>
            <span className="text-xs text-txt-tertiary font-light">
              {t('description')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="flex items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-txt-secondary hover:text-accent transition-colors font-light"
                >
                  {link.label}
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
