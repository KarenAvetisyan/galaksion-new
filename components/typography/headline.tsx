import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';
import { typographyBaseVariants } from './constants';

const headline = cva('text-3xl md:text-3xl md:font-bold md:-tracking-[0.067vw] md:leading-[2vw]', {
  variants: {
    ...typographyBaseVariants,
  },
  defaultVariants: {
    weight: 700,
  },
});

type Props = ComponentPropsWithoutRef<'h2'> & VariantProps<typeof headline> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
};

export const Headline = ({ weight, upperCase, muted, className, as = 'p', children, ...props }: Props) => {
  const Component = as;
  return (
    <Component className={cn(headline({ weight, upperCase, muted, className }))} {...props}>
      {children}
    </Component>
  );
};
