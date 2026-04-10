import { Stack } from '@components/ui/stack';
import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';

import logoImage from '@assets/images/logo.png';
import { ComponentPropsWithoutRef } from 'react';

const RadioCanadaBig = localFont({ src: './assets/RadioCanadaBig-SemiBold.ttf' });
const RadioCanadaBigItalic = localFont({ src: './assets/RadioCanadaBig-SemiBoldItalic.ttf' });

type LogoProps = Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className'>;

export const Logo = (props: LogoProps) => {
  return (
    <Link href="/" className="flex flex-row gap-2" {...props}>
      <div className="relative size-[10vw] md:size-[2.76vw]">
        <Image
          src={logoImage}
          alt="Galaksion"
          quality={100}
          priority
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>

      <Stack direction="column" alignItems="center" className={RadioCanadaBig.className}>
        <span className="text-[4.75vw] font-semibold uppercase md:text-[1.475vw]">
          galaksi<span className={RadioCanadaBigItalic.className}>o</span>n
        </span>
        <span className="text-[1.75vw] leading-[1.75vw] tracking-[0.5vw] md:text-[0.63vw] md:leading-[0.63vw] md:tracking-[0.15vw]">
          Advertising network
        </span>
      </Stack>
    </Link>
  );
};
