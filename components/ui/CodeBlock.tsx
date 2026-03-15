import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({ children, language, className }: CodeBlockProps) {
  return (
    <div className={cn('relative group', className)}>
      <pre className="bg-background-secondary border-2 border-border rounded-lg p-4 overflow-x-auto">
        <code className={`font-mono text-sm text-text-secondary`}>
          {children}
        </code>
      </pre>
      {language && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-background-tertiary rounded text-xs text-text-tertiary font-mono">
          {language}
        </div>
      )}
    </div>
  );
}
