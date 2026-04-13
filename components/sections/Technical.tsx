'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CodeBlock from '@/components/ui/CodeBlock';

export default function Technical() {
  const t = useTranslations('technical');

  const techStack = [
    { name: 'Rust', color: '#DEA584' },
    { name: 'egui', color: '#00E5FF' },
    { name: 'Windows API', color: '#0078D4' },
    { name: 'serde', color: '#00D084' },
    { name: 'chrono', color: '#A855F7' },
    { name: 'rfd', color: '#F59E0B' },
  ];

  const apis = [
    'CreateToolhelp32Snapshot',
    'Process32First / Process32Next',
    'OpenProcess',
    'IsWow64Process',
    'QueryFullProcessImageNameW',
    'VirtualAllocEx',
    'WriteProcessMemory',
    'GetProcAddress',
    'CreateRemoteThread',
    'LoadLibraryW',
    'CloseHandle',
  ];

  const steps = [
    ['DISCOVER', 'Enumerate running processes via snapshot'],
    ['DETECT', 'Identify UWP apps and architecture'],
    ['VALIDATE', 'Ensure 32/64-bit compatibility match'],
    ['ACCESS', 'Open target process with required perms'],
    ['ALLOCATE', 'Allocate memory in target process space'],
    ['WRITE', 'Inject DLL path into allocated memory'],
    ['EXECUTE', 'Create remote thread to load library'],
    ['CLEANUP', 'Free handles and release resources'],
  ];

  return (
    <section id="tech" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container-main relative z-10">
        <ScrollReveal>
          <div className="flex items-start gap-4 mb-14">
            <div className="hidden sm:block pt-2">
              <span className="text-[10px] font-mono text-accent/50 tracking-widest">03</span>
            </div>
            <div>
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.25em] mb-3">
                {'//'} architecture
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-txt">
                {t('title')}
              </h2>
              <p className="text-sm text-txt-secondary mt-3 max-w-md">{t('subtitle')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-6 border border-border/40 bg-bg/50">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 bg-bg-secondary/80 border border-border/60"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-xs font-mono text-txt-secondary">{tech.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-3">
          <ScrollReveal delay={0.12}>
            <Card className="h-full p-0 overflow-hidden">
              <div className="px-5 py-4 border-b border-border/40 flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-coral/10 border border-coral/20">
                  <span className="text-[10px] font-mono text-coral font-bold">01</span>
                </div>
                <h3 className="text-sm font-semibold font-mono text-txt">{t('process')}</h3>
              </div>
              <div className="p-5 space-y-3">
                {steps.map(([label, desc], i) => (
                  <div key={i} className="flex gap-3 group">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[9px] font-mono text-txt-muted border border-border/40 mt-0.5 group-hover:border-accent/30 group-hover:text-accent/60 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono text-accent/70 block">{label}</span>
                      <span className="text-xs text-txt-secondary leading-relaxed">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <Card className="h-full p-0 overflow-hidden">
              <div className="px-5 py-4 border-b border-border/40 flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-accent/10 border border-accent/20">
                  <span className="text-[10px] font-mono text-accent font-bold">02</span>
                </div>
                <h3 className="text-sm font-semibold font-mono text-txt">{t('apis')}</h3>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  {apis.map((api) => (
                    <code
                      key={api}
                      className="px-2 py-1 bg-bg/80 text-[11px] text-txt-tertiary font-mono border border-border/40 hover:border-accent/20 hover:text-accent/70 transition-colors cursor-default"
                    >
                      {api}
                    </code>
                  ))}
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full p-0 overflow-hidden">
              <div className="px-5 py-4 border-b border-border/40 flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-accent/10 border border-accent/20">
                  <span className="text-[10px] font-mono text-accent font-bold">03</span>
                </div>
                <h3 className="text-sm font-semibold font-mono text-txt">{t('animation')}</h3>
              </div>
              <div className="p-5">
                <CodeBlock language="rust">{`trait Animatable {
    fn update(&mut self, dt: f32);
    fn is_complete(&self) -> bool;
}

struct Fade { current: f32, target: f32 }
struct Scale { current: f32, target: f32 }
struct Pulse { phase: f32, speed: f32 }`}</CodeBlock>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <Card className="h-full p-0 overflow-hidden">
              <div className="px-5 py-4 border-b border-border/40 flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-coral/10 border border-coral/20">
                  <span className="text-[10px] font-mono text-coral font-bold">04</span>
                </div>
                <h3 className="text-sm font-semibold font-mono text-txt">{t('errorHandling')}</h3>
              </div>
              <div className="p-5">
                <CodeBlock language="rust">{`pub enum InjectionError {
    ProcessNotFound(String),
    OpenProcessFailed(String),
    MemoryAllocationFailed(String),
    WriteMemoryFailed(String),
    CreateRemoteThreadFailed(String),
    ArchitectureMismatch(String),
    UwpProcessNotSupported(String),
}`}</CodeBlock>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
