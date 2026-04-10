'use client';

import { forwardRef, MouseEventHandler } from 'react';
import { Button, ButtonProps } from '../button';
import { toast } from 'sonner';

interface ButtonCopyProps extends ButtonProps {
  text: string;
}

export const ButtonCopy = forwardRef<HTMLLinkElement, ButtonCopyProps>(
  ({ text, onClick, ...props }, ref) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
      navigator.clipboard.writeText(text);
      toast.success('Сopied to clipboard');
      onClick && onClick(e);
    };

    return <Button ref={ref} onClick={handleClick} {...props} />;
  }
);
