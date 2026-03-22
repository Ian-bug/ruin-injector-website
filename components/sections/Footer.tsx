'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

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
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-tertiary">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p>© {currentYear} Ruin DLL Injector. All rights reserved.</p>
                <p>{t('disclaimer')}</p>
              </div>
              <a
                href="https://ko-fi.com/Y8Y01WG0DL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5E5B] hover:bg-[#FF4444] text-white rounded-lg transition-colors font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.246 5.229-4.388 5.229-4.388s.468-3.261-.173-6.43zM9.646 11.534v-5.2h7.718v5.2H9.646zm11.386 1.896v-5.2h1.883v5.2h-1.883z" />
                </svg>
                Support me on Ko-fi
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
