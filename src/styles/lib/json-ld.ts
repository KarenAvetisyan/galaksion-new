import { siteUrl, contactEmail, organizationName } from '@config/configure';

export function generateOrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: organizationName,
        alternateName: 'Galaksion',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/favicon.svg`,
        sameAs: [
            'https://www.instagram.com/galaksion_ads/?hl=en',
            'https://www.facebook.com/Galaksion-1507912652796836/',
            'https://t.me/galaksionnews',
            'https://www.linkedin.com/company/6871166/',
            'https://twitter.com/galaksion',
        ],
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: contactEmail,
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Brivibas iela 57-17/18',
            postalCode: 'LV-1010',
            addressLocality: 'Riga',
            addressCountry: 'LV',
        },
    };

    return schema;
}

export function generateMainPageSchema() {
    const schemas = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Galaksion',
            url: `${siteUrl}/`,
            publisher: {
                '@type': 'Organization',
                name: organizationName,
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'How do I start advertising with Galaksion?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Getting started is quick and easy:
1. Sign up for free on Galaksion’s platform.
2. Fill in the legal info in the 'Profile' Section.
3. Make the deposit in the 'Payments' section.
4. Choose your pricing model.
5. Pick your ad format and set up targeting settings.
6. Define your budget and campaign schedule.
7. Launch your campaign and track performance in real-time.
Our dedicated personal managers are here to guide you through the process.`,
                    },
                },
                {
                    '@type': 'Question',
                    name: 'What is the minimum deposit amount in Galaksion?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The minimum deposit is $50.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How can I add funds to my Galaksion’s account?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "Go to the 'Payments' section in your SSP account, choose a payment method, enter the amount, and click 'Make a deposit'.",
                    },
                },
                {
                    '@type': 'Question',
                    name: 'What payment methods does Galaksion accept?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Credit Card, Paxum, Wire Transfer, or other methods on request from your personal manager.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How can I find average rates and available traffic for my campaign?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: "Go to the 'Traffic volumes' section, enter your campaign's settings, and get detailed information on your case.",
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How does Galaksion ensure traffic quality?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: `We prioritize quality and security with:
1. Antifraud system: advanced algorithms to detect and block bots and malware.
2. Reliable publishers: only real, high-quality traffic sources are allowed.
3. Continuous monitoring: our team ensures your campaigns run safely and effectively.`,
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Can I track and optimize my campaigns in real time?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: `1. Real-time stats: monitor clicks, impressions, CTR, and ROI using Galaksion’s features, including Delta in Statistics to compare campaigns’ statistical parameters for selected days and CPA-paid tests Detalization.
2. Detailed reports: analyse performance by device, GEO, and other factors.
3. Third-party tracking integration: use tools like Voluum, Binom, or RedTrack.`,
                    },
                },
            ],
        },
    ];
    return schemas;
}

export function generateAboutPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Galaksion',
        url: `${siteUrl}/about`,
        about: {
            '@type': 'Organization',
            name: 'Galaksion',
            url: `${siteUrl}/`,
        },
        publisher: {
            '@type': 'Organization',
            name: organizationName,
        },
    };

    return schema;
}

export function generateDataProtectionPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Data Protection Addendum',
        url: `${siteUrl}/data-protection`,
        publisher: {
            '@type': 'Organization',
            name: 'Galaksion',
        },
    };

    return schema;
}

export function generateSanctionPolicyPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sanction Policy',
        url: `${siteUrl}/sanction-policy`,
        publisher: {
            '@type': 'Organization',
            name: 'Galaksion',
        },
    };

    return schema;
}

export function generateBlogPageSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Galaksion Blog',
        url: `${siteUrl}/blog`,
        publisher: {
            '@type': 'Organization',
            name: 'Galaksion',
        },
    };

    return schema;
}

export function generateArticleSchema(params: {
    url: string;
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': params.url,
        },
        headline: params.headline,
        description: params.description,
        ...(params.image && { image: params.image }),
        author: {
            '@type': 'Organization',
            name: 'Galaksion',
            url: `${siteUrl}/`,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Galaksion',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/favicon.svg`,
            },
        },
        datePublished: params.datePublished,
        dateModified: params.dateModified || params.datePublished,
    };

    return schema;
}

export function generateFeatureSchema(params: {
    serviceType: string;
    url: string;
    description: string;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: params.serviceType,
        provider: {
            '@type': 'Organization',
            name: 'Galaksion',
            url: `${siteUrl}/`,
        },
        areaServed: 'Worldwide',
        audience: {
            '@type': 'Audience',
            audienceType: 'Advertisers, Affiliate marketers',
        },
        offers: {
            '@type': 'Offer',
            category: 'CPM,sCPM,CPA',
        },
        url: params.url,
        description: params.description,
    };

    return schema;
}

export function generateFormatSchema(params: {
    serviceType: string;
    url: string;
    description: string;
}) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: params.serviceType,
        provider: {
            '@type': 'Organization',
            name: 'Galaksion',
            url: `${siteUrl}/`,
        },
        areaServed: 'Worldwide',
        audience: {
            '@type': 'Audience',
            audienceType: 'Advertisers, Affiliate marketers',
        },
        offers: {
            '@type': 'Offer',
            category: 'CPM,sCPM,CPA',
        },
        url: params.url,
        description: params.description,
    };

    return schema;
}
