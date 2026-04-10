import { cn } from '@lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface CardBadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export const CardBadge = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'flex-center flex h-7 rounded-full bg-white/80 px-3 text-base leading-6 font-medium text-black',
        className
      )}
      {...props}
    />
  )
);
