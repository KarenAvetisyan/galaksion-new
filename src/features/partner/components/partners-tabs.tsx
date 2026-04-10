'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { partners } from '../constants';
import Image from 'next/image';
import { animationProps, cn } from '@lib/utils';
import { Card, CardContent } from '@components/ui/card';
import { Headline, Text } from '@components/typography';
import { useState } from 'react';
import { PartnerCard } from './partner-card';
import { PartnerKeys } from '../types';

const hideKeys: PartnerKeys[] = [
  'starzplay',
  'wargaming',
  'lazada',
  'coinis',
  'accesstrade',
  'metacpa',
];

const sliderPartners = partners.filter(p => !hideKeys.includes(p.key));

export const PartnersTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabGroup selectedIndex={selectedIndex} className="flex flex-col">
      <TabList className="scrollbar-hidden md:scrollbar-auto mb-6 inline-flex flex-row overflow-x-auto md:flex md:flex-wrap md:items-stretch md:justify-center md:overflow-hidden">
        {sliderPartners.map((partner, key) => (
          <Tab
            key={`${partner.name}_tab`}
            onMouseEnter={() => setSelectedIndex(+key)}
            className={cn(
              'group w-[80vw] min-w-[80vw] p-3 focus:outline-hidden md:w-3/12 md:min-w-auto'
            )}
          >
            <PartnerCard
              partner={partner}
              className="hover:bg-secondary group-data-selected:bg-secondary bg-transparent"
            />
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {sliderPartners.map(partner => (
          <TabPanel key={`${partner.key}_panel`} className="group">
            <Card variant="primary">
              <CardContent className="justify-between pt-4 md:flex-row md:pt-10">
                <div className="flex h-full flex-col justify-between gap-20 md:h-auto md:w-5/12 md:gap-0">
                  <Headline {...animationProps('fadeIn', { delay: 500 })}>{partner.name}</Headline>
                  <Text {...animationProps('fadeIn', { delay: 500 })}>{partner.description}</Text>
                </div>
                <div
                  className="hidden h-[16.927vw] w-5/12 items-center justify-center md:flex"
                  {...animationProps('fadeIn,slideRight', { delay: 800 })}
                >
                  <Image
                    src={partner.imageData}
                    alt={partner.name}
                    width={410}
                    priority
                    quality={100}
                  />
                </div>
              </CardContent>
            </Card>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
