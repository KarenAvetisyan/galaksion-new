'use client';

import { forwardRef, HTMLAttributes, ReactNode, useCallback } from 'react';
import { cn } from '@lib/utils';
import { useIntersectionObserver } from 'usehooks-ts';
import { cva, VariantProps } from 'class-variance-authority';
import { useIsMobile } from '@hooks/use-mobile';

const sectionVariants = cva(
  [
    'relative grid grid-cols-12 items-stretch gap-6 px-4 py-4 rounded-sm mb-6',
    // tablet
    'md:px-10 md:py-10 md:space-x-8 md:rounded-xl md:gap-0',
    // transition
    'transition duration-1000 ease-out',
  ],
  {
    variants: {
      bg: {
        ghost:
          'bg-transparent rounded-none py-4 px-0 md:py-0 md:px-0 md:rounded-none rounded-none overflow-[initial]',
        primary: 'bg-primary overflow-hidden',
        secondary: 'bg-secondary overflow-hidden',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      bg: 'ghost',
    },
  }
);

type ChildrenState = {
  isIntersecting: boolean;
};

interface SectionProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'>,
    VariantProps<typeof sectionVariants> {
  intersection?: boolean;
  transition?: boolean;
  children: ReactNode | ((state: ChildrenState) => ReactNode);
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ bg, intersection = false, className, children, ...props }, forwardedRef) => {
    const isMobile = useIsMobile();
    const { isIntersecting, ref: intersectRef } = useIntersectionObserver({
      threshold: isMobile ? 0.2 : 0.5,
      freezeOnceVisible: true,
    });

    const setRefs = useCallback(
      (ref: HTMLElement) => {
        if (intersection) intersectRef(ref);
        if (forwardedRef) {
          if (typeof forwardedRef === 'function') {
            forwardedRef(ref);
          } else {
            forwardedRef.current = ref;
          }
        }
      },
      [intersection]
    );

    return (
      <section
        ref={setRefs}
        className={cn(sectionVariants({ bg }), className)}
        data-intersection={intersection}
        {...(isIntersecting ? { 'data-intersect': '' } : {})}
        {...props}
      >
        {typeof children === 'function' ? children({ isIntersecting }) : children}
      </section>
    );
  }
);
