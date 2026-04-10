'use client';

import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import {
    ACHIEVEMENTS_SECTION_ID,
    PARTNERS_SECTION_ID,
    REVIEWS_SECTION_ID,
    TRAFFIC_MAP_SECTION_ID,
} from '@features/home/constants';
import { animationProps, cn } from '@lib/utils';
import { scrollToSection } from '@features/home/lib/scroll-to-section';
import { paths } from '@config/routing';
import Link from 'next/link';
import Image from 'next/image';
import { Text, Title } from '@components/typography';
import { IconButton } from '@components/ui/icon-button';
import { Icon } from '@components/ui/icon';

import bgBlueStars from '@assets/images/home/bg-blue-stars.svg';
import bgGradient from '@assets/images/home/primary-gradient.png';

const buttons = [
    {
        title: '1,5B',
        text: 'impressions/day',
        link: '#',
        onClick: () => scrollToSection(TRAFFIC_MAP_SECTION_ID),
    },
    {
        title: '8',
        text: 'targets',
        link: paths.achievements,
    },
    {
        title: '30K+',
        text: 'partners',
        link: '#',
        onClick: () => scrollToSection(PARTNERS_SECTION_ID),
    },
    {
        title: '10+',
        text: 'years of experience',
        link: '#',
        onClick: () => scrollToSection(REVIEWS_SECTION_ID),
    },
];

export const HomeNumbersSection = () => {
    return (
        <Section
            id={ACHIEVEMENTS_SECTION_ID}
            bg="secondary"
            intersection
            className="group md:pr-0 md:pb-6"
            {...animationProps('gradientSecondary')}
        >
            <SectionCol cols={3}>
                <SectionCaption
                    {...animationProps('fadeIn,scaleUp', { delay: 700 })}
                >
                    WHY US
                </SectionCaption>
            </SectionCol>
            <SectionCol cols={9}>
                <SectionTitle
                    className="text-3xl leading-9"
                    {...animationProps('fadeIn,scaleUp')}
                >
                    Let’s grow your business together!
                </SectionTitle>
                <SectionText
                    className="md:mb-8 md:w-[139.5vw]"
                    {...animationProps('fadeIn,scaleUp', { delay: 400 })}
                >
                    From impressions to targets: numbers to prove our results
                    and set higher goals for work with you.
                </SectionText>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {buttons.map((button, key) => (
                        <li
                            key={key}
                            className={cn(
                                'group/li relative z-[2] overflow-hidden rounded-sm bg-black p-4 hover:scale-[0.99] md:rounded-md md:p-6',
                                'transition-transform duration-300 ease-out',
                            )}
                            {...animationProps('fadeIn,slideRight', {
                                delay: +key * 400,
                            })}
                        >
                            <Link
                                href={button.link}
                                onClick={(e) => {
                                    if (button.onClick) {
                                        e.preventDefault();
                                        button.onClick();
                                    }
                                }}
                            >
                                <div className="absolute inset-0 z-[1] rounded-md opacity-0 transition-opacity duration-300 ease-out group-hover/li:opacity-100">
                                    <Image
                                        alt={button.title}
                                        src={bgGradient}
                                        placeholder="blur"
                                        quality={100}
                                        fill
                                        sizes="100%"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="relative z-[2] flex flex-row items-center justify-between md:items-end">
                                    <div>
                                        <Title weight={500}>
                                            {button.title}
                                        </Title>
                                        <Text>{button.text}</Text>
                                    </div>
                                    <IconButton
                                        size="lg"
                                        outlined
                                        className="group-hover/li:bg-primary group-hover/li:text-white"
                                    >
                                        <Icon
                                            name="common/arrow-right"
                                            className="size-5 md:size-8"
                                        />
                                    </IconButton>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </SectionCol>
            <div
                className="absolute bottom-0 left-0 z-0 hidden md:block md:h-[19.271vw] md:w-[31.25vw]"
                {...animationProps('fadeIn,scaleUp')}
            >
                <Image
                    src={bgBlueStars}
                    alt="achievements"
                    fill
                    quality={100}
                    sizes="100%"
                    className="object-contain"
                />
            </div>
        </Section>
    );
};
