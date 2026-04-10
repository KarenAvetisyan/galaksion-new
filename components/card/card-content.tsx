import { cn } from '@lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-1 flex-col gap-6 p-4 md:gap-6 md:p-10', className)}
      {...props}
    />
  )
);
