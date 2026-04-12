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
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,65,65,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-main relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-medium text-accent tracking-wide">
                v{version.replace('v', '')} &mdash; Latest Release
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-txt-secondary max-w-xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="#download" className="group w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('cta.download')}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Button>
              </Link>
              <Link href="#docs" className="group w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  {t('cta.docs')}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['Rust', 'egui', 'Windows API'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-bg-tertiary/50 border border-border/50 text-[11px] text-txt-tertiary font-medium tracking-wide uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-border-hover flex items-start justify-center pt-1.5 animate-bounce">
          <div className="w-1 h-1.5 rounded-full bg-txt-muted" />
        </div>
      </div>
    </section>
  );
}
