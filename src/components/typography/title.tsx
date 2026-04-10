import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { typographyBaseVariants } from './constants';

const titleVariants = cva('text-3xl md:leading-9 md:-tracking-[0.08rem] md:text-5xl', {
  variants: {
    ...typographyBaseVariants,
  },
  defaultVariants: {
    weight: 700,
    upperCase: false,
    muted: false,
  },
});

export type TitleProps = ComponentPropsWithoutRef<'h1'> & VariantProps<typeof titleVariants> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title = ({ weight, upperCase, muted, className, as = 'h1', ...props }: TitleProps) => {
  const Component = as;
  return <Component className={cn(titleVariants({ weight, upperCase, muted, className }))} {...props} />;
};
