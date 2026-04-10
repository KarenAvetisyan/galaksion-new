import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { AchievementsGrid } from '@features/achievement/components/achievements-grid';
import { animationProps } from '@lib/utils';

export const metadata: Metadata = {
    title: 'Targeting Options',
    description:
        'Full set of targeting options in one place: GEOs, platforms, devices, OS, time zones, languages, and MORE. Enjoy higher ROI via thinner slices on Galaksion.',
};

export default function AchievementsPage() {
    return (
        <BaseLayout>
            <Section className="mb-4 md:mb-0 md:pt-2">
                <SectionCol cols={3}>
                    <SectionCaption {...animationProps('fadeIn')}>
                        8 targets
                    </SectionCaption>
                </SectionCol>
                <SectionCol cols={9}>
                    <SectionTitle {...animationProps('fadeIn', { delay: 300 })}>
                        Targeting options
                    </SectionTitle>
                    <SectionText
                        className="md:mb-5 md:w-[36.458vw]"
                        {...animationProps('fadeIn', { delay: 600 })}
                    >
                        Experience precision advertising with Galaksion’s
                        advanced targeting options to reach your ideal audience
                        effortlessly and boost campaign performance. Discover
                        the future of digital advertising with us today!
                    </SectionText>
                </SectionCol>
            </Section>
            <AchievementsGrid />
        </BaseLayout>
    );
}
