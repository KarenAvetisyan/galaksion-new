import { cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const PaginationContent = ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
  <ul className={cn('flex flex-row items-center gap-5', className)} {...props} />
);
