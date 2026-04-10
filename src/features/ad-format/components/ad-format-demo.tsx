import Image, { StaticImageData } from 'next/image';

import { animationProps, cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import { AdFormats } from '../types';

import onPagelaptopImg from '@assets/images/ad-formats/on-page-laptop.png';
import onPageIphoneImg from '@assets/images/ad-formats/on-page-iphone.png';

import nativeLaptopImg from '@assets/images/ad-formats/native-laptop.png';
import nativeIphoneImg from '@assets/images/ad-formats/native-iphone.png';

import pushLaptopImg from '@assets/images/ad-formats/push-laptop.png';
import pushIphoneImg from '@assets/images/ad-formats/push-iphone.png';

import pushUpIphoneImg from '@assets/images/ad-formats/push-up-iphone.png';

import interstitialLaptopImg from '@assets/images/ad-formats/interstitial-laptop.png';
import interstitialIphoneImg from '@assets/images/ad-formats/interstitial-iphone.png';

import popunderLaptopImg from '@assets/images/ad-formats/popunder-laptop.png';
import popunderIphoneImg from '@assets/images/ad-formats/popunder-iphone.png';

type Sizes = 'sm' | 'md';
type DeviceVariants = 'laptop-iphone' | 'iphone' | 'laptop-laptop';

interface Props extends ComponentPropsWithoutRef<'div'> {
    format: AdFormats;
    size?: Sizes;
}

const formatDevice: Record<AdFormats, DeviceVariants> = {
    'on-page-notification': 'laptop-iphone',
    native: 'laptop-iphone',
    push: 'laptop-iphone',
    'mobile-push': 'iphone',
    interstitial: 'laptop-iphone',
    popunder: 'laptop-iphone',
};

const formatImages: Record<AdFormats, StaticImageData[]> = {
    'on-page-notification': [onPageIphoneImg, onPagelaptopImg],
    native: [nativeIphoneImg, nativeLaptopImg],
    push: [pushIphoneImg, pushLaptopImg],
    'mobile-push': [pushUpIphoneImg],
    interstitial: [interstitialIphoneImg, interstitialLaptopImg],
    popunder: [popunderIphoneImg, popunderLaptopImg],
};

type IphoneProps = { src: StaticImageData; format: AdFormats; size?: Sizes };

const Laptop = ({ src, format, size }: IphoneProps) => {
    const isLaptopIphone = formatDevice[format] === 'laptop-iphone';
    const isLaptopLaptop = formatDevice[format] === 'laptop-laptop';
    const isSmSize = size === 'sm';
    const isMdSize = size === 'md';

    if (formatDevice[format] === 'iphone') return null;

    return (
        <div
            className={cn(
                'relative aspect-16/12',
                isLaptopIphone &&
                    isSmSize &&
                    'h-[30vw] max-h-[30vw] min-h-[35vw]',
                isLaptopIphone &&
                    isMdSize &&
                    'h-[40vw] md:h-[18.854vw] md:max-h-[18.854vw] md:min-h-[18.854vw]',
                isLaptopLaptop &&
                    isSmSize &&
                    'h-[25vw] max-h-[25vw] min-h-[25vw] md:h-[15vw] md:max-h-[15vw] md:min-h-[15vw]',
                isLaptopLaptop && isMdSize && 'h-[35vw] md:h-[15vw]',
            )}
        >
            <Image
                src={src}
                alt="laptop"
                priority
                fill
                sizes="100%"
                className="object-cover"
                {...animationProps('fadeIn,scaleUp')}
            />
        </div>
    );
};

const IPhone = ({ src, format, size }: IphoneProps) => {
    const isLaptopIphone = formatDevice[format] === 'laptop-iphone';
    const isLaptopLaptop = formatDevice[format] === 'laptop-laptop';
    const isSmSize = size === 'sm';
    const isMdSize = size === 'md';

    return (
        <div
            className={cn(
                'absolute w-full',
                formatDevice[format] === 'iphone' &&
                    'relative h-[50vw] md:h-[21.5vw]',
                isLaptopIphone && isSmSize && 'top-[10vw] left-[40%] h-[30vw]',
                isLaptopIphone &&
                    isMdSize &&
                    'top-[10vw] left-[40%] h-[35vw] md:top-[4.688vw] md:left-[45%] md:h-[16.01vw]',
                isLaptopLaptop &&
                    isSmSize &&
                    'top-[15vw] left-[20vw] h-[30vw] max-h-[30vw] min-h-[30vw] md:top-[8vw] md:left-[12vw] md:h-[20vw] md:max-h-[20vw] md:min-h-[20vw]',
                isLaptopLaptop &&
                    isMdSize &&
                    'top-[20vw] left-[30vw] h-[40vw] md:top-[8vw] md:left-[13vw] md:h-[20vw]',
            )}
            {...animationProps('fadeIn,slideRight', { delay: 300 })}
        >
            <Image
                src={src}
                alt="iphone"
                priority
                fill
                sizes="100%"
                className="object-contain"
            />
        </div>
    );
};

export const AdFormatDemo = ({
    format,
    size = 'md',
    className,
    ...props
}: Props) => {
    const [iphoneImage, laptopImage] = formatImages[format];

    const isLaptopIphone = formatDevice[format] === 'laptop-iphone';
    const isLaptopLaptop = formatDevice[format] === 'laptop-laptop';
    const isSmSize = size === 'sm';
    const isMdSize = size === 'md';

    return (
        <div
            className={cn(
                'group relative inline-flex',
                formatDevice[format] === 'iphone' && 'w-full',
                isLaptopIphone && isSmSize && 'mr-[3.75vw] mb-[5vw]',
                isLaptopIphone &&
                    isMdSize &&
                    'mr-[5vw] mb-[5vw] md:mr-[2.6vw] md:mb-[2.688vw]',
                isLaptopLaptop && isSmSize && 'mr-[17.5vw] mb-[13.75vw]',
                isLaptopLaptop &&
                    isMdSize &&
                    'mr-[30vw] mb-[20vw] md:mr-[13vw] md:mb-[9vw]',
            )}
            {...props}
        >
            <Laptop src={laptopImage} format={format} size={size} />
            <IPhone src={iphoneImage} format={format} size={size} />
        </div>
    );
};
