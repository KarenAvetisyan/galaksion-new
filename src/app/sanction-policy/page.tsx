import { Metadata } from 'next';
import { JsonLd } from '@components/json-ld';
import { generateSanctionPolicyPageSchema } from '@lib/json-ld';
import CyprusContent from './constants/cyprus-content';
import GalaksionContent from './constants/galaksion-content';
import { isCyprus } from '@config/configure';
import PolicyAndTerms from '@components/layout/policy-and-terms';

export const metadata: Metadata = {
    title: 'Sanction Policy',
    description:
        'Client certification of obligation to observe national and international sanctions.',
};

export default function SanctionPolicyPage() {
    return (
        <>
            <JsonLd data={generateSanctionPolicyPageSchema()} />
            <PolicyAndTerms
                title="Sanction Policy"
                sectionTitle="Sanction Policy"
                content={isCyprus ? <CyprusContent /> : <GalaksionContent />}
            />
        </>
    );
}
