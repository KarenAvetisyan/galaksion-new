import { Metadata } from 'next';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import { isCyprus } from '@config/configure';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Details on how Galaksion collects, uses, stores, and protects personal data. User rights, cookies, security, and legal compliance info.',
};

export default function PrivacyPolicyPage() {
    return (
        <PolicyAndTerms
            title="Privacy Policy"
            sectionTitle="Privacy Policy"
            content={isCyprus ? <CyprusContent /> : <GalaksionContent />} />
    );
}
