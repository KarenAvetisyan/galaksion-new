import { ComponentPropsWithoutRef } from 'react';
import { Partner } from '../types';
import Image from 'next/image';
import { cn } from '@lib/utils';

interface PartnerCardProps extends ComponentPropsWithoutRef<'div'> {
  partner: Partner;
}

export const PartnerCard = ({ partner, className, ...props }: PartnerCardProps) => {
  return (
    <div
      className={cn(
        'flex-center bg-secondary flex h-16 rounded-[1.6rem] py-2 md:h-32 md:rounded-lg md:p-8',
        //crutch
        // partner.key === 'wargaming' && 'p-3 md:p-6',
        partner.key === 'coinis' && 'md:p-8',
        // partner.key === 'starzplay' && 'md:p-7',
        // partner.key === 'metacpa' && 'p-3 md:p-7',
        // partner.key === 'lazada' && 'p-0',
        // partner.key === 'accesstrade' && 'md:p-9',
        className
      )}
      {...props}
    >
      <div className="relative h-full w-60">
        <Image
          src={partner.imageData}
          quality={100}
          fill
          sizes="100%"
          className="object-contain"
          alt={partner.name}
        />
      </div>
    </div>
  );
};
