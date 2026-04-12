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
    <footer className="border-t border-border">
      <div className="container-main py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <ScrollReveal>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Ruin Injector</span>
              </div>
              <p className="text-xs text-txt-tertiary leading-relaxed">{t('description')}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-txt-tertiary mb-3">Links</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-txt-secondary hover:text-txt transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-txt-tertiary mb-3">Built With</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Rust', 'egui', 'Windows API', 'serde'].map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-bg-tertiary border border-border rounded text-[11px] text-txt-tertiary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-txt-muted">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>&copy; {year} Ruin DLL Injector</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>{t('disclaimer')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
