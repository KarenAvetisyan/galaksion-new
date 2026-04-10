import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import { Headline, Text, Title } from '@components/typography';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from '@components/ui/breadcrumb';
import { Card, CardContent } from '@components/ui/card';
import { animationProps } from '@lib/utils';
import Image from 'next/image';

import mainImage from '@assets/images/about/main-image.png';
import { generateAboutPageSchema } from '@lib/json-ld';
import { JsonLd } from '@components/json-ld';

export const metadata: Metadata = {
    title: 'About Galaksion',
    description:
        'Reach your profit goals with Galaksion — power by 50B+ impressions, 10K sites, 245+ countries, and a 400% annual growth rate across over 10 years of experience.',
};

const years = [
    {
        year: '2014–2017',
        list: [
            'Founding of Galaksion',
            'Initial achievements in India, Indonesia & Malaysia',
            '18 bln impressions monthly',
            'A partnership with Lazada',
        ],
    },
    {
        year: '2018',
        list: [
            'Launch of Self-Service Platform and Real-Time Bidding department',
            'New ad formats: Push-Notification & Native Ads',
            '#1 in Appsflyer ranking of the best universal mobile traffic sources',
            'A partnership with Aliexpress, *Starz and ArpuPlus',
            '160+ GEOs',
        ],
    },
    {
        year: '2019-2020',
        list: [
            'Self-Service Platform major update',
            'More presence in Tier-1 and Arab speaking countries',
            'A partnership with Amazon Prime',
            'A new ad format: On-Page Notification',
        ],
    },
    {
        year: '2021-now',
        list: [
            'Best Indonesian traffic source award (AccessTrade Summit)',
            'More traffic in South East Asia: 330 mln impressions daily',
            'A new ad format: Interstitial',
            '#1 in Offervault Top Networks Summer and Winter Voting 2024',
            '#1 in Offervault Top Networks Summer 2025',
            'Top-1 Ad Network in Affminer Affiliate Awards 2025',
            'An innovative business model: Smart CPM',
            'Audience Targeting to reach specific user categories',
        ],
    },
];

export default function AboutPage() {
    return (
        <>
            <JsonLd data={generateAboutPageSchema()} />
            <BaseLayout>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem {...animationProps('fadeIn')}>
                            About Galaksion
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Title {...animationProps('fadeIn', { delay: 500 })}>
                    About Galaksion
                </Title>
                <div className="my-6 grid grid-cols-2 gap-6">
                    <Text
                        muted
                        className="order-1 col-span-2 md:col-span-1 md:w-10/12"
                        {...animationProps('fadeIn', { delay: 750 })}
                    >
                        Founded in 2014, Galaksion is an international
                        advertising network delivering over 50 billion monthly
                        impressions to help our partners achieve exceptional
                        growth. Our strategy has been crystal clear from the
                        very beginning: constant growth and ambitious
                        development.
                    </Text>
                    <Text
                        muted
                        className="order-3 col-span-2 md:col-span-1 md:w-10/12"
                        {...animationProps('fadeIn', { delay: 1000 })}
                    >
                        This drive has resulted in Galaksion achieving a
                        remarkable 400% annual growth rate since 2015, quickly
                        establishing ourselves as one of the leading players in
                        the industry. Today, we partner with approximately
                        10,000 websites, helping advertisers, publishers, and
                        affiliates in over 245 countries to achieve their goals.
                    </Text>
                    <div
                        className="relative order-2 col-span-2 w-full md:order-4"
                        {...animationProps('fadeIn', { delay: 1000 })}
                    >
                        <Image
                            src={mainImage}
                            alt="About Galaksion"
                            quality={100}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="my-4 grid gap-3 md:grid-cols-2">
                    {years.map((year, index) => (
                        <Card
                            key={year.year}
                            className="md:h-[13.385vw]"
                            {...animationProps('fadeIn,scaleUp', {
                                duration: 1000,
                                delay: 1300 + +index * 300,
                            })}
                        >
                            <CardContent className="justify-between gap-4 md:gap-0 md:p-8 overflow-y-auto scrollbar-hidden">
                                <Headline className="text-3xl">
                                    {year.year}
                                </Headline>

                                <ul className="ml-6 list-disc md:text-xl">
                                    {year.list.map((item) => (
                                        <li key={item} className="opacity-80">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </BaseLayout>
        </>
    );
}
