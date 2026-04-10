import { Slider, SliderProps } from '@components/ui/slider';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { SwiperRef } from 'swiper/react';
import { advantages } from '../constants';
import { animationProps } from '@lib/utils';
import { Text } from '@components/typography';

import slideBg from '@assets/images/advantages/slider/slide-bg.png';
import slideVectors from '@assets/images/advantages/slider/slide-vectors.svg';
import { Stack } from '@components/ui/stack';
import { Card } from '@components/ui/card';
import { Icon } from '@components/ui/icon';

export const AdvantagesSlider = forwardRef<
  SwiperRef,
  Omit<SliderProps, 'ref' | 'breakpoints' | 'slideClassName'>
>((props, ref) => (
  <Slider
    ref={ref}
    breakpoints={{
      320: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      756: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    }}
    slideClassName="min-w-[80vw] max-w-[80vw] w-[80vw] md:min-w-[17vw] md:max-w-[17vw] md:w-[17vw]"
    {...props}
  >
    {advantages.map((advantage, index) => (
      <Link key={index} href={advantage.path} className="relative grid h-[116.5vw] md:h-[28.125vw]">
        <Card
          variant="ghost"
          className="group/card absolute inset-0 mx-1 w-auto overflow-hidden px-6 pb-6 md:mx-1.5"
          {...animationProps('fadeIn,scaleUp', { delay: 1000 + +index * 200, duration: 1000 })}
        >
          <div className="absolute inset-0 z-0 hidden rounded-md group-hover/card:block">
            <Image
              alt={advantage.key}
              src={slideBg}
              placeholder="blur"
              quality={100}
              fill
              sizes="100%"
              className="object-cover"
              priority
            />
          </div>
          <Image
            src={slideVectors}
            quality={100}
            alt=""
            fill
            sizes="100%"
            className="object-cover group-hover/card:opacity-30"
          />
          <div className="md: absolute left-1/2 mt-[25vw] size-[120vw] -translate-x-1/2 rounded-full bg-black shadow-[0_-20px_50px_20px_#000000] group-hover/card:hidden md:mt-[7vw] md:size-[40vw]" />
          <Stack
            direction="column"
            justifyContent="between"
            alignItems="center"
            className="z-10 h-full"
          >
            <Icon
              name={advantage.iconName}
              className="size-[60vw] stroke-white md:size-[11.875vw]"
            />
            <Stack className="w-full">
              <Text className="text-2xl font-bold">{advantage.title}</Text>
              <div className="translate-y-6 transform opacity-0 transition duration-200 ease-out group-hover/card:mt-4 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                <Text className="hidden group-hover/card:block">
                    {advantage.shortDesc}
                </Text>
              </div>
            </Stack>
          </Stack>
        </Card>
      </Link>
    ))}
  </Slider>
));
