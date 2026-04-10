import { cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface PaginationItemProps extends ComponentPropsWithoutRef<'li'> {
  isActive?: boolean;
}

export const PaginationItem = ({ isActive, className, ...props }: PaginationItemProps) => (
  <li
    className={cn(
      'flex-center flex cursor-pointer text-xl font-medium md:text-xl',
      isActive && 'bg-primary size-10 rounded-full',
      className
    )}
    {...props}
  />
);
