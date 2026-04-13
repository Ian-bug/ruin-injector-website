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
        'bg-bg-secondary/80 backdrop-blur-sm border border-border transition-all duration-300 relative overflow-hidden',
        hover && 'hover:border-border-hover hover:bg-bg-tertiary/50',
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}
