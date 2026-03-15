'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CodeBlock from '@/components/ui/CodeBlock';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-border-default last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left hover:text-accent-primary transition-colors"
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-text-secondary">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Documentation() {
  const t = useTranslations('documentation');
  const [openItems, setOpenItems] = useState<string[]>(['building']);

  const toggleItem = (key: string) => {
    setOpenItems(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const sections = [
    {
      key: 'building',
      title: t('quickStart.building.title'),
      content: (
        <div className="space-y-4">
          <p>{t('quickStart.building.content')}</p>
          <div className="bg-background-tertiary border border-border-default rounded-lg p-4">
            <p className="text-sm text-text-tertiary mb-2">For developers:</p>
            <code className="text-accent-secondary">cargo build --release</code>
          </div>
        </div>
      ),
    },
    {
      key: 'running',
      title: t('quickStart.running.title'),
      content: (
        <div className="space-y-4">
          <p>{t('quickStart.running.content')}</p>
          <div className="bg-background-tertiary border border-border-default rounded-lg p-4">
            <p className="text-sm text-text-tertiary mb-2">Simply:</p>
            <p className="text-text-primary font-medium">Double-click <code className="text-accent-secondary">ruin-injector.exe</code></p>
          </div>
        </div>
      ),
    },
    {
      key: 'selectDll',
      title: t('usage.selectDll.title'),
      content: <p>{t('usage.selectDll.content')}</p>,
    },
    {
      key: 'selectProcess',
      title: t('usage.selectProcess.title'),
      content: <p>{t('usage.selectProcess.content')}</p>,
    },
    {
      key: 'inject',
      title: t('usage.inject.title'),
      content: <p>{t('usage.inject.content')}</p>,
    },
    {
      key: 'requirements',
      title: t('requirements.title'),
      content: (
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            {t('requirements.windows')}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            {t('requirements.admin')}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">✓</span>
            {t('requirements.dll')}
          </li>
        </ul>
      ),
    },
    {
      key: 'faq',
      title: t('faq.title'),
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-white mb-2">{t('faq.q1.question')}</p>
            <p className="text-sm">{t('faq.q1.answer')}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">{t('faq.q2.question')}</p>
            <p className="text-sm">{t('faq.q2.answer')}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">{t('faq.q3.question')}</p>
            <p className="text-sm">{t('faq.q3.answer')}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">{t('faq.q4.question')}</p>
            <p className="text-sm">{t('faq.q4.answer')}</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="docs" className="section-padding">
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
          <Card className="max-w-4xl mx-auto">
            <div className="divide-y divide-border">
              {sections.map((section) => (
                <AccordionItem
                  key={section.key}
                  title={section.title}
                  isOpen={openItems.includes(section.key)}
                  onClick={() => toggleItem(section.key)}
                >
                  {section.content}
                </AccordionItem>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-8">
            <a
              href="https://github.com/Ian-bug/ruin-injector"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors font-medium"
            >
              {t('viewFull')}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
