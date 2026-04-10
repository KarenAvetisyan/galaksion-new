'use client';

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import {
  Section,
  SectionCaption,
  SectionCol,
  SectionText,
  SectionTitle,
} from '@components/ui/section';
import { Stack } from '@components/ui/stack';
import { animationProps, cn } from '@lib/utils';
import { Icon } from '@components/ui/icon';
import { IconName } from '@components/ui/icon/name';

export const HomeWhyUsSection = () => {
  return (
    <Section bg="primary" intersection {...animationProps('gradientPrimary')}>
      <SectionCol cols={3} className="z-10">
        <SectionCaption {...animationProps('fadeIn,slideRight', { delay: 500 })}>
          MECHANISM FOR EARNINGS
        </SectionCaption>
      </SectionCol>
      <SectionCol cols={9} className="z-10">
        <SectionTitle {...animationProps('fadeIn,scaleUp', { delay: 800 })}>
          Profit-Generating System
        </SectionTitle>
        <SectionText className="md:mb-30" {...animationProps('fadeIn', { delay: 1000 })}>
          We maximize precision through product data, resulting in shared profitability for clients.
        </SectionText>
      </SectionCol>
      <SectionCol cols={12} className="z-10 flex w-full flex-col items-center md:flex-row">
        <Circle
          iconName="marketing/figure21"
          variant="outside"
          {...animationProps('fadeIn,scaleUp', { delay: 800 })}
        >
          <ul className="text-center text-sm md:text-base">
            <li>Your custom target</li>
            <li>AI rotation system</li>
            <li>Optimizing campaign</li>
            <li>Your highest profit</li>
          </ul>
        </Circle>
        <span className="h-5 w-px bg-[#1583e4] md:h-px md:w-5" />
        <Circle
          iconName="marketing/figure13"
          variant="inside"
          {...animationProps('fadeIn,scaleUp', { delay: 1200 })}
        >
          <ul className="flex-center flex flex-col md:text-base">
            <li>Vertical</li>
            <li>+</li>
            <li>Distribution method</li>
            <li>+</li>
            <li>Offer</li>
          </ul>
        </Circle>
        <Circle
          iconName="marketing/figure12"
          variant="inside"
          {...animationProps('fadeIn,scaleUp', { delay: 1600 })}
        >
          <Stack direction="row" gap={10}>
            <ul className="text-center md:text-base">
              <li>Ecommerce</li>
              <li>Utilities</li>
              <li>Mobile apps</li>
              <li>Extensions</li>
              <li>VPN</li>
            </ul>
            <ul className="text-center md:text-base">
              <li>Games</li>
              <li>Finance</li>
              <li>Lifestyle</li>
              <li>Gambling/Betting</li>
            </ul>
          </Stack>
        </Circle>
        <Circle
          iconName="marketing/figure16"
          variant="inside"
          {...animationProps('fadeIn,scaleUp', { delay: 2000 })}
        >
          <Stack direction="row" gap={2}>
            <ul className="text-center text-[3.375vw] md:text-base">
              <li>Sports Fans</li>
              <li>Film Fans</li>
              <li>Mobile Gamers</li>
              <li>PC Gamers</li>
              <li>High-Income Users</li>
              <li>Low-Income Users</li>
            </ul>
            <ul className="text-center text-[3.375vw] md:text-base">
              <li>Manga & Anime Fans</li>
              <li>Downloaders</li>
              <li>Adult Viewers</li>
              <li>Short Video Fans</li>
              <li>Betting Fans</li>
              <li>Music Lovers</li>
            </ul>
          </Stack>
        </Circle>
      </SectionCol>
    </Section>
  );
};

type CircleProps = ComponentPropsWithoutRef<'div'> & {
  iconName: IconName;
  variant?: 'outside' | 'inside';
};

const Circle = ({ iconName, children, variant, className, ...props }: CircleProps) => {
  return (
    <div
      className={cn(
        'flex aspect-square h-full w-full flex-col items-center justify-start gap-2 rounded-full border border-[#1583e4] pt-6 md:w-1/3 md:gap-6 md:text-xl',
        variant === 'outside' && 'bg-primary',
        className
      )}
      {...props}
    >
      <Icon name={iconName} className="size-[25vw] stroke-white md:size-[7.813vw]" />
      {children}
    </div>
  );
};
