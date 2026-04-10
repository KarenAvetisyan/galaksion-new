'use client';

import { Text } from '@components/typography';
import {
    Section,
    SectionCaption,
    SectionCol,
    SectionHeadline,
    SectionText,
    SectionTitle,
} from '@components/ui/section';
import { Button } from '@components/ui/button';
import { Countries, Map } from '@components/ui/map';
import { Fragment, useState } from 'react';
import { MapCountry } from '@components/ui/map/types';
import { TRAFFIC_MAP_SECTION_ID } from '@features/home/constants';
import { animationProps } from '@lib/utils';

type Region = {
    key: string;
    name: string;
    impressions: string;
    minCPM: string;
    countries: Countries[];
};

const regions: Region[] = [
    {
        key: 'sea',
        name: 'SEA',
        impressions: '330M',
        minCPM: '$0,3',
        countries: [
            'brunei',
            'cambodia',
            'indonesia',
            'laos',
            'malaysia',
            'myanmar',
            'philippines',
            'thailand',
            'timor-leste',
            'vietnam',
        ],
    },
    {
        key: 'asia',
        name: 'ASIA',
        impressions: '400M',
        minCPM: '$0,25',
        countries: [
            'afghanistan',
            'bangladesh',
            'bhutan',
            'china',
            'india',
            'maldives',
            'nepal',
            'north-korea',
            'pakistan',
            'south-korea',
            'sri-lanka',
        ],
    },
    {
        key: 'cis',
        name: 'CIS',
        impressions: '25M',
        minCPM: '$0,75',
        countries: [
            'russia',
            'uzbekistan',
            'kazakhstan',
            'belarus',
            'turkmenistan',
            'kyrgyzstan',
            'armenia',
            'tajikistan',
            'azerbaijan',
            'mongolia',
            'moldova',
        ],
    },
    {
        key: 'tier1',
        name: 'Tier 1',
        impressions: '200M',
        minCPM: '$0,65',
        countries: [
            'andorra',
            'australia',
            'austria',
            'belgium',
            'canada',
            'denmark',
            'finland',
            'france',
            'germany',
            'greece',
            'iceland',
            'ireland',
            'italy',
            'japan',
            'liechtenstein',
            'luxembourg',
            'malta',
            'monaco',
            'netherlands',
            'new-zealand',
            'norway',
            'portugal',
            'san-marino',
            'spain',
            'sweden',
            'switzerland',
            'united-kingdom',
            'united-states',
            'vatican-city',
        ],
    },
    {
        key: 'tier2',
        name: 'Tier 2',
        impressions: '20M',
        minCPM: '$0,35',
        countries: [
            'albania',
            'bosnia-herzegovina',
            'bulgaria',
            'croatia',
            'cyprus',
            'czechia',
            'estonia',
            'hungary',
            'latvia',
            'lithuania',
            'montenegro',
            'north-macedonia',
            'poland',
            'romania',
            'serbia',
            'slovakia',
            'slovenia',
            'georgia',
            'turkey',
        ],
    },
    {
        key: 'tier3',
        name: 'Tier 3',
        impressions: '30M',
        minCPM: '$0,2',
        countries: [
            'angola',
            'benin',
            'botswana',
            'burkina-faso',
            'burundi',
            'cabo-verde',
            'cameroon',
            'central-african-republic',
            'chad',
            'comoros',
            'congo',
            'democratic-republic-congo',
            'cote-divoire',
            'djibouti',
            'equatorial-guinea',
            'eritrea',
            'eswatini',
            'ethiopia',
            'gabon',
            'gambia',
            'ghana',
            'guinea',
            'guinea-bissau',
            'kenya',
            'lesotho',
            'liberia',
            'madagascar',
            'malawi',
            'mali',
            'mauritania',
            'mauritius',
            'mozambique',
            'namibia',
            'niger',
            'nigeria',
            'rwanda',
            'sao-tome-principe',
            'senegal',
            'seychelles',
            'sierra-leone',
            'somalia',
            'south-africa',
            'south-sudan',
            'sudan',
            'tanzania',
            'togo',
            'uganda',
            'zambia',
            'zimbabwe',
            'fiji',
            'kiribati',
            'marshall-islands',
            'micronesia',
            'nauru',
            'palau',
            'papua-new-guinea',
            'samoa',
            'solomon-islands',
            'tonga',
            'tuvalu',
            'vanuatu',
        ],
    },
    {
        key: 'mena',
        name: 'MENA',
        impressions: '300M',
        minCPM: '$0,25',
        countries: [
            'algeria',
            'bahrain',
            'egypt',
            'iran',
            'iraq',
            'israel',
            'jordan',
            'kuwait',
            'lebanon',
            'libya',
            'morocco',
            'oman',
            'palestine',
            'qatar',
            'saudi-arabia',
            'syria',
            'tunisia',
            'united-arab-emirates',
            'yemen',
        ],
    },
    {
        key: 'latam',
        name: 'LATAM',
        impressions: '160M',
        minCPM: '$0,15',
        countries: [
            'antigua-barbuda',
            'argentina',
            'bahamas',
            'barbados',
            'belize',
            'bolivia',
            'brazil',
            'chile',
            'colombia',
            'costa-rica',
            'cuba',
            'dominican-republic',
            'ecuador',
            'el-salvador',
            'grenada',
            'guatemala',
            'guyana',
            'haiti',
            'honduras',
            'jamaica',
            'mexico',
            'nicaragua',
            'panama',
            'paraguay',
            'peru',
            'saint-kitts-nevis',
            'saint-lucia',
            'saint-vincent-grenadines',
            'suriname',
            'trinidad-tobago',
            'uruguay',
            'venezuela',
        ],
    },
];

export const HomeMapSection = () => {
    const [selectedRegion, setSelectedRegion] = useState<Region>(
        regions.find((r) => r.key === 'asia')!,
    );

    const selectRegion = (region: Region) => {
        setSelectedRegion(region);
    };

    const selectCountry = (country: MapCountry) => {
        const region = regions.find((r) => r.countries.includes(country.key));
        if (region) {
            setSelectedRegion(region);
        }
    };

    const TITLE = 'Traffic estimator for targeted advertising rates';

    const regionStats = (
        <Fragment>
            <SectionHeadline className="mt-6 mb-3 md:mb-6 md:font-bold">
                {selectedRegion.name}
            </SectionHeadline>
            <div className="flex flex-row gap-10">
                <div className="grid">
                    <p className="text-[2.375rem] font-medium">
                        {selectedRegion.impressions}
                    </p>
                    <Text>Impressions/day</Text>
                </div>
                {/*<div className="grid">*/}
                {/*    <p className="text-[2.375rem] font-medium">*/}
                {/*        {selectedRegion.minCPM}*/}
                {/*    </p>*/}
                {/*    <Text>min CPM</Text>*/}
                {/*</div>*/}
            </div>
        </Fragment>
    );

    return (
        <Section
            id={TRAFFIC_MAP_SECTION_ID}
            className="h-fit md:py-4"
            intersection
        >
            <SectionCol
                cols={3}
                className="md:pr-10"
                {...animationProps('fadeIn')}
            >
                <SectionCaption className="mb-4 md:mb-0">
                    Traffic estimator
                </SectionCaption>
                <SectionTitle className="md:hidden">{TITLE}</SectionTitle>
                <div className="md:flex-1 md:pt-16">
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <SectionHeadline className="md:font-bold">
                                Regions
                            </SectionHeadline>
                            <div className="mt-6 flex flex-row flex-wrap gap-2">
                                {regions.map((region) => (
                                    <Button
                                        key={region.key}
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => selectRegion(region)}
                                        active={
                                            region.key === selectedRegion.key
                                        }
                                    >
                                        {region.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block">{regionStats}</div>
                    </div>
                </div>
            </SectionCol>
            <SectionCol
                cols={9}
                className="md:bg-secondary items-start rounded-xl md:h-[95vh] md:p-10 max-h-[600px] md:min-h-fit"
                {...animationProps('fadeIn')}
            >
                <SectionTitle
                    className="hidden md:block"
                    {...animationProps('fadeIn,scaleUp', { delay: 500 })}
                >
                    {TITLE}
                </SectionTitle>
                <SectionText
                    className="hidden md:mb-[7vh] md:block md:w-[40.5vw]"
                    {...animationProps('fadeIn,scaleUp', { delay: 800 })}
                >
                    The traffic estimator offered by Galaksion calculates
                    traffic volumes depending on your chosen rate, GEO, target,
                    pricing model and assists you in determining the most
                    suitable rates for your advertising needs.
                </SectionText>
                <div className="relative size-full min-h-[300px]">
                    <div className="absolute inset-0">
                        <Map
                            selectedCountries={selectedRegion.countries}
                            onSelectCountry={selectCountry}
                            className="max-h-full w-full max-w-full md:w-auto"
                            {...animationProps('fadeIn')}
                        />
                    </div>
                </div>
                <div className="md:hidden">{regionStats}</div>
            </SectionCol>
        </Section>
    );
};
