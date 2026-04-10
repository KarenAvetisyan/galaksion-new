import { cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const Pagination = ({ className, ...props }: ComponentPropsWithoutRef<'nav'>) => {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
};
