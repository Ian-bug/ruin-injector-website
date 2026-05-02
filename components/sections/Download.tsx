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
    <section id="download" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-fg pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 origin-left transition-transform duration-800 group-in-view:scale-x-100" />

      <div className="container-main relative z-10 text-center">
        <ScrollReveal>
          <p className="text-[11px] font-mono text-accent uppercase tracking-[0.15em] mb-3">
            {t('label')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-bg-elevated mb-4">
            {t('title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-sm text-txt-muted max-w-lg mx-auto leading-relaxed mb-8 font-light">
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
            <Button size="lg" variant="coral" className="bg-bg-elevated text-fg hover:bg-accent hover:text-bg-elevated border-0">
              {t('button')}
            </Button>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <p className="text-[11px] font-mono text-txt-muted/60 uppercase tracking-widest mt-5">
            v{version.replace('v', '')} · {t('meta')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
