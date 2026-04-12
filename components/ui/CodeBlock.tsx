import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({ children, language, className }: CodeBlockProps) {
  return (
    <div className={cn('relative', className)}>
      <pre className="bg-bg border border-border rounded-lg p-4 overflow-x-auto">
        <code className="font-mono text-sm text-txt-secondary leading-relaxed">{children}</code>
      </pre>
      {language && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-bg-tertiary border border-border rounded text-[11px] text-txt-tertiary font-mono uppercase tracking-wider">
          {language}
        </div>
      )}
    </div>
  );
}
