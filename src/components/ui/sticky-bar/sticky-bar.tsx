'use client';

import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, Fragment, useCallback, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

const stickyBarVariants = cva('fixed left-0 z-30 px-5 w-full flex flex-center', {
  variants: {
    position: {
      top: 'top-0 pt-5',
      bottom: 'bottom-0 pb-5',
    },
  },
  defaultVariants: {
    position: 'top',
  },
});

interface StickyBarProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof stickyBarVariants> {
  stickyClassName?: string;
  stickyWrapperClassName?: string;
}

export const StickyBar = ({
  position = 'top',
  stickyClassName,
  stickyWrapperClassName,
  children,
  ...props
}: StickyBarProps) => {
  const ref = useRef<HTMLDivElement>();
  const { ref: setRef, isIntersecting } = useIntersectionObserver({
    threshold: 1,
    initialIsIntersecting: false,
  });

  const setRefs = useCallback((elRef: HTMLDivElement) => {
    setRef(elRef);
    ref.current = elRef;
  }, []);

  const isShowBar = ref.current && !isIntersecting;

  return (
    <Fragment>
      <div ref={setRefs} {...props}>
        {children}
      </div>
      <div className={cn(stickyBarVariants({ position }), stickyClassName)} data-sticky="">
        <div
          className={cn(
            'bg-secondary scale-95 rounded-full px-5 py-4 opacity-0 transition-all duration-300 ease-in-out',
            position === 'top' && '-translate-y-full',
            position === 'bottom' && 'translate-y-full',
            isShowBar && 'translate-y-0 scale-100 opacity-100',
            stickyWrapperClassName
          )}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};
