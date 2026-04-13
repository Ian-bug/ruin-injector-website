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
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent/20 bg-accent/[0.03] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-[11px] font-mono text-accent tracking-widest uppercase">
                v{version.replace('v', '')} — available now
              </span>
              <span className="text-txt-muted">|</span>
              <span className="text-[11px] font-mono text-txt-tertiary tracking-wide">stable release</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mb-4">
              <p className="text-xs font-mono text-accent/70 tracking-widest uppercase mb-4">
                {'>'} rust · egui · windows_api
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="block text-txt">{t('title').split(' for ')[0]}</span>
              <span className="block text-gradient-cyan mt-1 sm:mt-2 font-mono">
                {'<'}{t('title').split(' for ')[1] || 'Windows'}{'/>'}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm sm:text-base text-txt-secondary max-w-xl leading-relaxed mb-10 font-light">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="#download" className="group">
                <Button size="lg" variant="coral">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t('cta.download')}
                  <span className="text-coral/50 group-hover:text-coral/80 ml-1">_</span>
                </Button>
              </Link>
              <Link href="#docs" className="group">
                <Button size="lg" variant="secondary">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('cta.docs')}
                  <span className="text-txt-muted group-hover:text-txt-tertiary ml-1">_</span>
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.38}>
            <div className="mt-14 p-5 border border-border/60 bg-bg-secondary/50 backdrop-blur-sm max-w-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                <span className="text-[10px] font-mono text-txt-tertiary uppercase tracking-widest">terminal</span>
              </div>
              <code className="font-mono text-xs text-txt-secondary leading-relaxed block">
                <span className="text-accent">$</span> cargo build --release{'\n'}
                <span className="text-txt-muted">   Compiling ruin-injector v{version.replace('v', '')}</span>{'\n'}
                <span className="text-txt-muted">    Finished release [optimized] target(s)</span>{'\n'}
                <span className="text-green-400/70">    Generated ./target/release/ruin-injector.exe</span>{'\n'}
                <span className="text-accent animate-blink">$</span><span className="animate-blink">▌</span>
              </code>
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
