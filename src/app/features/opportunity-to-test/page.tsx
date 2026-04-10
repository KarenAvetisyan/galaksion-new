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

import postImage from '@assets/images/advantages/opportunity-to-test.png';

export const metadata: Metadata = {
    title: 'Opportunity to Test up to 10 Creatives in 1 Campaign',
    description:
        'A/B testing made simple — compare up to 10 creatives, track performance, and focus on what drives the most conversions.',
};

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/opportunity-to-test`,
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
                            Opportunity to Test up to 10 Creatives in 1 Campaign
                        </SectionTitle>
                        <SectionText>
                            Galaksion’s A/B testing feature allows you to launch
                            multiple creatives within the same campaign, each
                            with unique images, headlines, and body text. After
                            launch, evaluate their performance and keep only the
                            highest-performing creatives running.
                        </SectionText>
                        <SectionImage
                            src={postImage}
                            alt="Opportunity to Test up to 10 Creatives in 1 Campaign"
                        />
                        <SectionText>
                            Optimize manually or let the auto-optimization tool
                            do the work — displaying the combinations with the
                            best conversion and CTR rates to maximize results.
                            With A/B testing feature, quickly identify and focus
                            on the top-performing creative, streamlining the
                            path to your goals.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
