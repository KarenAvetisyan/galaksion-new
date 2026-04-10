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
import { DictionaryCharList } from '@features/dictionary/components/dictionary-char-list';
import { DictionaryList } from '@features/dictionary/components/dictionary-list';
import { animationProps } from '@lib/utils';

export const metadata: Metadata = {
    title: 'Dictionary',
    description:
        'Stay informed and optimize your strategy with our clear definitions of key digital marketing terms.',
};

export default function DictionaryPage() {
    return (
        <BaseLayout>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem {...animationProps('fadeIn')}>
                        Dictionary
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Section bg="ghost" className="items-start">
                <SectionCol cols={12} className="gap-3 md:mb-6 md:gap-4">
                    <SectionTitle {...animationProps('fadeIn', { delay: 400 })}>
                        Dictionary
                    </SectionTitle>
                    <SectionText
                        className="md:w-1/2"
                        {...animationProps('fadeIn', { delay: 600 })}
                    >
                        Our Dictionary offers clear definitions of key digital
                        marketing terms, helping you stay informed and optimize
                        your strategy.
                    </SectionText>
                </SectionCol>
                <div className="md:col-span-2" />
                <SectionCol cols={1} className="md:sticky md:top-6 md:left-0">
                    <DictionaryCharList />
                </SectionCol>
                <SectionCol cols={6}>
                    <DictionaryList />
                </SectionCol>
            </Section>
        </BaseLayout>
    );
}
