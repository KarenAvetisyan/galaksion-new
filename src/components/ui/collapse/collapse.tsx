import { ComponentPropsWithoutRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { cn } from '@lib/utils';

interface CollapseProps extends ComponentPropsWithoutRef<'div'> {}

export const Collapse = ({ className, children, ...props }: CollapseProps) => {
  return (
    <div
      className={cn('bg-secondary relative w-full rounded-sm p-4 md:rounded-md md:p-8', className)}
      {...props}
    >
      <Disclosure>{children}</Disclosure>
    </div>
  );
};
