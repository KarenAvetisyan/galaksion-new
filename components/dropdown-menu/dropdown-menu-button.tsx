import { MenuButton, MenuButtonProps } from '@headlessui/react';
import { cn } from '@lib/utils';

interface DropdownMenuButtonProps extends MenuButtonProps {}

export const DropdownMenuButton = ({ className, ...props }: DropdownMenuButtonProps) => {
  return (
    <MenuButton
      className={cn('inline-flex items-center gap-1 focus:outline-none', className)}
      {...props}
    />
  );
};
