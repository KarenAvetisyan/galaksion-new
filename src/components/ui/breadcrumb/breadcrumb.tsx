import { cn } from '@lib/utils';
import { forwardRef } from 'react';

export const Breadcrumb = forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ className, ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" className={cn('py-6', className)} {...props} />
));
