'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const offset = 40;
  const variants = {
    up: { hidden: { y: offset, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    down: { hidden: { y: -offset, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -offset, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: offset, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
