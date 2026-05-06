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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="hero-orb w-[600px] h-[600px] top-[-10%] right-[-5%] bg-accent/[0.07] animate-orb-float-1" />
      <div className="hero-orb w-[400px] h-[400px] bottom-[10%] left-[-8%] bg-coral/[0.05] animate-orb-float-2" />
      <div className="hero-orb w-[300px] h-[300px] top-[40%] right-[20%] bg-accent/[0.04] animate-orb-float-3" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="container-main relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="h-px w-8 sm:w-12 bg-accent/40" />
              <p className="text-[11px] font-mono text-accent tracking-[0.18em] uppercase">
                {t('kicker')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] mb-6 md:mb-8">
              <span className="block text-txt">{t('title')}</span>
              <span className="block mt-2 sm:mt-3 md:mt-4 italic font-mono gradient-text-animated">
                {t('titleEm')}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <p className="text-sm sm:text-base md:text-lg text-txt-secondary max-w-xl leading-relaxed mb-10 md:mb-12 font-light opacity-90">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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

          <ScrollReveal delay={0.4}>
            <div className="mt-14 md:mt-18 flex items-center gap-6 md:gap-10 opacity-50">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse-soft" />
                <span className="text-[10px] font-mono text-txt-muted uppercase tracking-wider">Active</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-border" />
              <div className="hidden sm:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-txt-muted" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-[10px] font-mono text-txt-muted">Open Source</span>
              </div>
              <div className="hidden md:block h-3 w-px bg-border" />
              <div className="hidden md:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-txt-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <span className="text-[10px] font-mono text-txt-muted">Rust Native</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[9px] font-mono text-txt-muted uppercase tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-txt-muted to-transparent" />
      </div>
    </section>
  );
}
