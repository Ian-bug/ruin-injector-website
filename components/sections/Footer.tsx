'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const links = [
    { href: 'https://github.com/Ian-bug/ruin-injector', label: t('links.github') },
    { href: 'https://github.com/Ian-bug/ruin-injector/issues', label: t('links.issues') },
    { href: 'https://github.com/Ian-bug/ruin-injector/releases', label: t('links.releases') },
    { href: 'https://github.com/Ian-bug/ruin-injector/blob/main/LICENSE', label: t('links.license') },
  ];

  return (
    <footer className="relative border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/30 pointer-events-none" />

      <div className="container-main relative z-10 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-accent/20 bg-accent/5">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-txt font-mono tracking-tight">RUIN</span>
                  <span className="text-[9px] font-mono text-txt-tertiary uppercase tracking-widest ml-1.5">injector</span>
                </div>
              </div>
              <p className="text-xs text-txt-tertiary leading-relaxed font-light max-w-xs">
                {t('description')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div>
              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-txt-muted mb-4">
                {'//'} links
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-txt-secondary hover:text-accent transition-colors font-light inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div>
              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-txt-muted mb-4">
                {'//'} stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {['Rust', 'egui', 'Windows API', 'serde'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-bg/60 border border-border/40 text-[11px] font-mono text-txt-tertiary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] font-mono text-txt-muted text-center sm:text-left">
              <span>&copy; {year} Ruin DLL Injector</span>
              <span className="hidden sm:inline text-border">·</span>
              <span>{t('disclaimer')}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-txt-muted/50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
              <span>all systems operational</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
