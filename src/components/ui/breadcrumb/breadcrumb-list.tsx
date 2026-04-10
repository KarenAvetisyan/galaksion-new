import { cn } from '@lib/utils';
import { forwardRef } from 'react';

export const BreadcrumbList = forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-base break-words sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
);
