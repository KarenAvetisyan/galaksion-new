import { Caption, Text } from '@components/typography';
import { SocialButton } from '@components/ui/social-button';
import { Logo } from './logo';
import {
    Section,
    SectionCol,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import Link from 'next/link';
import { paths } from '@config/routing';
import FooterContacts from './footer-contacts';

const links = [
    {
        title: 'Privacy Policy',
        path: paths.privacyPolicy,
    },
    {
        title: 'Sanction Policy',
        path: paths.sanctionPolicy,
    },
    {
        title: 'Cookies',
        path: paths.cookiesPolicy,
    },
    {
        title: 'Data Protection Addendum',
        path: paths.dataProtection,
    },
    {
        title: 'Publishers Terms and Conditions',
        path: 'https://profiton.com/terms',
        outside: true,
    },
    {
        title: 'Advertisers Terms and Conditions',
        path: paths.advertisersTerms,
    },
    {
        title: 'Sitemap',
        path: paths.sitemap,
    },
];

export const Footer = () => {
    return (
        <Section bg="secondary">
            <SectionCol cols={3} className="justify-between">
                <Logo />
                <div className="hidden md:grid">
                    {links.map(({ title, path, outside }) =>
                        outside ? (
                            <a
                                key={`md_${path}`}
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Caption>{title}</Caption>
                            </a>
                        ) : (
                            <Link key={`md_${path}`} href={path}>
                                <Caption>{title}</Caption>
                            </Link>
                        ),
                    )}
                </div>
            </SectionCol>
            <SectionCol cols={9}>
                <SectionTitle className="mb-5 text-xl">
                    Follow us on social media
                </SectionTitle>
                <SectionText className="hidden md:block md:w-[37.5vw]">
                    Be the first to get all the bonuses, tips, and tricks on
                    affiliate marketing.
                </SectionText>
                <div className="grid grid-cols-12">
                    <div className="col-span-full mb-14 grid grid-cols-2 gap-3 md:grid-cols-3">
                        <SocialButton social="instagram" size="large" />
                        <SocialButton social="facebook" size="large" />
                        <SocialButton social="telegram" size="large" />
                        <SocialButton social="linkedIn" size="large" />
                        <SocialButton social="twitter" size="large" />
                    </div>

                    <div className="col-span-full">
                        <div className="mb-4 grid md:hidden">
                            {links.map(({ title, path, outside }) =>
                                outside ? (
                                    <a
                                        key={path}
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {title}
                                    </a>
                                ) : (
                                    <Link
                                        key={path}
                                        href={path}
                                        className="text-base"
                                    >
                                        {title}
                                    </Link>
                                ),
                            )}
                        </div>

                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <FooterContacts />
                            <div className="flex flex-row gap-6">
                                <Text>© 2014-{new Date().getFullYear()}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionCol>
        </Section>
    );
};
