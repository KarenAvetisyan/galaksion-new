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

import postImage from '@assets/images/advantages/deposit.png';

export const metadata: Metadata = {
    title: 'Minimum Top-Up Amount (Deposit)',
    description:
        'Start with just $50. Galaksion makes high-ROI campaigns accessible to all levels of advertisers.',
};

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/deposit`,
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
                            Minimum top-up amount (deposit)
                        </SectionTitle>
                        <SectionText>
                            Galaksion proves that achieving a strong ROI doesn’t
                            require a large initial investment, making its
                            platform a perfect choice for advertisers at any
                            level. Starting with Galaksion is simple and
                            accessible, thanks to the minimal deposit of $50.
                            Whether you’re new to the industry or an experienced
                            advertiser, dive in with confidence, knowing that
                            every dollar is optimized for maximum impact from
                            day one.
                        </SectionText>
                        <SectionImage
                            src={postImage}
                            alt="Minimum top-up amount (deposit)"
                        />
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
