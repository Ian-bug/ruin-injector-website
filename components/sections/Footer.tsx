'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Footer() {
  const t = useTranslations('footer');

  const links = [
    { href: 'https://github.com/Ian-bug/ruin-injector', label: t('links.github') },
    { href: 'https://github.com/Ian-bug/ruin-injector/issues', label: t('links.issues') },
    { href: 'https://github.com/Ian-bug/ruin-injector/releases', label: t('links.releases') },
    { href: 'https://github.com/Ian-bug/ruin-injector/blob/main/LICENSE', label: t('links.license') },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center text-white font-bold">
                  R
                </div>
                <span className="text-xl font-bold">Ruin Injector</span>
              </div>
              <p className="text-text-secondary text-sm">
                {t('description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-blue transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-semibold mb-4">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'egui', 'Windows API', 'serde'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background-tertiary border border-border rounded text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <ScrollReveal delay={0.3}>
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
              <p>{t('copyright')}</p>
              <p>{t('disclaimer')}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
