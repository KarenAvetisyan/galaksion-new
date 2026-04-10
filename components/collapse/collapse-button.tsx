import { DisclosureButton } from '@headlessui/react';
import { cn } from '@lib/utils';
import { HTMLAttributes } from 'react';
import { Icon } from '../icon';

interface CollapseButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const CollapseButton = ({ className, children, ...props }: CollapseButtonProps) => {
  return (
    <DisclosureButton className={cn('group w-10/12 py-3 text-start', className)} {...props}>
      {children}
      <div className="absolute top-6 right-5 flex items-center md:bottom-6">
        <div
          className={cn(
            'flex-center hover:bg-primary flex size-[8.25vw] rounded-full border-2 duration-300 ease-out focus:outline-0 active:outline-0 md:size-[2.917vw] md:group-data-open:h-full'
          )}
        >
          <Icon
            name="common/plus"
            className="size-[7.5vw] duration-200 ease-out group-data-open:rotate-45 md:size-[2.2vw]"
          />
        </div>
      </div>
    </DisclosureButton>
  );
};
