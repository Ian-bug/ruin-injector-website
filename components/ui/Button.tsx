'use client';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
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
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]';

  const variants = {
    primary:
      'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 hover:shadow-accent/35 hover:brightness-110',
    secondary:
      'bg-bg-tertiary/80 hover:bg-bg-elevated text-txt border border-border hover:border-border-hover',
    ghost:
      'bg-transparent hover:bg-bg-tertiary text-txt-secondary hover:text-txt',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2.5',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
