import { Button } from '@components/ui/button';
import { Stack } from '@components/ui/stack';
import { Text } from '@components/typography';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { animationProps, cn } from '@lib/utils';
import { adFormats } from '../constants';
import Link from 'next/link';
import { paths } from '@config/routing';
import { AdFormatDemo } from './ad-format-demo';

export const AdFormatHorizontalTabs = () => {
  return (
    <TabGroup className="hidden rounded-md md:block" {...animationProps('fadeIn,scaleUp')}>
      <TabList className="flex justify-around gap-3">
        {adFormats.map(({ key, title }, index) => (
          <Tab
            key={`${key}_tab`}
            className={cn([
              'group relative w-full rounded-md px-7 py-3 font-bold text-nowrap focus:outline-hidden data-focus:outline-1',
              // selected
              'data-selected:mb-0 data-selected:rounded-b-none data-selected:border-0 data-selected:bg-black data-selected:pb-3 data-selected:data-hover:bg-black',
            ])}
          >
            <span
              className={cn(
                'absolute -right-4 -bottom-1 z-0 hidden size-4 bg-black group-data-selected:block',
                {
                  'right-0 -bottom-10 size-10': +index === adFormats.length - 1,
                }
              )}
            />
            <span className="bg-primary absolute -right-4 bottom-0 z-0 hidden size-4 rounded-es-full group-data-selected:block" />
            <span
              className={cn(
                'absolute bottom-0 -left-4 z-0 hidden size-4 bg-black group-data-selected:block',
                {
                  '-bottom-10 left-0 size-10': +index === 0,
                }
              )}
            />
            {+index > 0 && (
              <span className="bg-primary absolute bottom-0 -left-4 z-0 hidden size-4 rounded-ee-full group-data-selected:block" />
            )}
            <Text>{title}</Text>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {adFormats.map(({ key, title, shortDesc }) => (
          <TabPanel key={`${key}_panel`} className="flex rounded-md bg-black px-6 pt-10 pb-6">
            <div className="flex w-1/2 flex-col justify-between" {...animationProps('fadeIn')}>
              <Stack gap={5} className="md:pr-10">
                <span className="text-3xl font-bold">{title}</span>
                <Text muted>{shortDesc}</Text>
              </Stack>
              <Link href={paths.adFormats(key)}>
                <Button size="lg" className="w-full">
                  More information
                </Button>
              </Link>
            </div>

            <div className="flex w-1/2 items-center justify-center pb-10">
              <AdFormatDemo format={key} />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
