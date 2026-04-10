'use client';

import { PropsWithChildren } from 'react';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';

type Props = PropsWithChildren;

export const SmoothScroll = ({ children }: Props) => {
  return children;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};
