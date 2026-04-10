import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { typographyBaseVariants } from './constants';

const textVariants = cva('text-base md:text-xl md:leading-6', {
  variants: {
    ...typographyBaseVariants,
  },
  defaultVariants: {
    weight: 400,
    upperCase: false,
    muted: false,
  },
});

type TextProps = ComponentPropsWithoutRef<'span'> & VariantProps<typeof textVariants>;

export const Text = ({ weight, upperCase, muted, className, ...props }: TextProps) => {
  return <span className={cn(textVariants({ weight, upperCase, muted, className }))} {...props} />;
};
