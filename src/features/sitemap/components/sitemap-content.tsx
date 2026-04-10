import Link from 'next/link';
import { Caption, Text } from '@components/typography';
import { Section, SectionCol, SectionTitle } from '@components/ui/section';
import { sections } from '../constants';
import { SectionLink } from '../types';

export function SitemapContent() {
    return (
        <Section className="py-16">
            <SectionCol cols={12}>
                <div className="mb-12">
                    <SectionTitle className="mb-6">Site Map</SectionTitle>
                    <Text className="text-lg">
                        Complete list of all pages on Galaksion website
                    </Text>
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {sections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link: SectionLink) => (
                                    <li key={link.path}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <Caption>{link.title}</Caption>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionCol>
        </Section>
    );
}
