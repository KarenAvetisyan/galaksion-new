'use client';

import { useEffect, useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import { Button } from '@components/ui/button';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { LineEndpoints } from './line-endpoints';
import { Lines } from './lines';
import { Equalizer } from './equalizer';
import Image from 'next/image';

import bgImage from '@assets/images/home/bg-steps-profit.png';
import bgImage2 from '@assets/images/home/bg-steps-profit2.png';
import { animationProps } from '@lib/utils';
import { registrationUrl } from '@config/configure';

export const HomeStepsProfitSection = () => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (location.search) {
                setSearch(location.search);
            }

            const htmlEl = document.getElementsByTagName('html').item(0);
            if (!htmlEl) return;

            htmlEl.classList.add('overflow-x-hidden');
            document.body.classList.add('overflow-x-hidden');
            return () => {
                htmlEl.classList.remove('overflow-x-hidden');
                document.body.classList.remove('overflow-x-hidden');
            };
        }
    }, []);

    return (
        <Section
            bg="ghost"
            intersection
            className="group relative px-0 py-2 md:px-10 md:py-10"
        >
            <SectionCol cols={3} className="z-[1]">
                <SectionCaption {...animationProps('fadeIn,slideRight')}>
                    HOW IT WORKS
                </SectionCaption>
            </SectionCol>
            <SectionCol cols={9} className="z-[1] grid grid-cols-2">
                <div className="order-1 col-span-2 grid md:col-span-1">
                    <SectionTitle
                        {...animationProps('fadeIn,slideRight', { delay: 500 })}
                    >
                        Steps to profit
                    </SectionTitle>
                    <SectionText
                        {...animationProps('fadeIn,slideRight', {
                            delay: 1000,
                        })}
                    >
                        Effortlessly navigate a profitable campaign launch and
                        reach your business goals.
                    </SectionText>
                </div>
                <div
                    className="order-4 col-span-2 flex justify-end md:order-2 md:col-span-1"
                    {...animationProps('fadeIn,slideRight', { delay: 1300 })}
                >
                    <Button
                        size="lg"
                        className="w-full md:w-auto"
                        href={`${registrationUrl}${search}`}
                    >
                        Monetize my offer
                    </Button>
                </div>
            </SectionCol>
            <SectionCol className="z-[1] md:pt-20">
                <div className="order-3 col-span-2 my-16 flex flex-col items-center justify-center md:flex-row">
                    <div className="relative flex w-full flex-col flex-nowrap items-center justify-center gap-5 md:w-auto md:flex-row md:items-stretch">
                        <div className="flex w-full flex-row justify-between md:w-auto md:flex-col">
                            <LineEndpoints
                                position="left"
                                items={[
                                    {
                                        title: 'CPA Company',
                                        iconName: 'marketing/figure17',
                                    },
                                    {
                                        title: 'Ad Network',
                                        iconName: 'marketing/figure10',
                                    },
                                    {
                                        title: 'Individual SSP',
                                        iconName: 'marketing/figure9',
                                    },
                                ]}
                            />
                        </div>
                        <Lines direction="vertical" className="" />
                    </div>

                    {useIsClient() && <Equalizer />}

                    <div className="relative flex w-full flex-col flex-nowrap items-center justify-center gap-0 md:w-auto md:flex-row md:items-stretch">
                        <Lines direction="vertical" className="rotate-180" />
                        <div className="flex w-full flex-row justify-between md:w-auto md:flex-col">
                            <LineEndpoints
                                position="right"
                                items={[
                                    {
                                        title: 'Tech assist',
                                        iconName: 'marketing/figure33',
                                    },
                                    {
                                        title: 'AI Rotation',
                                        iconName: 'marketing/figure29',
                                    },
                                    {
                                        title: 'Antifraud',
                                        iconName: 'marketing/figure31',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </SectionCol>

            <div
                className="absolute -inset-3 z-0 md:-inset-6"
                {...animationProps('fadeIn', { delay: 1000, duration: 5000 })}
            >
                <Image
                    src={bgImage}
                    alt="bg"
                    fill
                    sizes="100%"
                    quality={80}
                    className="object-cover"
                />
            </div>
            <div
                className="absolute inset-0 -translate-x-1/8 translate-y-2/3 md:translate-y-0"
                {...animationProps('fadeIn', { delay: 1200, duration: 5000 })}
            >
                <Image
                    src={bgImage2}
                    alt="bg"
                    // fill
                    sizes="100vw"
                    quality={80}
                    className="object-cover"
                />
            </div>
        </Section>
    );
};
