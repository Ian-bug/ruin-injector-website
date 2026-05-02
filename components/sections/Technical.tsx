'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const TECH_KEYS = ['rust', 'egui', 'windowsRs', 'serdeDirs'] as const;

export default function Technical() {
  const t = useTranslations('tech');

  return (
    <section id="tech" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-border/40 gap-px bg-border/20">
          {TECH_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <div className="bg-bg p-8 lg:p-6 group hover:bg-accent/[0.02] transition-colors duration-300">
                <h3 className="text-sm font-semibold font-mono text-txt mb-2 tracking-tight">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-xs text-txt-secondary leading-relaxed font-light">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 border border-border/40 bg-bg-secondary/50 overflow-hidden relative">
            <div className="aspect-video flex items-center justify-center flex-col gap-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary/50 to-bg-secondary/50" />
              <div className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.03), rgba(255,77,109,0.02))',
                }}
              />

              <svg className="w-12 h-12 text-txt-muted/30 relative z-10" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M112.5 68.3L78.8 34.6l-9.2-23.2L55.5 29.4 33.2 19.7l-4.4 25L3.5 58.3l18.5 17.8-4.3 26.4 22.3-9.7 27.3 9.7-4.3-25.3 49.5-8.9z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>

              <div className="relative z-10 text-center">
                <span className="text-[11px] font-mono text-txt-muted uppercase tracking-[0.12em] block">
                  {t('visualPlaceholder')}
                </span>
                <span className="text-[11px] font-mono text-txt-muted/50 mt-1 block">
                  {t('visualSubtext')}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
