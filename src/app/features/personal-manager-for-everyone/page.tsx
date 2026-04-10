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

import postImage from '@assets/images/advantages/personal-manager-for-everyone.png';

export const metadata: Metadata = {
    title: 'Personal Manager for Everyone',
    description:
        '24/7 access to a dedicated account manager for expert guidance and strategy. Get insights, creatives, and winning GEOs anytime.',
};

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/personal-manager-for-everyone`,
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
                            Personal Manager for Everyone
                        </SectionTitle>
                        <SectionText>
                            Experience 24/7 access to dedicated digital
                            marketing experts. Whether you're an affiliate
                            master or launching your first campaign, your
                            personal account manager is your direct path to
                            success — helping you sidestep common pitfalls,
                            optimize strategies, and get the best results from
                            your campaigns.
                        </SectionText>
                        <SectionImage
                            src={postImage}
                            alt="Personal Manager for Everyone"
                        />
                        <SectionText className="mb-0 md:mb-0">
                            Reach out to your manager for:
                        </SectionText>
                        <SectionList>
                            <SectionListItem>
                                step-by-step guidance if you're new to the
                                platform;
                            </SectionListItem>
                            <SectionListItem>
                                insights into top offers, GEOs, and ad formats
                                for driving traffic;
                            </SectionListItem>
                            <SectionListItem>
                                professional support with campaign optimization;
                            </SectionListItem>
                            <SectionListItem>
                                a place to share feedback for an even better
                                experience.
                            </SectionListItem>
                        </SectionList>
                        <SectionText>
                            Your manager is more than just support — they’re
                            your strategic partner, sharing top-performing
                            verticals, GEOs, formats, and even providing you
                            with creatives and pre-landers. To ensure you stay
                            ahead in a competitive market, managers will keep
                            you updated on contests, promo codes, and new
                            features.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
