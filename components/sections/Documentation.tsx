'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="w-4 h-4 text-txt-tertiary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

const itemVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      opacity: { duration: 0.25, delay: 0.05 },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
      opacity: { duration: 0.15 },
    },
  },
};

export default function Documentation() {
  const t = useTranslations('documentation');
  const [open, setOpen] = useState<string>('building');

  const sections = [
    {
      key: 'building',
      title: t('quickStart.building.title'),
      content: (
        <div className="space-y-3">
          <p className="text-sm text-txt-secondary">{t('quickStart.building.content')}</p>
          <code className="block px-3 py-2 bg-bg rounded-lg text-sm text-accent font-mono border border-border/50">
            cargo build --release
          </code>
        </div>
      ),
    },
    {
      key: 'running',
      title: t('quickStart.running.title'),
      content: (
        <div className="space-y-3">
          <p className="text-sm text-txt-secondary">{t('quickStart.running.content')}</p>
          <p className="text-sm text-txt">
            Double-click <code className="text-accent font-mono">ruin-injector.exe</code>
          </p>
        </div>
      ),
    },
    {
      key: 'selectDll',
      title: t('usage.selectDll.title'),
      content: <p className="text-sm text-txt-secondary">{t('usage.selectDll.content')}</p>,
    },
    {
      key: 'selectProcess',
      title: t('usage.selectProcess.title'),
      content: <p className="text-sm text-txt-secondary">{t('usage.selectProcess.content')}</p>,
    },
    {
      key: 'inject',
      title: t('usage.inject.title'),
      content: <p className="text-sm text-txt-secondary">{t('usage.inject.content')}</p>,
    },
    {
      key: 'requirements',
      title: t('requirements.title'),
      content: (
        <ul className="space-y-2">
          {[t('requirements.windows'), t('requirements.admin'), t('requirements.dll')].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
              className="flex items-center gap-2 text-sm text-txt-secondary"
            >
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      key: 'faq',
      title: t('faq.title'),
      content: (
        <div className="space-y-4">
          {(['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const).map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.08 + i * 0.04 }}
            >
              <p className="text-sm font-medium text-txt mb-1">{t(`faq.${q}.question`)}</p>
              <p className="text-xs text-txt-secondary leading-relaxed">{t(`faq.${q}.answer`)}</p>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="docs" className="section-y">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-b from-txt to-txt/60 bg-clip-text text-transparent">
              {t('title')}
            </h2>
            <p className="text-txt-secondary max-w-xl mx-auto text-sm">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Card hover={false} className="max-w-3xl mx-auto p-0 overflow-hidden">
            <div className="divide-y divide-border">
              {sections.map((s, index) => (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="px-6"
                >
                  <button
                    onClick={() => setOpen(open === s.key ? '' : s.key)}
                    className={`w-full flex items-center justify-between py-4 text-left cursor-pointer transition-colors ${
                      open === s.key ? 'text-txt' : 'text-txt-secondary hover:text-txt'
                    }`}
                  >
                    <span className="text-sm font-medium">{s.title}</span>
                    <Chevron open={open === s.key} />
                  </button>

                  <AnimatePresence initial={false}>
                    {open === s.key && (
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="pb-5">{s.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/Ian-bug/ruin-injector"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium group"
            >
              {t('viewFull')}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
