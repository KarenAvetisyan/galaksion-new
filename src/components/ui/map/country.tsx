import { cn } from '@lib/utils';
import { MapCountry } from './types';
import { ComponentPropsWithoutRef, memo } from 'react';

type Props = {
  country: MapCountry;
  isSelected?: boolean;
  onSelect?: (country: MapCountry) => void;
} & Omit<ComponentPropsWithoutRef<'path'>, 'aria-label' | 'fill' | 'onClick' | 'onSelect'>;

export const Country = memo(({ country, isSelected, onSelect, className, ...props }: Props) => {
  const handleSelect = () => {
    if (!onSelect) return;

    onSelect(country);
  };

  return (
    <path
      aria-label={country.name}
      fill="none"
      className={cn(
        'hover:fill-primary fill-white transition duration-500 ease-out hover:cursor-pointer',
        isSelected && 'fill-primary',
        className
      )}
      onClick={handleSelect}
      {...country.svgPathProps}
      {...props}
    />
  );
});
