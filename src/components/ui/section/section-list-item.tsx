import { cn } from '@lib/utils';
import { forwardRef } from 'react';

export const SectionListItem = forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('list-item', className)} {...props} />
  )
);
