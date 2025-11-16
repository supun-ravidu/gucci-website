'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={cn(
          'rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('p-8', className)} {...props} />;
  }
);

CardContent.displayName = 'CardContent';
