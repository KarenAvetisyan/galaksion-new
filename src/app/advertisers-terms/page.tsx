import { isCyprus } from '@config/configure';
import { Metadata } from 'next';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Advertisers Terms and Conditions',
    description:
        'Galaksion’s advertiser obligations, prohibited ad content, payment rules, refund policy, confidentiality, and legal terms.',
};

export default function AdvertisersTermsPage() {
    return (
        <PolicyAndTerms
            title="Advertisers Terms and Conditions"
            sectionTitle="Advertisers Terms"
            content={isCyprus ? <CyprusContent /> : <GalaksionContent />}
        />
    );
}
