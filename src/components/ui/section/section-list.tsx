import { cn } from '@lib/utils';
import { forwardRef } from 'react';

export const SectionList = forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('mb-4 list-disc pl-6 md:mb-6 md:pl-8 md:text-xl marker:text-[15px] space-y-5', className)}
      {...props}
    />
  )
);
