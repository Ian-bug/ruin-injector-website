'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface DownloadProps {
  version: string;
}

export default function Download({ version }: DownloadProps) {
  const t = useTranslations('download');

  return (
    <section id="download" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-bg-tertiary pointer-events-none" />

      <div className="hero-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/[0.04] animate-morph opacity-60" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/15 to-transparent" />

      <div className="container-main relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            <p className="text-[11px] font-mono text-accent uppercase tracking-[0.12em]">
              {t('label')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-txt mb-5 md:mb-6 max-w-3xl mx-auto leading-tight">
            {t('title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-sm md:text-base text-txt-secondary max-w-lg mx-auto leading-relaxed mb-10 md:mb-12 font-light opacity-90">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <a
            href="https://github.com/Ian-bug/ruin-injector/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <Button size="lg" variant="coral">
              {t('button')}
            </Button>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 opacity-50">
            <p className="text-[11px] font-mono text-txt-muted/80 uppercase tracking-widest">
              v{version.replace('v', '')}
            </p>
            <div className="h-3 w-px bg-border" />
            <p className="text-[11px] font-mono text-txt-muted/80">{t('meta')}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
