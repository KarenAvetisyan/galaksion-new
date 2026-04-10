'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import Image from 'next/image';

import elipseSvg from '@assets/icons/elipse.svg';
import { animationProps } from '@lib/utils';

type ElipseProps = {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
};

export const Elipse = ({ sectionRef }: ElipseProps) => {
  const elipseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !elipseRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = sectionRef.current?.offsetWidth ?? 0;
      const height = sectionRef.current?.offsetHeight ?? 0;

      if (width < 1 || height < 1) return;

      const procentX = clientX / (width / 100);
      const procentY = clientY / (height / 100);

      elipseRef.current!.style.transform = `rotate(${procentX + procentY}deg)`;
      elipseRef.current!.style.animation = 'none';
    };

    sectionRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={elipseRef}
      className="absolute -top-5 -left-[125vw] z-1 w-[250vw] transition-transform duration-1000 ease-out md:-top-[5.208vw] md:-left-[23.438vw] md:size-[93.75vw]"
      {...animationProps('rotate45')}
    >
      <Image
        alt="Elipse"
        src={elipseSvg}
        quality={100}
        fill
        sizes="100%"
        className="object-cover"
        priority
      />
    </div>
  );
};
