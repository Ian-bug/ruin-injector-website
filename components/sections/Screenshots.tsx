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
    <section className="section-y">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('title')}</h2>
            <p className="text-txt-secondary max-w-xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl" />
            <div className="relative bg-bg-secondary border border-border rounded-xl p-3 shadow-2xl">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/screenshot.png"
                  alt="Ruin DLL Injector Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-txt-tertiary">
                Ruin DLL Injector {version}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
