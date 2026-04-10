import Image, { StaticImageData } from 'next/image';
import { cn } from '@lib/utils';
import { Card, CardContent, CardProps, CardTitle } from '@components/ui/card';
import { Text } from '@components/typography';
import { IconButton } from '@components/ui/icon-button';
import { Icon } from '@components/ui/icon';

interface Props extends Omit<CardProps, 'variant'> {
  title: string;
  text?: string;
  imageData: StaticImageData;
  cols: 3 | 4 | 5;
}

export const GridCard = ({ title, text, imageData, cols, className, ...props }: Props) => {
  return (
    <Card
      variant="secondary"
      className={cn(
        'group hover:bg-primary relative justify-between gap-16 overflow-hidden',
        'transition-colors duration-500 ease-out',
        cols === 3 && 'col-span-12 md:col-span-3',
        cols === 4 && 'col-span-12 md:col-span-4',
        cols === 5 && 'col-span-12 md:col-span-5',
        className
      )}
      {...props}
    >
      <CardContent className="justify-between">
        <div className="relative size-[15vw] md:-mt-[0.781vw] md:-ml-[0.781vw] md:size-[5.208vw]">
          <Image src={imageData} alt={title} priority quality={100} fill sizes="100%" />
        </div>
        <div className="flex flex-col items-end justify-between gap-3 md:flex-row">
          <div className="flex w-full flex-col transition-transform duration-500 ease-out md:translate-y-full md:group-hover:translate-y-0">
            <CardTitle className="transition-transform duration-500 ease-out md:-translate-y-full md:group-hover:translate-y-0">
              {title}
            </CardTitle>
            <div className="pt-3 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100">
              <Text className="whitespace-pre-line">{text}</Text>
            </div>
          </div>
          <IconButton
            size="md"
            outlined
            className="hidden transition-transform duration-500 ease-out group-hover:rotate-45 md:flex"
          >
            <Icon name="common/plus" className="h-8 w-8" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};
