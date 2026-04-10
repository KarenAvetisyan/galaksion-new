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
    SectionHeadline,
    SectionImage,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { JsonLd } from '@components/json-ld';
import { generateFeatureSchema } from '@lib/json-ld';
import { siteUrl } from '@config/configure';

import postImage from '@assets/images/advantages/direct-traffic.png';

export const metadata: Metadata = {
    title: 'Direct Traffic',
    description:
        'Get your best ROI with 100% direct traffic from trusted website owners. No resell, no bots, no remnant — only genuine audience and maximum benefits.',
};

export default function AdvantagesDirectTraficPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/direct-traffic`,
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
                        <SectionTitle as="h1">Direct Traffic</SectionTitle>
                        <SectionText>
                            At Galaksion, we pride ourselves on offering clean,
                            high-quality traffic sourced directly from trusted
                            website owners. This direct approach ensures traffic
                            purity, free from bots, resold impressions, or
                            remnant sources, giving you maximum value for every
                            click.
                        </SectionText>
                        <SectionImage src={postImage} alt="Direct Traffic" />
                        <SectionHeadline as="h2">
                            Why Choose Galaksion?
                        </SectionHeadline>
                        <SectionText>
                            The advertising landscape is often clouded by layers
                            of reselling between networks. Traffic passes
                            through multiple hands, with each intermediary
                            adding costs and often compromising quality with
                            bots or artificial traffic. Galaksion stands apart,
                            positioned at the very start of the chain, sourcing
                            traffic directly from its origin: website owners.
                            This unique position allows us to provide
                            advertisers with authentic, affordable traffic that
                            delivers results. We call it direct traffic —
                            transparent, reliable, and clean. Let us connect you
                            with authentic audiences and help your campaigns
                            thrive with traffic you can trust.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
