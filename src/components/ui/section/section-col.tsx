import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const sectionRowVariants = cva(['relative flex flex-col'], {
  variants: {
    cols: {
      1: 'col-span-12 md:col-span-1',
      3: 'col-span-12 md:col-span-3',
      6: 'col-span-12 md:col-span-6',
      8: 'col-span-12 md:col-span-8',
      9: 'col-span-12 md:col-span-9',
      12: 'col-span-12',
    },
  },
  defaultVariants: {
    cols: 12,
  },
});

export interface SectionRowProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionRowVariants> {}

export const SectionCol = ({ cols, className, ...props }: SectionRowProps) => {
  return <div className={cn(sectionRowVariants({ cols, className }))} {...props} />;
};
