'use client';

import Image from 'next/image';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { AdFormats } from '@features/ad-format/types';
import { AD_FORMATS_SECTION_ID } from '@features/home/constants';
import {
    AdFormatHorizontalTabs,
    AdFormatVerticalTabs,
} from '@features/ad-format/components';

import bgBlackStars from '@assets/images/home/bg-black-stars.png';
import { useIsMobile } from '@hooks/use-mobile';
import { animationProps } from '@lib/utils';

export const tabs: { format: AdFormats; title: string; description: string }[] =
    [
        {
            format: 'on-page-notification',
            title: 'On-Page Notification',
            description:
                'The format looks like a classic push-notification but appears only in the browser window, which brings the user right to the targeted action.',
        },
        {
            format: 'native',
            title: 'Native',
            description:
                'This format seamlessly embeds ads into site content, increasing revenue while maintaining a comfortable user environment.',
        },
        {
            format: 'push',
            title: 'Push-Notification',
            description:
                "Also known as Browser Notification, it is the ad unit sent to the user's device after subscription that takes enough space to attract users' attention ideally.",
        },
        {
            format: 'mobile-push',
            title: 'Mobile Push-Up',
            description:
                'The format is similar to Push-Notification but works only on mobile devices and without a subscription request.',
        },
        {
            format: 'interstitial',
            title: 'Interstitial',
            description:
                'It is an image with a title and a description that appears a few moments after the website is opened. The full page provides complete immersion in the product and the highest performance.',
        },
        {
            format: 'popunder',
            title: 'Popunder',
            description:
                "It refers to an advertisement that displays in a new window behind the user's current tab. Particularly beneficial for newcomers, it serves as an effective solution to mitigate banner-blindness.",
        },
    ];

export const HomeAdFormatsSection = () => {
    const isMobile = useIsMobile();

    return (
        <Section
            id={AD_FORMATS_SECTION_ID}
            bg="primary"
            intersection
            {...animationProps('gradientPrimary')}
        >
            <SectionCol cols={3}>
                <SectionCaption {...animationProps('fadeIn')}>
                    Advertising formats
                </SectionCaption>
            </SectionCol>
            <SectionCol cols={9} className="z-10">
                <SectionTitle className="md:w-[30.729vw]">
                    Advertising formats with the highest efficiency
                </SectionTitle>
                <SectionText className="md:mb-10 md:w-[50.5vw]">
                    Galaksion integrates all widely used advertising formats,
                    ensuring profitability for both publishers and advertisers
                    while remaining adaptable to any offer or user.
                </SectionText>

                {isMobile ? (
                    <AdFormatVerticalTabs />
                ) : (
                    <AdFormatHorizontalTabs />
                )}
            </SectionCol>
            <div className="absolute bottom-0 left-0 z-0 hidden md:block">
                <Image
                    src={bgBlackStars}
                    width={600}
                    quality={100}
                    alt="achievements"
                />
            </div>
        </Section>
    );
};
