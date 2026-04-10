import { useCallback } from 'react';
import { useWindowSize } from 'usehooks-ts';

type VwProcent = number;
type VwBreakpoint = { [breakpoint: number]: number };

type VwPayload = VwProcent | VwBreakpoint;

export const useViewportWidth = () => {
  const { width } = useWindowSize();

  /**
   * @param `percent` or `[breakpoint]: percent`
   * @returns pixels
   */
  const vw = useCallback(
    (percent: VwPayload) => {
      if (typeof percent === 'number') return (percent * width) / 100;

      let breakpointProcent = 0;
      Object.keys(percent)
        .sort((a, b) => +a - +b)
        .forEach(point => {
          if (+point <= width) {
            breakpointProcent = percent[point as any];
          }
        });

      return (breakpointProcent * width) / 100;
    },
    [width]
  );

  return vw;
};
