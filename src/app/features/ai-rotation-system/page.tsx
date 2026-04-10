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

import postImage from '@assets/images/advantages/ai-rotation-system.png';

export const metadata: Metadata = {
    title: 'AI Rotation System',
    description:
        'Achieve higher CR and ROI with automated ad rotation. AI prioritizes the ads most likely to connect with your audience.',
};

export default function AdvantagesBaseOfCreativesPage() {
    return (
        <>
            <JsonLd
                data={generateFeatureSchema({
                    serviceType: metadata.title as string,
                    url: `${siteUrl}/features/ai-rotation-system`,
                    description: metadata.description as string,
                })}
            />
            <BaseLayout>
                <Breadcrumb className="md:hidden">
                    <BreadcrumbList>
                        <BreadcrumbItem>Features</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Section bg="secondary">
                    <SectionCol cols={3} className="hidden md:flex">
                        <SectionCaption>Features</SectionCaption>
                    </SectionCol>
                    <SectionCol cols={9} className="md:w-[46.875vw]">
                        <SectionTitle as="h1" className="md:pr-10">
                            AI Rotation System
                        </SectionTitle>
                        <SectionText>
                            Galaksion’s AI Rotation System enhances your
                            campaigns with intelligent, automated ad rotation,
                            optimizing each impression to maximize results. By
                            continuously analyzing performance, this system
                            prioritizes the most relevant and engaging content
                            for your audience, ensuring that each ad displayed
                            has the highest potential for interaction. This
                            sophisticated tool not only improves campaign
                            effectiveness but also drives significantly higher
                            engagement rates, helping you achieve optimal reach
                            and impact.
                        </SectionText>
                        <SectionImage
                            src={postImage}
                            alt="AI Rotation System"
                        />
                    </SectionCol>
                </Section>
            </BaseLayout>
        </>
    );
}
