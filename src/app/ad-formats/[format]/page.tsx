import { BaseLayout } from '@components/layout';
import { JsonLd } from '@components/json-ld';
import { generateFormatSchema } from '@lib/json-ld';
import { Caption } from '@components/typography';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionHeadline,
    SectionList,
    SectionListItem,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { AdFormatDemo } from '@features/ad-format/components';
import { adFormats } from '@features/ad-format/constants';
import { AdFormats } from '@features/ad-format/types';
import { animationProps } from '@lib/utils';
import { siteUrl } from '@config/configure';
import { Metadata } from 'next';

type Props = {
    params: { format: string };
};

interface MetadataProps {
    title: string;
    description: string;
}

const formatMetadata: Record<string, MetadataProps> = {
    popunder: {
        title: 'Popunder',
        description:
            'Opens behind the active tab upon interaction. Highest traffic compatible across all devices: maximize your reach, avoid banner blindness, and boost your profit.',
    },
    push: {
        title: 'Push-Notification',
        description:
            "Delivers browser alerts even when users aren't browsing. Ideal for retargeting, boosting ROI, and maintaining brand visibility.",
    },
    native: {
        title: 'Native',
        description:
            'Boost your ROI with seamless native ads that fit any device or platform. Designed for higher click-through rates without disrupting the user journey.',
    },
    'mobile-push': {
        title: 'Mobile Push-Up',
        description:
            'Subtle mobile notifications that mimic push ads. A game-changer for mobile advertising compatible with iOS & Android and ideal for high-performing verticals.',
    },
    'on-page-notification': {
        title: 'On-Page Notification',
        description:
            'Seamless ads shown directly within the browser window. Increase clicks, overcome banner blindness, and engage audiences in real time — best for quality leads.',
    },
    interstitial: {
        title: 'Interstitial',
        description:
            'Reach users with effective full-screen ads appearing shortly after a user lands on a website. Lift conversions and ROI across top-performing verticals.',
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const formatName = decodeURIComponent(params.format);
    const metadata = formatMetadata[formatName];

    return {
        title: metadata.title,
        description: metadata.description,
    };
}

interface AdvertisersPageProps {
    params: { format: AdFormats };
}

export default function AdvertisersPage({ params }: AdvertisersPageProps) {
    const data = adFormats.find((format) => format.key === params.format)!;
    const currentFormat = formatMetadata[params.format];

    return (
        <>
            <JsonLd
                data={generateFormatSchema({
                    serviceType: `${currentFormat?.title || data.title} Advertising`,
                    url: `${siteUrl}/ad-formats/${params.format}`,
                    description: currentFormat?.description || data.subTitle,
                })}
            />
            <BaseLayout title={data.title}>
                <Caption
                    upperCase
                    className="md:hidden"
                    {...animationProps('fadeIn')}
                >
                    Ad formats
                </Caption>
                <Section
                    bg="secondary"
                    className="mt-6 md:mt-0"
                    {...animationProps('gradientSecondary')}
                >
                    <SectionCol cols={3} className="hidden md:flex">
                        <SectionCaption {...animationProps('fadeIn')}>
                            Ad formats
                        </SectionCaption>
                    </SectionCol>
                    <SectionCol cols={9} className="md:w-[47vw]">
                        <SectionTitle
                            as="h1"
                            {...animationProps('fadeIn', { delay: 400 })}
                        >
                            {data.title}
                        </SectionTitle>
                        <SectionText
                            {...animationProps('fadeIn', { delay: 600 })}
                        >
                            {data.subTitle}
                        </SectionText>
                        <SectionHeadline
                            as="h2"
                            className="mt-12 mb-6"
                            {...animationProps('fadeIn', { delay: 800 })}
                        >
                            {data.headline}
                        </SectionHeadline>
                        <SectionText
                            {...animationProps('fadeIn', { delay: 1000 })}
                        >
                            {data.text}
                        </SectionText>
                        <div className="flex-center my-6 flex">
                            <AdFormatDemo
                                format={params.format}
                                className="-ml-2 md:ml-0"
                            />
                        </div>
                        <SectionHeadline
                            as="h2"
                            {...animationProps('fadeIn', { delay: 1200 })}
                        >
                            {data.list.title}
                        </SectionHeadline>
                        <SectionList
                            {...animationProps('fadeIn', { delay: 1400 })}
                        >
                            {data.list.items.map((item, key) => (
                                <SectionListItem key={key}>
                                    {item}
                                </SectionListItem>
                            ))}
                        </SectionList>
                        <SectionText
                            {...animationProps('fadeIn', { delay: 1600 })}
                        >
                            Pricing models: {data.pricingModels.join(', ')}
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
