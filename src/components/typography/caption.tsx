import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { typographyBaseVariants } from './constants';

const captionVariants = cva('text-sm md:text-base -tracking-[0.017vw]', {
  variants: {
    ...typographyBaseVariants,
  },
  defaultVariants: {
    weight: 400,
    upperCase: false,
    muted: false,
  },
});

export type CaptionProps = ComponentPropsWithoutRef<'span'> & VariantProps<typeof captionVariants>;

export const Caption = ({
  weight,
  upperCase,
  muted,
  className,
  children,
  ...props
}: CaptionProps) => {
  return (
    <span className={cn(captionVariants({ weight, upperCase, muted, className }))} {...props}>
      {children}
    </span>
  );
};
