import { cn } from '@lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-4 md:px-10 md:pt-10 md:pb-6', className)}
      {...props}
    />
  )
);
