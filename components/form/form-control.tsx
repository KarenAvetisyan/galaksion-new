import { forwardRef } from 'react';
import { useFormField } from './context';
import { cn } from '@lib/utils';

export const FormControl = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId, formMessageId } = useFormField();

    return (
      <div
        ref={ref}
        id={formItemId}
        aria-describedby={formMessageId}
        aria-invalid={!!error}
        className={cn(error && 'border border-red-600', className)}
        {...props}
      />
    );
  }
);
