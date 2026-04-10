import { cn } from '@lib/utils';
import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(
          'hover:text-primary inline-flex items-center gap-1.5 uppercase transition-colors',
          className
        )}
        {...props}
      />
    );
  }
);
