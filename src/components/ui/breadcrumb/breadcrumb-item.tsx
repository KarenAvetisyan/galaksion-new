import { cn } from '@lib/utils';
import { forwardRef } from 'react';

export const BreadcrumbItem = forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5 uppercase', className)}
      {...props}
    />
  )
);
