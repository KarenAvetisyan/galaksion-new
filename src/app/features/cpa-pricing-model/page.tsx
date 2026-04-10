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
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { JsonLd } from '@components/json-ld';
import { generateFeatureSchema } from '@lib/json-ld';
import { siteUrl } from '@config/configure';

import postImage from '@assets/images/advantages/cpa-pricing-model.png';

export const metadata: Metadata = {
    title: 'CPA Pricing Model',
    description:
        'Pay only for conversions with Galaksion’s genuine Cost-Per-Action model. Start testing from $10 and maximize your campaign reach at no extra cost.',
};

export default function AdvantagesCPAPricingModelPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/cpa-pricing-model`,
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
                        <SectionTitle as="h1">CPA Pricing Model</SectionTitle>
                        <SectionText>
                            Galaksion stands at the forefront of CPA
                            (Cost-Per-Action) pricing model, making it easier
                            than ever to drive conversions while controlling
                            costs. With a low minimum test budget of just $10
                            for On-Page Notification or Push-Notification
                            campaigns and $20 for Popup/Popunder, Galaksion
                            makes CPA campaigns accessible and results-focused.
                            Experience the next level of digital advertising
                            with a pricing model where you pay solely for
                            results.
                        </SectionText>
                        <SectionImage src={postImage} alt="CPA Pricing Model" />
                        <SectionText>
                            With a low minimum test budget of just $10,
                            Galaksion makes CPA campaigns accessible and
                            results-focused. Experience the next level of
                            digital advertising with a pricing model where you
                            pay solely for results.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
