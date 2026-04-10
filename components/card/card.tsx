import { HTMLAttributes } from 'react';
import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva('relative flex flex-col rounded-md w-full', {
  variants: {
    variant: {
      ghost: 'bg-transparent',
      primary: ['bg-primary'],
      secondary: ['bg-secondary'],
      dark: ['bg-black'],
      light: ['bg-white text-black'],
    },
    rounded: {
      md: 'rounded-sm md:rounded-md',
      lg: 'rounded-md md:rounded-lg',
      xl: 'rounded-lg md:rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    rounded: 'md',
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = ({ variant, rounded, className, children, ...props }: CardProps) => {
  const Tag = 'div';

  return (
    <Tag className={cn(cardVariants({ variant, rounded, className }))} {...props}>
      {children}
    </Tag>
  );
};
