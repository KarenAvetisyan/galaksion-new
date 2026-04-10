import { Metadata } from 'next';
import { JsonLd } from '@components/json-ld';
import { generateDataProtectionPageSchema } from '@lib/json-ld';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import { isCyprus } from '@config/configure';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Data Protection',
    description:
        'Definitions, lawful grounds, data transfers, security, and deletion procedures under Galaksion’s Data Protection Addendum.',
};

export default function DataProtectionPage() {
    return (
        <>
            <JsonLd data={generateDataProtectionPageSchema()} />
            <PolicyAndTerms
                title="Data Protection Addendum"
                sectionTitle="Data Protection"
                content={isCyprus ? <CyprusContent /> : <GalaksionContent />}
            />
        </>
    );
}
