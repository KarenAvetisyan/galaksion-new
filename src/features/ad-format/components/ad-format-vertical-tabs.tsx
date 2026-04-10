import { Headline, Text } from '@components/typography';
import { AdFormatDemo } from '@features/ad-format/components';
import { Button } from '@components/ui/button';
import Link from 'next/link';
import { Collapse, CollapseButton, CollapseContent } from '@components/ui/collapse';
import { paths } from '@config/routing';
import { adFormats } from '../constants';

export const AdFormatVerticalTabs = () => {
  return (
    <div className="grid w-full gap-2 md:hidden">
      {adFormats.map(({ key, title, shortDesc }) => (
        <Collapse key={`${key}_tab-mobile`}>
          <CollapseButton>
            <div className="flex-center hidden w-full rounded-[1.25rem] bg-black p-4 opacity-0 group-data-open:flex group-data-open:opacity-100">
              <AdFormatDemo format={key} size="sm" />
            </div>
            <Headline className="text-xl group-data-open:hidden">{title}</Headline>
          </CollapseButton>
          <CollapseContent>
            <Headline className="mb-3 text-xl">{title}</Headline>
            <Text>{shortDesc}</Text>
            <Link href={paths.adFormats(key)}>
              <Button variant="primary" hoverVariant="dark" className="mt-4 w-full">
                More information
              </Button>
            </Link>
          </CollapseContent>
        </Collapse>
      ))}
    </div>
  );
};
