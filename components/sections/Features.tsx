'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
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

const LAYOUT = [
  { col: 'md:col-span-2', row: 'md:row-span-2', size: 'hero' },
  { col: 'md:col-span-1', row: 'md:row-span-1', size: 'default' },
  { col: 'md:col-span-1', row: 'md:row-span-1', size: 'default' },
  { col: 'md:col-span-1', row: 'md:row-span-1', size: 'default' },
  { col: 'md:col-span-1', row: 'md:row-span-1', size: 'default' },
  { col: 'md:col-span-2', row: 'md:row-span-1', size: 'wide' },
] as const;

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div className="hero-orb w-[350px] h-[350px] top-[20%] -right-[10%] bg-accent/[0.03] animate-orb-float-2" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-16 md:mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 [grid-template-rows:repeat(4,minmax(160px,auto))]">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.key} delay={i * 0.08}>
              <FeatureCard
                icon={iconPaths[feature.icon] || iconPaths.rocket}
                index={i}
                colSpan={LAYOUT[i].col}
                rowSpan={LAYOUT[i].row}
                size={LAYOUT[i].size}
                title={t(`list.${feature.key}.title`)}
                description={t(`list.${feature.key}.description`)}
                featured={i === 0 || i === 3}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  index,
  colSpan,
  rowSpan,
  size,
  title,
  description,
  featured,
}: {
  icon: string;
  index: number;
  colSpan: string;
  rowSpan: string;
  size: 'hero' | 'wide' | 'default';
  title: string;
  description: string;
  featured?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const isHero = size === 'hero';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      className={`group relative ${colSpan} ${rowSpan} rounded-2xl overflow-hidden cursor-default transition-all duration-500`}
      style={{
        background: 'linear-gradient(135deg, rgba(12,12,18,0.92) 0%, rgba(6,6,10,0.97) 100%)',
        border: '1px solid rgba(30,30,42,0.5)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.03), 0 4px 24px rgba(0,0,0,0.25), 0 0 0 0 rgba(0,229,255,0)',
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, rgba(0, 229, 255, 0.06), transparent 60%)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          border: '1px solid rgba(0, 229, 255, 0.18)',
          borderRadius: '1rem',
          boxShadow: '0 0 20px rgba(0, 229, 255, 0.05)',
        }}
      />

      <div className={`relative z-10 h-full flex flex-col justify-between ${isHero ? 'p-8 md:p-10' : 'p-6 md:p-7'}`}>
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] font-mono text-txt-muted/40 uppercase tracking-[0.15em]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div
              className={`flex items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                isHero
                  ? 'w-12 h-12 border-border/50 bg-accent/[0.05] group-hover:border-accent/25 group-hover:bg-accent/10'
                  : 'w-10 h-10 border-border/40 bg-bg-elevated/60 group-hover:border-accent/20 group-hover:bg-accent/[0.04]'
              }`}
            >
              <svg
                className={`${isHero ? 'w-6 h-6' : 'w-5 h-5'} text-txt-tertiary transition-all duration-300 group-hover:text-accent/80 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={icon} />
              </svg>
            </div>
          </div>

          <h3 className={`font-bold text-txt tracking-tight mb-2.5 ${isHero ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
            {title}
          </h3>
          <p className={`text-txt-secondary leading-relaxed ${isHero ? 'text-sm max-w-sm' : 'text-xs md:text-sm'} opacity-80`}>
            {description}
          </p>
        </div>

        {featured && (
          <div className="mt-6 flex items-center gap-2 text-accent/40 group-hover:text-accent/70 transition-colors duration-300">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">core feature</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent group-hover:via-accent/30 transition-all duration-500" />
    </div>
  );
}
