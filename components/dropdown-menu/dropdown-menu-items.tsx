import { MenuItems, MenuItemsProps } from '@headlessui/react';
import { cn } from '@lib/utils';

interface DropdownMenuItemsProps extends Omit<MenuItemsProps, 'transition'> {}

export const DropdownMenuItems = ({ className, ...props }: DropdownMenuItemsProps) => {
  return (
    <MenuItems
      transition
      className={cn(
        'bg-secondary z-40 w-56 origin-top-right divide-y divide-white/5 rounded-sm border border-white/5 text-white [--anchor-gap:var(--spacing-2)] focus:outline-none md:w-72',
        // animation
        'transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        className
      )}
      {...props}
    />
  );
};
