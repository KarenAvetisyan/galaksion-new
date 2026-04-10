import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import { JsonLd } from '@components/json-ld';
import { generateMainPageSchema } from '@lib/json-ld';
import { FeedBackModal } from '@components/modals/feedback-modal';
import { HomeAdFormatsSection } from '@features/home/components/home-ad-formats-section';
import { HomeFeaturesSection } from '@features/home/components/home-features-section';
import { HomeMapSection } from '@features/home/components/home-map-section';
import { HomeNumbersSection } from '@features/home/components/home-numbers-section';
import { HomeStepsProfitSection } from '@features/home/components/home-steps-profit-section';
import { HomeWelcomeSection } from '@features/home/components/home-welcome-section';
import { HomeReviewsSection } from '@features/home/components/home-reviews-section';
import { HomePartnersSection } from '@features/home/components/home-partners-section';
import { HomeFaqSection } from '@features/home/components/home-faq-section';

export const metadata: Metadata = {
    title: '100% Direct Traffic on Galaksion',
    description:
        'Monetize offers with Galaksion. 1.5B daily impressions, 30K+ partners, expert campaign management, and easy optimization.',
};

export default function HomePage() {
    return (
        <>
            <JsonLd data={generateMainPageSchema()} />
            <BaseLayout>
                <HomeWelcomeSection />
                <HomeNumbersSection />
                <HomeStepsProfitSection />
                <HomeFeaturesSection />
                <HomeAdFormatsSection />
                <HomeMapSection />
                {/*<HomeWhyUsSection />*/}
                <HomeReviewsSection />
                <HomePartnersSection />
                <HomeFaqSection />
                <FeedBackModal />
            </BaseLayout>
        </>
    );
}
