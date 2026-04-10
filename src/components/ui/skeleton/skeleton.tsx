import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';

const skeletonVariants = cva('animate-pulse rounded-md', {
  variants: {
    variant: {
      secondary: 'bg-secondary',
      dark: 'bg-black/80',
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
});

interface SkeletonProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ variant, className }))} {...props} />;
}

export { Skeleton };
