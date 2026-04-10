import { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const stackVariants = cva('flex relative', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    alignItems: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
    },
    justifyContent: {
      start: 'justify-start',
      between: 'justify-between',
      end: 'justify-end',
      around: 'justify-around',
    },
    gap: {
      0: 'gap-0',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-[1.20rem]',
      6: 'gap-6',
      7: 'gap-7',
      10: 'gap-10',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
    },
    centered: {
      true: 'items-center justify-center',
      false: null,
    },
  },
  defaultVariants: {
    direction: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    gap: 0,
    wrap: 'nowrap',
    centered: false,
  },
});

interface StackProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof stackVariants> {}

export const Stack = <E extends ElementType>({
  direction,
  alignItems,
  justifyContent,
  gap,
  wrap,
  centered,
  className,
  children,
  ...props
}: StackProps) => {
  return (
    <div
      className={cn(
        stackVariants({ direction, alignItems, justifyContent, gap, wrap, centered, className })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
