'use client';

import { animationProps, cn, scrollToElement } from '@lib/utils';

import terms from '../data/terms.json';
import { useIntersectionObserver } from 'usehooks-ts';
import { useCallback, useRef } from 'react';
import { StickyBar } from '@components/ui/sticky-bar';

export const DictionaryCharList = () => {
  const listRef = useRef<HTMLDivElement>();
  const { ref: setRef, isIntersecting } = useIntersectionObserver({
    initialIsIntersecting: false,
  });

  const setRefs = useCallback((ref: HTMLDivElement) => {
    setRef(ref);
    listRef.current = ref;
  }, []);

  return (
    <StickyBar
      className="flex justify-end pr-2 pl-2"
      stickyClassName="md:hidden"
      stickyWrapperClassName="overflow-x-auto overflow-y-hidden md:overflow-hidden md:scrollbar-auto scrollbar-hidden"
    >
      <div className="md:scrollbar-auto scrollbar-hidden flex w-full flex-row items-center gap-6 overflow-x-auto overflow-y-hidden md:flex-col md:gap-1 md:overflow-hidden">
        {Object.keys(terms).map((letter, index) => (
          <span
            key={`dictonary-char-list-${letter}`}
            className={cn(
              'flex aspect-square h-6 w-full cursor-pointer items-center justify-center text-xl lowercase md:[&:hover+span]:text-2xl',
              // hover
              'md:hover:text-primary md:hover:h-15 md:hover:text-4xl',
              +index === 0 && 'md:hover:h-13',
              // transition
              'transition-all duration-500 ease-out'
            )}
            onClick={() => scrollToElement(letter)}
            {...animationProps('fadeIn,scaleDown', { delay: 600 + +index * 50 })}
          >
            {letter}
          </span>
        ))}
      </div>
    </StickyBar>
  );
};
