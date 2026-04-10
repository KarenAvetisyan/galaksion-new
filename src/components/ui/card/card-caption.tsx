import { cn } from '@lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface CardCaptionProps extends HTMLAttributes<HTMLSpanElement> {}

export const CardCaption = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('text-base font-light text-white/80 md:font-medium', className)}
      {...props}
    />
  )
);
