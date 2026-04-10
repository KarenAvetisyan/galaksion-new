import { cn } from '@lib/utils';
import { HTMLAttributes } from 'react';

interface SectionHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  label?: string;
}

export const SectionHeadline = ({ className, as = 'p', ...props }: SectionHeadlineProps) => {
  const Component = as;
  
  return (
    <Component
      className={cn(
        'mb-3 text-xl font-bold md:mb-5 md:text-3xl md:font-medium uppercase',
        // dot only when is-active exists
        '[&.is-active]:relative',
        '[&.is-active]:before:content-[""]',
        '[&.is-active]:before:ml-[-0.9vw]',
        '[&.is-active]:before:inline-block',
        '[&.is-active]:before:w-[0.475rem]',
        '[&.is-active]:before:h-[0.475rem]',
        '[&.is-active]:before:-mt-[0.10rem]',
        '[&.is-active]:before:rounded-full',
        '[&.is-active]:before:bg-white',
        '[&.is-active]:before:mr-2',
        '[&.is-active]:before:align-middle',

        className
      )}
      {...props}
    />
  );
};
