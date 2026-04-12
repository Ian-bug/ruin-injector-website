'use client';

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-bg-secondary border border-border rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-border-hover hover:bg-bg-tertiary/50',
        className
      )}
    >
      {children}
    </div>
  );
}
