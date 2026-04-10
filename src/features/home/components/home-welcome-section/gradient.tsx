'use client';

import { NeatGradient } from '@components/gradient';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import bgImage from '@assets/images/home/welcomebg.png';
import { animationProps, cn } from '@lib/utils';

export const Gradient = () => {
  const gradientRef = useRef<NeatGradient | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: '#001b56',
          enabled: true,
        },
        {
          color: '#0078fa',
          enabled: true,
        },
        {
          color: '#0034a4',
          enabled: true,
        },
        {
          color: '#6D3BFF',
          enabled: true,
        },
        {
          color: '#001b56',
          enabled: false,
        },
      ],
      speed: 4,
      horizontalPressure: 3,
      verticalPressure: 5,
      waveFrequencyX: 2,
      waveFrequencyY: 3,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 7,
      wireframe: false,
      colorBlending: 7,
      backgroundColor: '#003FFF',
      backgroundAlpha: 1,
      grainScale: 0,
      grainSparsity: 0,
      grainIntensity: 0,
      grainSpeed: 0,
      resolution: 1,
    });

    setReady(true);

    return gradientRef.current.destroy;
  }, []);

  return (
    <div className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="isolation-[isolate] relative z-1 h-full w-full rounded-sm md:rounded-xl"
        {...(ready ? animationProps('fadeIn') : {})}
      />
      <Image
        alt="Welcome"
        src={bgImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100%"
        className="z-0 object-cover"
        priority
        loading="eager"
      />
    </div>
  );
};
