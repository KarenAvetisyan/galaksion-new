import React from 'react';
import { BaseLayout } from './base-layout';
import { Section, SectionCaption, SectionCol } from '@components/ui/section';
import { PolicyAndTermsAnchors } from './policy-and-terms-anchors';

type Props = {
    title: string;
    sectionTitle: string;
    content: JSX.Element;
};

const PolicyAndTerms = ({ title, sectionTitle, content }: Props) => {
    return (
        <BaseLayout title={title}>
            <PolicyAndTermsAnchors content={content} />
            <Section bg="secondary">
                <SectionCol cols={3}>
                    <SectionCaption>{sectionTitle}</SectionCaption>
                </SectionCol>
                <SectionCol cols={9}>{content}</SectionCol>
            </Section>
        </BaseLayout>
    );
};

export default PolicyAndTerms;
