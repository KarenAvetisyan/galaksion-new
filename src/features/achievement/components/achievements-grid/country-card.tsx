'use client';

import { Caption } from '@components/typography';
import { Card, CardContent, CardTitle } from '@components/ui/card';
import { Icon } from '@components/ui/icon';
import { IconButton } from '@components/ui/icon-button';
import { animationProps, cn } from '@lib/utils';
import Image from 'next/image';
import { useToggle } from 'usehooks-ts';
import regionIcon from '@assets/images/achievements/region-icon.svg';

const countries: Array<{ title: string; items: string[][] }> = [
  {
    title: 'Asia',
    items: [
      ['ID', 'IN', 'MY', 'SG'],
      ['PH', 'TN', 'VN'],
    ],
  },
  {
    title: 'Tier-1',
    items: [
      ['US', 'GB'],
      ['CA', 'AU'],
    ],
  },
  {
    title: 'MENA',
    items: [
      ['AE', 'SA', 'KW'],
      ['EG', 'DZ', 'MA'],
    ],
  },
  {
    title: 'LATAM',
    items: [['BR', 'MX', 'AR']],
  },
  {
    title: 'Europe',
    items: [
      ['IT', 'FR'],
      ['ES', 'DE'],
    ],
  },
];

export const CountryCard = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <Card
      variant="secondary"
      className={cn(
        'group hover:bg-primary relative col-span-12 justify-between gap-16 overflow-hidden md:col-span-9',
        'transition-colors duration-300 ease-out'
      )}
      {...animationProps('fadeIn,scaleUp', { delay: 1200 })}
    >
      <CardContent className="justify-between">
        <div className="relative size-[15vw] md:-mt-[0.781vw] md:-ml-[0.781vw] md:size-[5.208vw]">
          <Image
            src={regionIcon}
            alt="Country / Region / City"
            priority
            quality={100}
            fill
            sizes="100%"
          />
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div
            className={cn(
              'md:min-w-[16.927vw]md: flex flex-col gap-3 transition-transform duration-300 ease-out md:w-[16.927vw] md:translate-y-full md:gap-6 md:group-hover:translate-y-0',
              isOpen && 'translate-y-0'
            )}
          >
            <CardTitle
              className={cn(
                'text-nowrap transition-transform duration-200 ease-out md:-translate-y-full md:group-hover:translate-y-0',
                isOpen && 'translate-y-0'
              )}
            >
              Country / Region / City
            </CardTitle>
            <Caption
              className={cn(
                'pt-3 text-base transition-opacity duration-300 ease-out md:opacity-0 md:group-hover:opacity-100',
                isOpen && 'opacity-100'
              )}
            >
              Galaksion provides comprehensive global coverage, allowing you to promote your
              verticals in over 245 GEOs. Our top GEOs include key markets and emerging regions,
              giving you wide reach and flexibility:
            </Caption>
          </div>
          <div
            className={cn(
              'hidden w-full grid-cols-2 justify-around gap-6 group-hover:grid md:grid md:grid-cols-5 md:gap-0',
              isOpen && 'grid'
            )}
          >
            {countries.map((country, countryIndex) => (
              <div
                key={country.title}
                className={cn(
                  'mb-6 flex w-full flex-col items-center gap-6 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 md:mb-0 md:translate-y-full md:group-hover:translate-y-0',
                  isOpen && 'translate-y-0 opacity-100'
                )}
                style={{ transitionDelay: `${+countryIndex * 100}ms` }}
              >
                <CardTitle className="font-semibold">{country.title}</CardTitle>
                <div className="flex flex-row justify-center gap-5">
                  {country.items.map((arrayItems, key) => (
                    <ul
                      key={`${country.title}_array${key}`}
                      className="ml-5 list-disc pt-3 text-xl"
                    >
                      {arrayItems.map(item => (
                        <li key={`${country.title}_array${key}_${item}`}>{item}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end md:justify-end">
            <IconButton
              outlined
              className={cn(
                'transition-transform duration-300 ease-out group-hover:rotate-45',
                isOpen && 'bg-primary rotate-45'
              )}
              onClick={toggle}
            >
              <Icon name="common/plus" className="h-8 w-8" />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
