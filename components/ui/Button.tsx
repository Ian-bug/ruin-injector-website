'use client';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-mono text-sm tracking-tight relative overflow-hidden';

  const variants = {
    primary:
      'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(0,229,255,0.18)] active:scale-[0.97] hover:-translate-y-px',
    secondary:
      'bg-bg-tertiary/60 text-txt-secondary border border-border hover:border-border-hover hover:text-txt hover:bg-bg-elevated/50 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:scale-[0.97] hover:-translate-y-px',
    ghost:
      'bg-transparent text-txt-secondary hover:text-accent hover:bg-accent/5 active:scale-[0.98]',
    coral:
      'bg-coral/10 text-coral border border-coral/30 hover:bg-coral/20 hover:border-coral/50 hover:shadow-[0_0_24px_rgba(255,77,109,0.18)] active:scale-[0.97] hover:-translate-y-px',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5 rounded-lg',
    md: 'px-6 py-2.5 text-xs gap-2 rounded-lg',
    lg: 'px-8 py-3.5 text-sm gap-2.5 rounded-xl',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
