'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

interface HeroProps {
  version: string;
}

export default function Hero({ version }: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-tertiary border-2 border-accent-primary/20">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="text-sm font-medium text-accent-primary">
                  {version}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">{t('title')}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-text-secondary max-w-2xl">
                {t('subtitle')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="#download">
                  <Button size="lg" className="group">
                    {t('cta.download')}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </Button>
                </Link>
                <Link href="#docs">
                  <Button size="lg" variant="outline">
                    {t('cta.docs')}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Tech Stack Badges */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Rust', 'egui', 'Windows API'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-background-tertiary border border-border-accent text-sm text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Screenshot/Image */}
          <ScrollReveal delay={0.5} direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-background-tertiary border-2 border-border-default rounded-2xl p-4 shadow-2xl animate-float">
                <div className="aspect-square bg-background-elevated rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-accent-primary rounded-2xl flex items-center justify-center p-6 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="text-white">
                        <path fill="currentColor" d="m11.15 15.18l-1.42-1.41l1.42-1.42l1.41 1.42l1.41-1.42l-1.41-1.41l1.41-1.41l1.42 1.41l1.41-1.41l-2.83-2.83l-7.07 7.07l2.83 2.83zM3.08 19l3.12-3.11l-2.12-2.12l9.89-9.9L16.1 6l1.4-1.42l-1.4-1.42l1.4-1.41L21.75 6l-1.41 1.4L18.92 6L17.5 7.4l2.13 2.13l-9.9 9.89l-2.12-2.12l-4.53 4.54z"/>
                      </svg>
                    </div>
                    <p className="text-text-secondary text-lg">Ruin DLL Injector</p>
                    <p className="text-sm text-text-tertiary">{version}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-tertiary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
