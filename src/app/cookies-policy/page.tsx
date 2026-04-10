import { Metadata } from 'next';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import { isCyprus } from '@config/configure';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Cookies Policy',
    description:
        'Galaksion uses cookies to provide you with a good experience when you browse the website and also allows us to improve the website.',
};

export default function CookiesPolicyPage() {
    return (
        <PolicyAndTerms
            title="Cookies Policy"
            sectionTitle="Cookies Policy"
            content={isCyprus ? <CyprusContent /> : <GalaksionContent />}
        />
    );
}
