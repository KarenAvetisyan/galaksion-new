import { forwardRef } from 'react';
import { useFormField } from './context';
import { cn } from '@lib/utils';

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('ml-2 text-sm font-medium text-red-600 md:text-base', className)}
      {...props}
    >
      {body}
    </p>
  );
});
