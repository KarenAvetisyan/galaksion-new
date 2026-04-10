'use client';

import { partners } from '../constants';
import { Slider } from '@components/ui/slider';
import { Autoplay } from 'swiper/modules';
import { PartnerCard } from './partner-card';
import { PartnerKeys } from '../types';

import 'swiper/css/autoplay';

const showKeys: PartnerKeys[] = [
  'starzplay',
  'wargaming',
  'lazada',
  'coinis',
  'metacpa',
  'accesstrade',
  'affroom'
];

const sliderPartners = partners.filter(p => showKeys.includes(p.key));

export const PartnersSlider = () => {
  return (
    <Slider
      speed={7000}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        // waitForTransition: false
      }}
      loop
      freeMode
      mousewheel={{
        enabled: true,
        releaseOnEdges: true,
      }}
      slidesPerView="auto"
      direction="horizontal"
      breakpoints={{
        320: {
          spaceBetween: 8,
          slidesPerView: 1,
        },
        756: {
          spaceBetween: 12,
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay]}
      wrapperClass="ease-linear!"
    >
      {sliderPartners.map(partner => (
        <PartnerCard key={partner.key} partner={partner} />
      ))}
    </Slider>
  );
};
