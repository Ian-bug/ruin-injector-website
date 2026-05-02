'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface HeroProps {
  version: string;
}

export default function Hero({ version }: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-main relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[11px] font-mono text-accent tracking-[0.15em] uppercase mb-6">
              {t('kicker')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="block text-txt">{t('title')}</span>
              <span className="block text-gradient-cyan mt-1 sm:mt-2 italic font-mono">
                {t('titleEm')}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm sm:text-base text-txt-secondary max-w-xl leading-relaxed mb-10 font-light mx-auto">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://github.com/Ian-bug/ruin-injector" target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" variant="coral">
                  {t('cta.github')}
                  <span className="text-coral/50 group-hover:text-coral/80 ml-1">_</span>
                </Button>
              </Link>
              <Link href="https://github.com/Ian-bug/ruin-injector/releases" target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" variant="secondary">
                  {t('cta.download')} v{version.replace('v', '')}
                  <span className="text-txt-muted group-hover:text-txt-tertiary ml-1">_</span>
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-mono text-txt-muted uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-txt-muted to-transparent" />
      </div>
    </section>
  );
}
