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

import postImage from '@assets/images/advantages/base-of-creatives.png';

export const metadata: Metadata = {
    title: 'Free Tested Base of Creatives',
    description:
        'Tested ad creatives that deliver results, paired with ready-made templates to simplify campaign launch and improve performance.',
};

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/base-of-creatives`,
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
                        <SectionTitle as="h1">
                            Free Tested Base of Creatives
                        </SectionTitle>
                        <SectionText>
                            With Galaksion’s Self-Service platform, access a
                            library of high-converting creatives — tested and
                            proven on our trusted sources. No need to design or
                            pay for custom creatives; simply choose from
                            ready-made options to start campaigns more easily
                            and profitably.
                        </SectionText>

                        <SectionImage
                            src={postImage}
                            alt="Free Tested Base of Creatives"
                        />

                        <SectionText>
                            When setting up a campaign, Galaksion’s system
                            automatically recommends three creatives optimized
                            to meet your settings. It makes it even easier to
                            achieve success.
                        </SectionText>
                        <SectionText>
                            Whether you’re new to Galaksion or an experienced
                            advertiser exploring new GEOs and verticals, the
                            Creative Templates section offers a quick path to
                            impactful campaigns. Just select a creative, set
                            your targeting, and launch.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
