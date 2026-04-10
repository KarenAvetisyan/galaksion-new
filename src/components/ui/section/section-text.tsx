import { forwardRef } from 'react';
import { cn } from '@lib/utils';

export const SectionText = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('mb-4 text-base md:mb-6 md:text-xl md:leading-6', className)}
      {...props}
    />
  )
);
