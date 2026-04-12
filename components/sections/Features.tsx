'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { features } from '@/lib/data/features';

const iconPaths: Record<string, string> = {
  monitor: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  sparkles: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  terminal: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  feather: 'M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z M16 8L2 22 M17.5 15H9',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  cpu: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'alert-triangle': 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="section-y bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-3">
              {t('title').includes('Features') || t('title').includes('\u529F\u80FD') ? '' : ''}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-b from-txt to-txt/60 bg-clip-text text-transparent">
              {t('title')}
            </h2>
            <p className="text-txt-secondary max-w-md mx-auto text-sm">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.key} delay={i * 0.04}>
              <FeatureCard featureKey={feature.key} icon={iconPaths[feature.icon] || iconPaths.sparkles}>
                <h3 className="text-sm font-semibold text-txt mb-1.5">
                  {t(`list.${feature.key}.title`)}
                </h3>
                <p className="text-xs text-txt-secondary leading-relaxed">
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

function FeatureCard({ children, icon, featureKey }: { children: React.ReactNode; icon: string; featureKey: string }) {
  return (
    <div className="group relative p-5 rounded-xl bg-bg-tertiary/30 border border-border/50 transition-all duration-300 hover:border-border-hover hover:bg-bg-tertiary/60 cursor-default overflow-hidden">
      <div className="pointer-events-none absolute -left-[1px] -top-[1px] h-[6px] w-[6px] border-l-2 border-t-2 border-accent/0 transition-all duration-300 group-hover:border-accent/60" />
      <div className="pointer-events-none absolute -right-[1px] -top-[1px] h-[6px] w-[6px] border-r-2 border-t-2 border-accent/0 transition-all duration-300 group-hover:border-accent/60" />
      <div className="pointer-events-none absolute -left-[1px] -bottom-[1px] h-[6px] w-[6px] border-l-2 border-b-2 border-accent/0 transition-all duration-300 group-hover:border-accent/60" />
      <div className="pointer-events-none absolute -right-[1px] -bottom-[1px] h-[6px] w-[6px] border-r-2 border-b-2 border-accent/0 transition-all duration-300 group-hover:border-accent/60" />

      <div className="relative z-10 space-y-3">
        <div className="w-9 h-9 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/10 group-hover:border-accent/20">
          <svg className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
}
