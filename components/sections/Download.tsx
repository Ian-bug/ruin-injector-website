'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card from '@/components/ui/Card';

interface DownloadProps {
  version: string;
}

export default function Download({ version }: DownloadProps) {
  const t = useTranslations('download');

  const highlights = [
    { label: '~4.5 MB', desc: 'Single executable', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Zero Config', desc: 'Works out of the box', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { label: 'Rust Native', desc: 'Blazing fast performance', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <section id="download" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-14">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">05</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {'//'} download
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-xl">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-coral/[0.04] rounded-sm blur-2xl" />

            <div className="relative border border-border/60 bg-bg-secondary/90 backdrop-blur-sm p-8 text-center">
              <div className="mb-6">
                <p className="text-[10px] font-mono text-txt-muted uppercase tracking-widest mb-2">latest version</p>
                <span className="text-4xl md:text-5xl font-bold font-mono text-gradient-coral">{version}</span>
                <p className="text-xs text-txt-tertiary mt-2 font-mono">{t('size')} · Windows x64</p>
              </div>

              <a
                href="https://github.com/Ian-bug/ruin-injector/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <Button size="lg" variant="coral" className="w-full sm:w-auto">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {t('button')}
                </Button>
              </a>

              <div className="mt-6 pt-5 border-t border-border/40">
                <a
                  href="https://github.com/Ian-bug/ruin-injector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-txt-secondary hover:text-accent transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('github')}
                </a>
              </div>

              <p className="text-[10px] font-mono text-txt-muted mt-5">{t('license')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.22}>
          <div className="grid grid-cols-3 gap-3 mt-10 max-w-2xl mx-auto">
            {highlights.map((h) => (
              <Card key={h.label} className="text-center py-5 px-4">
                <svg className="w-5 h-5 text-coral mx-auto mb-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
                </svg>
                <h3 className="text-xs font-semibold mb-1 font-mono">{h.label}</h3>
                <p className="text-[11px] text-txt-tertiary font-light">{h.desc}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
