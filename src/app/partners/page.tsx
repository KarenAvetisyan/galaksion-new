import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from '@components/ui/breadcrumb';
import {
    Section,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { PartnersTabs } from '@features/partner/components';

export const metadata: Metadata = {
    title: 'Media Partners',
    description:
        'Connect with trusted, high-quality traffic sources through Galaksion’s media partners section, ensuring transparency and optimal ad performance.',
};

export default function PartnersPage() {
    return (
        <BaseLayout>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>Media Partners</BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Section>
                <SectionCol cols={12}>
                    <SectionTitle>Media Partners</SectionTitle>
                    <SectionText>
                        There is strength in unity. By combining the vibrant
                        communities of our media partners with our powerful
                        direct traffic, we form the ideal alliance to drive the
                        affiliate marketing industry forward.
                    </SectionText>
                </SectionCol>
                <SectionCol cols={12}>
                    <PartnersTabs />
                </SectionCol>
            </Section>
        </BaseLayout>
    );
}
