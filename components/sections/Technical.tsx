'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

const TECH_KEYS = ['rust', 'egui', 'windowsRs', 'serdeDirs'] as const;

export default function Technical() {
  const t = useTranslations('tech');

  return (
    <section id="tech" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="hero-orb w-[300px] h-[300px] bottom-[15%] -right-[5%] bg-coral/[0.03] animate-orb-float-3" />
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.04) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16 md:mb-20">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">03</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {t('label')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-md">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-border/30 gap-px bg-border/10 rounded-xl overflow-hidden">
          {TECH_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <div className="bg-bg p-7 lg:p-6 group hover:bg-accent/[0.02] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-500" />
                <h3 className="text-sm font-semibold font-mono text-txt mb-2 tracking-tight group-hover:text-accent/80 transition-colors duration-300">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-xs text-txt-secondary leading-relaxed font-light opacity-80">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 rounded-xl overflow-hidden relative group border border-border/30" style={{
            background: 'linear-gradient(135deg, rgba(12,12,18,0.6) 0%, rgba(6,6,10,0.8) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), 0 8px 32px rgba(0,0,0,0.3)',
          }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-bg-tertiary/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-coral/60 hover:bg-coral/80 transition-colors cursor-pointer" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 hover:bg-yellow-500/80 transition-colors cursor-pointer" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 hover:bg-green-500/80 transition-colors cursor-pointer" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] font-mono text-txt-muted tracking-wide">ruin-injector.exe</span>
              </div>
              <div className="w-16" />
            </div>

            <div className="relative p-2 md:p-3">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
              <div className="rounded-lg overflow-hidden border border-border/20 group-hover:border-border/40 transition-colors duration-500">
                <Image
                  src="/images/screenshot.png"
                  alt="Ruin DLL Injector Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="px-4 py-2.5 border-t border-border/20 flex items-center justify-between bg-bg-tertiary/10">
              <span className="text-[10px] font-mono text-txt-muted">Rust + egui</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse-soft" />
                <span className="text-[10px] font-mono text-txt-tertiary">native</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
