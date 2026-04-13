import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({ children, language, className }: CodeBlockProps) {
  return (
    <div className={cn('relative group', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <pre className="bg-bg/90 border border-border/80 rounded-sm p-4 overflow-x-auto relative">
        <code className="font-mono text-[13px] text-txt-secondary leading-relaxed tracking-tight">
          {children}
        </code>
      </pre>
      {language && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-bg-tertiary border border-border/60 rounded-sm text-[10px] text-txt-tertiary font-mono uppercase tracking-widest">
          {language}
        </div>
      )}
    </div>
  );
}
