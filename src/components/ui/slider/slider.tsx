'use client';

import { Children, forwardRef, PropsWithChildren } from 'react';
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export type SliderProps = SwiperProps &
  PropsWithChildren & {
    slideClassName?: string;
  };

export const Slider = forwardRef<SwiperRef, SliderProps>(
  ({ slideClassName, children, ...props }, ref) => {
    return (
      <Swiper ref={ref} {...props}>
        {Children.map(children, child => (
          <SwiperSlide className={slideClassName}>{child}</SwiperSlide>
        ))}
      </Swiper>
    );
  }
);
