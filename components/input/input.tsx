import { Input as HUIInput, InputProps as HUIInputProps } from '@headlessui/react';
import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const inputVariants = cva(
  'md:text-2xl md:font-semibold placeholder:text-[#B8B8B8] rounded-xs md:rounded-md p-6 bg-black/10 focus:outline-0',
  {
    variants: {
      size: {
        md: 'md:h-[4.167vw] md:text-xl px-8 placeholder:text-[#606060] md:font-medium',
        lg: 'h-[15vw] md:h-[6.25vw]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<HUIInputProps, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, className, ...props }, ref) => {
    return <HUIInput ref={ref} className={cn(inputVariants({ size, className }))} {...props} />;
  }
);
