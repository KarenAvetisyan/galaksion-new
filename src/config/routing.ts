import { AdFormats } from '@features/ad-format/types';
import { AdvantageKeys } from '@features/advantage/types';

export const paths = {
    home: '/',
    achievements: '/achievements',
    features: (page?: AdvantageKeys) => `/features/${page ?? ''}`,
    adFormats: (format: AdFormats) => `/ad-formats/${format}`,
    about: '/about',
    blog: '/blog',
    blogPost: (slug: string) => `/${slug}`,
    dictionary: '/dictionary',
    partners: '/partners',
    privacyPolicy: '/privacy-policy',
    sanctionPolicy: '/sanction-policy',
    cookiesPolicy: `/cookies-policy`,
    dataProtection: '/data-protection',
    advertisersTerms: '/advertisers-terms',
    publishersTerms: '/publishers-terms',
    sitemap: '/sitemap',
};
