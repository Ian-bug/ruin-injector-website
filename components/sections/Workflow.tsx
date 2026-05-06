'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STEP_KEYS = [
  'processDiscovery',
  'uwpDetectionStep',
  'architectureCheck',
  'memoryAllocation',
  'remoteThread',
  'cleanup',
] as const;

export default function Workflow() {
  const t = useTranslations('workflow');

  return (
    <section id="how-it-works" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />

      <div className="hero-orb w-[400px] h-[400px] top-[30%] -left-[8%] bg-accent/[0.03] animate-orb-float-1" />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.03) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16 md:mb-20">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">02</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {t('label')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-xl">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[28px] sm:left-[36px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/20 via-border/40 to-transparent hidden sm:block" />

          <div className="space-y-0">
            {STEP_KEYS.map((stepKey, i) => (
              <ScrollReveal key={stepKey} delay={i * 0.06}>
                <div className="group grid grid-cols-[56px_1fr] gap-5 sm:gap-8 py-7 md:py-9 border-b border-border/30 last:border-b-0 items-start hover:bg-accent/[0.015] transition-all duration-300 px-3 -mx-3 rounded-lg relative">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center font-mono text-base sm:text-xl font-bold text-accent border border-border/50 group-hover:border-accent/35 group-hover:bg-accent/5 transition-all duration-300 rounded-lg group-hover:shadow-[0_0_12px_rgba(0,229,255,0.08)] relative z-10">
                    {i + 1}
                  </div>
                  <div className="pt-1.5 sm:pt-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-txt mb-1.5 font-mono tracking-tight group-hover:text-accent/90 transition-colors duration-300">
                      {t(`steps.${stepKey}.title`)}
                    </h3>
                    <p className="text-sm text-txt-secondary leading-relaxed font-light opacity-80">
                      {t(`steps.${stepKey}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
