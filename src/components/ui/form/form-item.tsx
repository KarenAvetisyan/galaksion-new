import { forwardRef, useId } from 'react';
import { FormItemContext } from './context';
import { cn } from '@lib/utils';

export const FormItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-1', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);
