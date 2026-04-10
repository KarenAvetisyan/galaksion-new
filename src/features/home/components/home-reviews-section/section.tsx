'use client';

import Image, { StaticImageData } from 'next/image';
import { Icon } from '@components/ui/icon';
import { IconButton } from '@components/ui/icon-button';
import { Slider } from '@components/ui/slider';
import { Caption, Text } from '@components/typography';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { Fragment, useRef } from 'react';
import { SwiperRef } from 'swiper/react';
import { Card, CardContent, CardTitle } from '@components/ui/card';
import { REVIEWS_SECTION_ID } from '@features/home/constants';
import { Cell } from '@components/ui/cell';
import { animationProps } from '@lib/utils';
import logo1 from '@assets/images/partner/Sophia_Martinez.png';
import logo2 from '@assets/images/partner/Ethan_Kim.png';
import logo3 from '@assets/images/partner/Liam_Nguyen.png';
import logo4 from '@assets/images/partner/Emily_Zhao.png';
import logo5 from '@assets/images/partner/Raj_Mehta.png';
import logo6 from '@assets/images/partner/Jason_Turner.png';

type Review = {
    text: string;
    name: string;
    date: string;
    logo: StaticImageData;
};

const reviews: Review[] = [
    {
        name: 'Sophia Martinez',
        date: 'Affiliate Marketer & Influencer',
        logo: logo1,
        text: `I've been running campaigns with Galaksion since 2021. The platform’s smart UI, CPA algorithm, and the ability to pause zones from statistics make optimization easy. Huge thanks to my manager Barbara for always being there. I've been spending xxx$ per day for the last couple months and I'm getting even more from their traffic. Highly recommended!`,
    },
    {
        name: 'Ethan Kim',
        date: 'Performance Marketer',
        logo: logo2,
        text: 'I joined Galaksion in August 2023, and their platform quickly became a favorite. One thing I really dig about Galaksion is all the cool features it has. I was able to hit exactly the right audience for a tech product for young professionals using their location-based targeting and demographic filters. This led to a huge jump in CTR and conversions. Support has been fantastic, responding within hours and always giving actionable advice. Within 3 months, I saw a 50% increase in conversions and made over $600. Hope my story gets more advertisers to join this amazing network.',
    },
    {
        name: 'Liam Nguyen',
        date: 'Lead Affiliate Strategist',
        logo: logo3,
        text: 'I learned about Galaksion through an affiliate marketing forum when I was looking for traffic for my offers. I’ve worked with Galaksion for over five years, and their traffic continues to perform. I am impressed with 2 things: 1) The enthusiastic support from my manager. 2) Quality traffic source with more attractive bids than other platforms. Galaksion is the platform I have invested the most money in because of the outstanding efficiency you guys bring me. In January 2025, I spent $7,000 and made $15,000 in revenue across my e-commerce campaigns.',
    },
    {
        name: 'Emily Zhao',
        date: 'Media Buyer',
        logo: logo4,
        text: 'I started using Galaksion six months ago and quickly noticed a shift in my campaign performance. The platform is easy to use, with advanced targeting and excellent traffic quality. But what really stands out is the dedicated support — they’re fast, professional, and always willing to help. Since switching to Galaksion, my earnings have jumped by 150%. I’m now consistently hitting the right audience with Galaksion’s exclusive ad placements and innovative features and outperforming my previous networks.',
    },
    {
        name: 'Raj Mehta',
        date: 'Affiliate Media Buyer',
        logo: logo5,
        text: "We've been using Galaksion since last year, and their platform has delivered strong results across multiple offers. The interface is easy, bids are competitive, and support is quick, though more traffic options would be helpful. Our campaigns in Asia are showing great performance — overall, a solid and reliable partner.",
    },
    {
        name: 'Jason Turner',
        date: 'Lead Affiliate Strategist',
        logo: logo6,
        text: 'I’ve been advertising with Galaksion for seven years, and it remains a core part of my marketing strategy. The CPA model performs consistently well, with high conversion rates across almost every campaign. I once lost a favorite zone, but new options quickly outperformed it. The platform keeps improving, and the team is always pushing forward. Galaksion has helped me earn over $50K — truly a game-changer.',
    },
];

export const HomeReviewsSection = () => {
    const sliderRef = useRef<SwiperRef>(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.swiper.slidePrev();
        }
    };

    const navButtons = (
        <Fragment>
            <IconButton
                size="lg"
                outlined
                onClick={handlePrev}
                {...animationProps('fadeIn', { delay: 1000 })}
            >
                <Icon
                    name="common/arrow-right"
                    className="rotate-180 md:size-8"
                />
            </IconButton>
            <IconButton
                size="lg"
                outlined
                onClick={handleNext}
                {...animationProps('fadeIn', { delay: 1400 })}
            >
                <Icon name="common/arrow-right" className="md:size-8" />
            </IconButton>
        </Fragment>
    );

    return (
        <Section id={REVIEWS_SECTION_ID} intersection className="px-0 md:py-4">
            <SectionCol cols={3}>
                <SectionCaption
                    {...animationProps('fadeIn,slideRight', { delay: 1000 })}
                >
                    Reviews
                </SectionCaption>
            </SectionCol>
            <SectionCol
                cols={9}
                className="flex flex-row items-center justify-between"
            >
                <div>
                    <SectionTitle {...animationProps('fadeIn,slideRight')}>
                        Partners’ stories
                    </SectionTitle>
                    <SectionText
                        {...animationProps('fadeIn,slideRight', { delay: 500 })}
                    >
                        will speak for us
                    </SectionText>
                </div>
                <div className="flex-center hidden flex-row gap-4 md:flex">
                    {navButtons}
                </div>
            </SectionCol>
            <SectionCol cols={12} className="flex gap-6 pt-0">
                <div>
                    <Slider
                        ref={sliderRef}
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
                        slideClassName="w-full md:min-w-[40vw] md:max-w-[40vw] md:w-[40vw]"
                    >
                        {reviews.map(({ name, date, text, logo }, index) => (
                            <div key={`review${index}`} className="px-2">
                                <Card
                                    key={`reviews_slide${index}`}
                                    variant="light"
                                    className="h-[70vw] md:h-[25vw] md:gap-6 md:p-8"
                                    {...animationProps('fadeIn,scaleUp', {
                                        delay: 500 + index * 500,
                                        duration: 1000,
                                    })}
                                >
                                    <CardContent className="overflow-auto md:p-0">
                                        <Cell
                                            before={
                                                <div className="relative inline-block size-18 md:size-[5.729vw]">
                                                    <svg
                                                        viewBox="0 0 110 111"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-full h-full"
                                                    >
                                                        <circle
                                                            cx="55"
                                                            cy="55.8242"
                                                            r="55"
                                                            fill="url(#paint0_linear_354_1121)"
                                                        />
                                                        <defs>
                                                            <linearGradient
                                                                id="paint0_linear_354_1121"
                                                                x1="101"
                                                                y1="-151"
                                                                x2="169.033"
                                                                y2="-96.0332"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <stop
                                                                    offset="0.21058"
                                                                    stopColor="#035CEA"
                                                                />
                                                                <stop
                                                                    offset="0.389167"
                                                                    stopColor="#FEFEFF"
                                                                />
                                                                <stop
                                                                    offset="0.709299"
                                                                    stopColor="#035CEA"
                                                                />
                                                                <stop offset="1" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    <Image
                                                        src={logo}
                                                        alt="About Galaksion"
                                                        quality={100}
                                                        priority
                                                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5rem]"
                                                    />
                                                </div>
                                            }
                                        >
                                            <div className="grid">
                                                <CardTitle className="leading-4 min-h-[30px]">
                                                    {name}
                                                </CardTitle>
                                                <Caption>{date}</Caption>
                                            </div>
                                        </Cell>
                                        <Text className="whitespace-break-spaces">
                                            {text}
                                        </Text>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="flex-center flex flex-row gap-4 md:hidden">
                    {navButtons}
                </div>
            </SectionCol>
        </Section>
    );
};
