'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CodeBlock from '@/components/ui/CodeBlock';

export default function Technical() {
  const t = useTranslations('technical');

  const techStack = [
    { name: 'Rust', color: 'bg-orange-500' },
    { name: 'egui (GUI)', color: 'bg-blue-500' },
    { name: 'Windows API', color: 'bg-blue-600' },
    { name: 'serde', color: 'bg-green-500' },
    { name: 'chrono', color: 'bg-purple-500' },
    { name: 'rfd (File Dialog)', color: 'bg-yellow-500' },
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

  return (
    <section className="section-padding bg-background-secondary">
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

        {/* Tech Stack */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t('techStack')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-background-tertiary border-2 border-border rounded-lg hover:border-accent-blue transition-colors"
                >
                  <span className={`w-3 h-3 rounded-full ${tech.color}`} />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Injection Process */}
          <ScrollReveal delay={0.2}>
            <Card>
              <h3 className="text-xl font-bold mb-4">{t('process')}</h3>
              <ol className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Process Discovery - Enumerate running processes</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>UWP Detection - Identify UWP apps for informed decisions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Architecture Validation - Ensure 32/64-bit compatibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    4
                  </span>
                  <span>Process Access - Open with required permissions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    5
                  </span>
                  <span>Memory Allocation - Allocate memory in target</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    6
                  </span>
                  <span>DLL Path Injection - Write DLL path to memory</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    7
                  </span>
                  <span>Remote Thread Creation - Create execution thread</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue text-white text-sm flex items-center justify-center font-bold">
                    8
                  </span>
                  <span>Cleanup - Free memory and close handles</span>
                </li>
              </ol>
            </Card>
          </ScrollReveal>

          {/* Windows APIs */}
          <ScrollReveal delay={0.3}>
            <Card>
              <h3 className="text-xl font-bold mb-4">{t('apis')}</h3>
              <div className="flex flex-wrap gap-2">
                {apis.map((api) => (
                  <code
                    key={api}
                    className="px-3 py-1 bg-background-primary rounded text-sm text-accent-cyan font-mono"
                  >
                    {api}
                  </code>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Animation System */}
          <ScrollReveal delay={0.4}>
            <Card>
              <h3 className="text-xl font-bold mb-4">{t('animation')}</h3>
              <CodeBlock language="rust">
{`trait Animatable {
    fn update(&mut self, dt: f32);
    fn is_complete(&self) -> bool;
}

const ANIMATION_DEFAULT_SPEED: f32 = 0.12;
const PULSE_SPEED_DEFAULT: f32 = 0.03;

struct Fade { current: f32, target: f32, speed: f32 }
struct Scale { current: f32, target: f32, speed: f32 }
struct Slide { current: f32, target: f32, speed: f32 }
struct Pulse { phase: f32, speed: f32, amplitude: f32, base: f32 }`}
              </CodeBlock>
            </Card>
          </ScrollReveal>

          {/* Error Handling */}
          <ScrollReveal delay={0.5}>
            <Card>
              <h3 className="text-xl font-bold mb-4">{t('errorHandling')}</h3>
              <CodeBlock language="rust">
{`pub enum InjectionError {
    ProcessNotFound(String),
    OpenProcessFailed(String),
    MemoryAllocationFailed(String),
    WriteMemoryFailed(String),
    CreateRemoteThreadFailed(String),
    InvalidPath(String),
    InvalidProcessName(String),
    PathTooLong(String),
    DllLoadFailed(String),
    ThreadWaitFailed(String),
    UwpProcessNotSupported(String),
}`}
              </CodeBlock>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
