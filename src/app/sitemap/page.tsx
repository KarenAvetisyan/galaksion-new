import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import { SitemapContent } from '../../features/sitemap/components/sitemap-content';

export const metadata: Metadata = {
    title: 'Sitemap - Galaksion',
    description: 'Site navigation and page structure for Galaksion advertising network',
};

export default function SitemapPage() {
    return (
        <BaseLayout>
            <SitemapContent />
        </BaseLayout>
    );
}
