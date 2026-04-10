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

import postImage from '@assets/images/advantages/antifraud-system.png';

export const metadata: Metadata = {
    title: 'Antifraud System',
    description:
        'Keep your campaigns safe with cutting-edge antifraud technology, trusted traffic sources, and\n' +
        'real-time monitoring. No bots, resell, or remnant.',
};

export default function AdvantagesAntifraudSystemPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/antifraud-system`,
                    description: metadata.description as string,
                })}
            />
            <BaseLayout>
                <Breadcrumb className="md:hidden">
                    <BreadcrumbList>
                        <BreadcrumbItem>Advantages</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Section bg="secondary" className="">
                    <SectionCol cols={3} className="hidden md:flex">
                        <SectionCaption>Features</SectionCaption>
                    </SectionCol>
                    <SectionCol cols={9} className="md:w-[46.875vw]">
                        <SectionTitle as="h1">Antifraud system</SectionTitle>
                        <SectionText>
                            Galaksion’s advanced antifraud system is engineered
                            to safeguard your campaigns from all forms of
                            malicious activity. Our specialists monitor every
                            click across devices, ad formats, and GEOs, ensuring
                            only genuine user interactions are counted.
                        </SectionText>
                        <SectionImage src={postImage} alt="Antifraud system" />
                        <SectionText>
                            Our commitment to quality traffic is reinforced by
                            our exclusive partnerships with trusted publishers —
                            Galaksion does not resell traffic from other
                            networks. In cases where a publisher’s activity does
                            not meet our standards, we promptly terminate the
                            partnership to maintain the integrity and
                            transparency of our platform.
                        </SectionText>
                        <SectionText>
                            Supported by an innovative IT development team, our
                            antifraud system not only uses industry-leading
                            algorithms but also continuously develops new data
                            analysis methods to stay ahead of emerging fraud
                            tactics. Work with Galaksion and get ad placements
                            that are legal, transparent, and completely
                            fraud-free.
                        </SectionText>
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
