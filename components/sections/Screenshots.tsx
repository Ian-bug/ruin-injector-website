'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

interface ScreenshotsProps {
  version: string;
}

export default function Screenshots({ version }: ScreenshotsProps) {
  const t = useTranslations('screenshots');

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-accent-primary rounded-2xl blur-3xl opacity-20" />
            <div className="relative bg-background-tertiary border-2 border-border-default rounded-2xl p-4 shadow-2xl">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/screenshot.png"
                  alt="Ruin DLL Injector Application Interface"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-text-tertiary">
                  Ruin DLL Injector {version} - Main Interface
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
