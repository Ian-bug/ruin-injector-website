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
        'relative overflow-hidden rounded-xl',
        'bg-bg-secondary/70 backdrop-blur-md border border-border/60',
        'transition-all duration-300',
        hover && 'hover:border-border-hover/80 hover:bg-bg-tertiary/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
