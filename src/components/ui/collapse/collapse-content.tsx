import { DisclosurePanel } from '@headlessui/react';
import { cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface CollapseContentProps extends ComponentPropsWithoutRef<'div'> {}

export const CollapseContent = ({ className, children, ...props }: CollapseContentProps) => {
  return (
    <DisclosurePanel
      transition
      className={cn(
        'data-closed/panel:-mt-[40%] data-closed/panel:opacity-0 pt-3 transition-all duration-200 ease-out',
        className
      )}
      unmount={false}
      {...props}
    >
      {children}
    </DisclosurePanel>
  );
};
