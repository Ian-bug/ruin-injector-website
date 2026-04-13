'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

interface ScreenshotsProps {
  version: string;
}

export default function Screenshots({ version }: ScreenshotsProps) {
  const t = useTranslations('screenshots');

  return (
    <section className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/50 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-14">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">02</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {'//'} interface
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-md">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-8 bg-accent/[0.03] rounded-sm blur-3xl" />

            <div className="relative border border-border/60 bg-bg-secondary/90 backdrop-blur-sm overflow-hidden group">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-bg-tertiary/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10px] font-mono text-txt-muted tracking-wide">ruin-injector.exe — {version}</span>
                </div>
                <div className="w-16" />
              </div>

              <div className="relative p-2">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="rounded overflow-hidden border border-border/30">
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

              <div className="px-4 py-2.5 border-t border-border/20 flex items-center justify-between">
                <span className="text-[10px] font-mono text-txt-muted">v{version}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] font-mono text-txt-tertiary">active</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
