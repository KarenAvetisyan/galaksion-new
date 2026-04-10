'use client';

import { ComponentProps, ElementType } from 'react';
import { MenuItem } from '@headlessui/react';
import { cn } from '@lib/utils';

const defaultElement = 'button';

type DropdownMenuItemProps<T extends ElementType = typeof defaultElement> = ComponentProps<T> & {
  as?: T;
};

export const DropdownMenuItem = <T extends ElementType = typeof defaultElement>({
  as,
  className,
  children,
  ...props
}: DropdownMenuItemProps<T>) => {
  const Tag = as ?? defaultElement;

  return (
    <MenuItem>
      <Tag
        className={cn(
          'group flex w-full items-center gap-2 px-6 py-4 text-base data-focus:bg-white/10 md:text-xl',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    </MenuItem>
  );
};
