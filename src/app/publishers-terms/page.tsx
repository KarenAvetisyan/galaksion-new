import { isCyprus } from '@config/configure';
import { Metadata } from 'next';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Publishers Terms and Conditions',
    description:
        'Galaksion’s publisher requirements, ad placement standards, commission rules, prohibited conduct, and contract termination terms.',
};

export default function PublishersTermsPage() {
    return (
        <PolicyAndTerms
            title="Publishers Terms and Conditions"
            sectionTitle="Publishers Terms"
            content={isCyprus ? <CyprusContent /> : <GalaksionContent />}
        />
    );
}
