import { forwardRef } from 'react';
import { cn } from '@lib/utils';

interface SectionTitleProps extends React.ComponentPropsWithoutRef<'h1'> {
  as?: 'h1' | 'h2' | 'p';
}

export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, as = 'p', ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        className={cn(
          'mb-3 text-3xl leading-9 font-semibold md:mb-4 md:text-5xl md:leading-14 md:-tracking-[0.08rem]',
          className
        )}
        {...props}
      />
    );
  }
);
