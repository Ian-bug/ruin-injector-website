import React from 'react';
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
        'bg-background-secondary border-2 border-border-default rounded-xl p-6 transition-all duration-300 cursor-pointer',
        hover && 'hover:shadow-xl hover:border-accent-primary hover:-translate-y-1 hover:bg-background-tertiary',
        className
      )}
    >
      {children}
    </div>
  );
}
