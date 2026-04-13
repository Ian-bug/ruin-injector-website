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
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-mono text-sm tracking-wide uppercase';

  const variants = {
    primary:
      'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] active:scale-[0.98]',
    secondary:
      'bg-bg-tertiary/60 text-txt-secondary border border-border hover:border-border-hover hover:text-txt hover:bg-bg-elevated/50',
    ghost:
      'bg-transparent text-txt-secondary hover:text-accent hover:bg-accent/5',
    coral:
      'bg-coral/10 text-coral border border-coral/30 hover:bg-coral/20 hover:border-coral/50 hover:shadow-[0_0_20px_rgba(255,77,109,0.15)] active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-xs gap-2',
    lg: 'px-8 py-3.5 text-sm gap-2.5',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
