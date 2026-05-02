'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { features } from '@/lib/data/features';

const iconPaths: Record<string, string> = {
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'alert-triangle': 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
  terminal: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">01</span>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border/40">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.key} delay={i * 0.06}>
              <FeatureCard
                icon={iconPaths[feature.icon] || iconPaths.rocket}
                index={i}
              >
                <span className="text-[10px] font-mono text-txt-muted/50 uppercase tracking-[0.12em] block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold text-txt mb-2 font-mono tracking-tight">
                  {t(`list.${feature.key}.title`)}
                </h3>
                <p className="text-xs text-txt-secondary leading-relaxed font-light">
                  {t(`list.${feature.key}.description`)}
                </p>
              </FeatureCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ children, icon, index }: { children: React.ReactNode; icon: string; index: number }) {
  return (
    <div className="group relative p-7 sm:p-8 bg-bg hover:bg-accent/[0.02] transition-all duration-300 cursor-default overflow-hidden">
      <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="space-y-3">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
