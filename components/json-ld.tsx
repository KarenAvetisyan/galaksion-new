import { isCyprus } from '@config/configure';

type JsonLdProps = {
    data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
    if (isCyprus) return null;

    const jsonLdArray = Array.isArray(data) ? data : [data];

    return (
        <>
            {jsonLdArray.map((schema, index) => (
                <script
                    key={`json-ld-${schema['@type']}-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    suppressHydrationWarning
                />
            ))}
        </>
    );
}
