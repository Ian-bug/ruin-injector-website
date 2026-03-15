'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { features } from '@/lib/data/features';

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="section-padding bg-background-secondary">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.key} delay={index * 0.1}>
              <Card>
                <div className="space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">
                    {t(`list.${feature.key}.title`)}
                  </h3>
                  <p className="text-text-secondary">
                    {t(`list.${feature.key}.description`)}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
