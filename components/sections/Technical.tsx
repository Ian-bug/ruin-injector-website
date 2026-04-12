'use client';

import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CodeBlock from '@/components/ui/CodeBlock';

export default function Technical() {
  const t = useTranslations('technical');

  const techStack = [
    { name: 'Rust', color: 'bg-orange-500' },
    { name: 'egui', color: 'bg-blue-500' },
    { name: 'Windows API', color: 'bg-sky-600' },
    { name: 'serde', color: 'bg-emerald-500' },
    { name: 'chrono', color: 'bg-violet-500' },
    { name: 'rfd', color: 'bg-amber-500' },
  ];

  const apis = [
    'CreateToolhelp32Snapshot',
    'Process32First/Next',
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
    'Process Discovery - Enumerate running processes',
    'UWP Detection - Identify UWP apps',
    'Architecture Validation - Ensure 32/64-bit compatibility',
    'Process Access - Open with required permissions',
    'Memory Allocation - Allocate memory in target',
    'DLL Path Injection - Write DLL path to memory',
    'Remote Thread Creation - Create execution thread',
    'Cleanup - Free memory and close handles',
  ];

  return (
    <section className="section-y bg-bg-secondary">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('title')}</h2>
            <p className="text-txt-secondary max-w-xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 bg-bg-tertiary border border-border rounded-lg text-sm"
              >
                <span className={`w-2 h-2 rounded-full ${tech.color}`} />
                <span className="text-txt-secondary font-medium">{tech.name}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-4">
          <ScrollReveal delay={0.15}>
            <Card className="h-full">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-accent-soft text-accent text-xs flex items-center justify-center font-bold">1</span>
                {t('process')}
              </h3>
              <ol className="space-y-2.5">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-txt-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-bg-tertiary text-[10px] text-txt-tertiary flex items-center justify-center font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full">
              <h3 className="text-sm font-semibold mb-4">{t('apis')}</h3>
              <div className="flex flex-wrap gap-1.5">
                {apis.map((api) => (
                  <code
                    key={api}
                    className="px-2 py-1 bg-bg rounded text-xs text-txt-tertiary font-mono border border-border/50"
                  >
                    {api}
                  </code>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Card className="h-full">
              <h3 className="text-sm font-semibold mb-4">{t('animation')}</h3>
              <CodeBlock language="rust">{`trait Animatable {
    fn update(&mut self, dt: f32);
    fn is_complete(&self) -> bool;
}

struct Fade { current: f32, target: f32 }
struct Scale { current: f32, target: f32 }
struct Pulse { phase: f32, speed: f32 }`}</CodeBlock>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card className="h-full">
              <h3 className="text-sm font-semibold mb-4">{t('errorHandling')}</h3>
              <CodeBlock language="rust">{`pub enum InjectionError {
    ProcessNotFound(String),
    OpenProcessFailed(String),
    MemoryAllocationFailed(String),
    WriteMemoryFailed(String),
    CreateRemoteThreadFailed(String),
    ArchitectureMismatch(String),
    UwpProcessNotSupported(String),
}`}</CodeBlock>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
