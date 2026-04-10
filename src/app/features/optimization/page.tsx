import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from '@components/ui/breadcrumb';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionImage,
    SectionList,
    SectionListItem,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { JsonLd } from '@components/json-ld';
import { generateFeatureSchema } from '@lib/json-ld';
import { siteUrl } from '@config/configure';

import postImage from '@assets/images/advantages/optimization.png';
import { Headline, Text } from '@components/typography';

export const metadata: Metadata = {
    title: 'Optimization/Scaling Tools',
    description:
        "Unlock your campaign's full potential with smart optimization. Your toolkit for higher ROI: Custom Rates, Zones Tumbler Switch, Audience Targeting, and MORE.",
};

const listItems: { title: string; subtitle: string }[] = [
    {
        title: 'Creative Adjustments and Targeting Enhancement',
        subtitle:
            'Experiment with creatives, titles, traffic zones, expenses, and targeting options to identify what works best for your audience.',
    },
    {
        title: 'Delta in Statistics',
        subtitle:
            'Easily compare campaigns’ statistical parameters for selected days. This feature helps pinpoint areas for improvement, scale profitable campaigns, or stop underperforming ones.',
    },
    {
        title: 'CPA-Paid Tests Detalization',
        subtitle:
            'For CPA pricing model, dive deep into test performance details to explore new opportunities and refine your approach with precision.',
    },
    {
        title: 'Custom Rates & Zones Tumbler Switch',
        subtitle:
            'Maximize efficiency by adjusting rates for individual zones with Custom Rates or blacklisting unprofitable zones directly in the “Campaigns” section using the Zones tumbler switch. These tools save time and help allocate your budget wisely.',
    },
    {
        title: 'Audience Targeting',
        subtitle:
            'Take your Pops CPM campaigns to the next level by targeting specific user categories. Powered by insights from past interactions and user activity, this tool ensures your ads reach the most relevant audience, driving higher engagement and ROI.',
    },
];

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/optimization`,
                    description: metadata.description as string,
                })}
            />
            <BaseLayout>
                <Breadcrumb className="md:hidden">
                    <BreadcrumbList>
                        <BreadcrumbItem>Features</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Section bg="secondary" className="">
                    <SectionCol cols={3} className="hidden md:flex">
                        <SectionCaption>Features</SectionCaption>
                    </SectionCol>
                    <SectionCol cols={9} className="md:w-[46.875vw]">
                        <SectionTitle as="h1" className="md:pr-10">
                            Optimization/Scaling tools
                        </SectionTitle>
                        <SectionText>
                            Launching your campaign is just the beginning.
                            Optimization is the key to unlocking its full
                            potential. Galaksion offers a suite of powerful
                            tools to help you fine-tune every aspect and turn
                            results around.
                        </SectionText>
                        <SectionImage
                            src={postImage}
                            alt="Optimization/Scaling tools"
                        />
                        <SectionList className="grid gap-4">
                            {listItems.map((item) => (
                                <SectionListItem
                                    key={item.title}
                                    className="md:pl-3"
                                >
                                    <Headline
                                        as="h2"
                                        weight={500}
                                        className="mb-1 text-xl"
                                    >
                                        {item.title}
                                    </Headline>
                                    <Text>{item.subtitle}</Text>
                                </SectionListItem>
                            ))}
                        </SectionList>
                        <SectionText>
                            At Galaksion, we provide the tools and strategies
                            you need to optimize smarter and scale faster.
                            Success starts with constant improvement — let us
                            help you get there effortlessly.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
