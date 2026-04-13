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
      className="w-3.5 h-3.5 text-txt-muted"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
          <p className="text-sm text-txt-secondary font-light leading-relaxed">{t('quickStart.building.content')}</p>
          <code className="block px-4 py-3 bg-bg border border-border/60 text-sm text-accent font-mono tracking-tight">
            $ cargo build --release
          </code>
        </div>
      ),
    },
    {
      key: 'running',
      title: t('quickStart.running.title'),
      content: (
        <div className="space-y-3">
          <p className="text-sm text-txt-secondary font-light leading-relaxed">{t('quickStart.running.content')}</p>
          <p className="text-sm text-txt font-light">
            Double-click <code className="text-accent font-mono text-xs bg-accent/5 px-1.5 py-0.5 border border-accent/15">ruin-injector.exe</code> to launch.
          </p>
        </div>
      ),
    },
    {
      key: 'selectDll',
      title: t('usage.selectDll.title'),
      content: <p className="text-sm text-txt-secondary font-light leading-relaxed">{t('usage.selectDll.content')}</p>,
    },
    {
      key: 'selectProcess',
      title: t('usage.selectProcess.title'),
      content: <p className="text-sm text-txt-secondary font-light leading-relaxed">{t('usage.selectProcess.content')}</p>,
    },
    {
      key: 'inject',
      title: t('usage.inject.title'),
      content: <p className="text-sm text-txt-secondary font-light leading-relaxed">{t('usage.inject.content')}</p>,
    },
    {
      key: 'requirements',
      title: t('requirements.title'),
      content: (
        <ul className="space-y-2.5">
          {[t('requirements.windows'), t('requirements.admin'), t('requirements.dll')].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
              className="flex items-center gap-3 text-sm text-txt-secondary"
            >
              <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-light">{item}</span>
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
              className="pl-3 border-l border-border/40"
            >
              <p className="text-xs font-medium text-txt mb-1 font-mono">{t(`faq.${q}.question`)}</p>
              <p className="text-xs text-txt-secondary leading-relaxed font-light">{t(`faq.${q}.answer`)}</p>
            </motion.div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="docs" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-14">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">04</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {'//'} documentation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-md">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <Card hover={false} className="max-w-3xl mx-auto p-0 overflow-hidden">
            <div className="divide-y divide-border/40">
              {sections.map((s, index) => (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-5"
                >
                  <button
                    onClick={() => setOpen(open === s.key ? '' : s.key)}
                    className={`w-full flex items-center justify-between py-4 text-left cursor-pointer transition-colors group ${
                      open === s.key ? 'text-txt' : 'text-txt-secondary hover:text-txt'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-mono text-txt-muted w-4 select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-mono font-medium">{s.title}</span>
                    </div>
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
                        <div className="pb-5 pl-7">{s.content}</div>
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
              className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-hover transition-colors group"
            >
              <span>{t('viewFull')}</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
