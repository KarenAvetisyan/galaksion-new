import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

const cell = cva('flex flex-row flex-center', {
  variants: {
    fullWidth: {
      true: ' w-full',
      false: null,
    },
  },
  defaultVariants: {},
});

type Props = ComponentPropsWithoutRef<'div'> & {
  before?: ReactNode;
  after?: ReactNode;
  gap?: 2 | 3 | 6;
  fullWidth?: boolean;
} & VariantProps<typeof cell>;

export const Cell = ({
  before,
  after,
  gap,
  fullWidth = true,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn(cell({}), className)} {...props}>
      <div
        className={cn(
          'relative flex flex-row items-center gap-3',
          gap === 2 && 'gap-2',
          gap === 6 && 'gap-6',
          fullWidth && 'w-full'
        )}
      >
        {before}
        <div className="flex flex-col items-start">{children}</div>
      </div>
      {after && after}
    </div>
  );
};
