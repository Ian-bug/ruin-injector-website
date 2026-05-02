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

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16">
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

        <div className="space-y-0">
          {STEP_KEYS.map((stepKey, i) => (
            <ScrollReveal key={stepKey} delay={i * 0.06}>
              <div className="group grid grid-cols-[64px_1fr] gap-6 sm:gap-8 py-9 border-b border-border/40 last:border-b-0 items-start hover:bg-accent/[0.01] transition-colors duration-300 px-2 -mx-2 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-mono text-xl font-bold text-accent border border-border/60 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-txt mb-2 font-mono tracking-tight">
                    {t(`steps.${stepKey}.title`)}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed font-light">
                    {t(`steps.${stepKey}.description`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
