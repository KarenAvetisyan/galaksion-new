'use client';

import { Caption, Text } from '@components/typography';
import Image from 'next/image';
import ReactCurvedText, { ReactCurvedTextProps } from 'react-curved-text';
import { IconButton } from '@components/ui/icon-button';
import { Icon } from '@components/ui/icon';
import { animationProps, cn } from '@lib/utils';
import { useIsMounted } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import { adFormats } from '@features/ad-format/constants';
import { useViewportWidth } from '@hooks/use-viewport-width';

import circleLines from '@assets/images/home/elipse-lines.svg';
import circleLinesSmall from '@assets/images/home/elipse-lines2.svg';
import equalizerBg from '@assets/images/home/equalizer.png';

import './styles.css';
import { useIsMobile } from '@hooks/use-mobile';

const SM_WIDTH = 90;
const MD_WIDTH = 30.729;

export const Equalizer = () => {
    const isMounted = useIsMounted();
    const isMobile = useIsMobile();
    const vw = useViewportWidth();

    const size = vw({ 0: SM_WIDTH, 768: MD_WIDTH });
    const center = vw({ 0: SM_WIDTH / 2, 768: MD_WIDTH / 2 });
    const radiusTop = vw({ 0: SM_WIDTH / 2.2058, 768: MD_WIDTH / 2.2222 });
    const radiusBottom = vw({ 0: SM_WIDTH / 2.1077, 768: MD_WIDTH / 2.1018 });

    const defaultProps: Pick<
        ReactCurvedTextProps,
        'width' | 'height' | 'cx' | 'cy' | 'textProps'
    > = {
        width: size,
        height: size,
        cx: center,
        cy: center,
        textProps: {
            style: {
                fontSize: vw({ 0: SM_WIDTH / 23.6842, 768: MD_WIDTH / 22.5 }),
                fontWeight: 700,
                fill: '#fff',
            },
        },
    };

    const curvedTexts = [
        {
            text: 'geos',
            rx: radiusTop,
            ry: radiusTop,
            startOffset: vw({ 0: SM_WIDTH / 3.2374, 768: MD_WIDTH / 3.2726 }),
            reversed: true,
            ...defaultProps,
        },
        {
            text: 'formats',
            rx: radiusTop,
            ry: radiusTop,
            startOffset: vw({ 0: SM_WIDTH / 1.0112, 768: MD_WIDTH / 1.0207 }),
            reversed: true,
            ...defaultProps,
        },
        {
            text: 'business model',
            rx: radiusBottom,
            ry: radiusBottom,
            startOffset: vw({ 0: SM_WIDTH / 1.03926, 768: MD_WIDTH / 1.0455 }),
            reversed: false,
            ...defaultProps,
        },
        {
            text: 'platforms',
            rx: radiusBottom,
            ry: radiusBottom,
            startOffset: vw({ 0: SM_WIDTH / 3.6, 768: MD_WIDTH / 3.7761 }),
            reversed: false,
            ...defaultProps,
        },
    ];

    const [showIndex, setShowIndex] = useState(-1);

    const changeIndex = (index: number) => {
        // if (!isMobile) return;
        setShowIndex(index);
    };

    const hoverTexts = [
        ['Tier-1', 'Tier-2', 'Tier-3', 'Asia', 'MENA', 'CIS', 'SEA', 'LATAM'],
        adFormats
            .sort((a, b) => a.shortTitle.length - b.shortTitle.length)
            .map((a) => (isMobile ? a.shortTitle : a.title)),
        ['Mobile', 'Desktop'],
        ['CPM', 'CPC', 'CPA', 'Smart CPM'],
    ];

    useEffect(() => {
        const handleResize = () => {
            // Перезапускаем анимации при изменении размера
            const elements = document.querySelectorAll(
                '.animate-elipse, .animate-elipse2',
            );

            elements.forEach((el) => {
                const element = el as HTMLElement;
                const animation = element.style.animation;
                element.style.animation = 'none';

                // Используем requestAnimationFrame для гарантированного обновления
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        element.style.animation = animation;
                    });
                });
            });
        };

        // Дебаунс для оптимизации
        let resizeTimeout: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 100);
        };

        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <div
            className="relative size-[90vw] min-w-[90vw] md:size-[30.729vw] md:min-w-[30.729vw]"
            {...animationProps('fadeIn,scaleUp', { delay: 1000 })}
        >
            {/* tablet hover texts */}
            {!isMobile && (
                <div
                    className={cn(
                        'absolute top-0 -right-[3.4vw] z-10',
                        showIndex > 1 && 'top-auto bottom-0',
                        [0, 2].includes(showIndex) &&
                            'right-auto -left-[3.4vw]',
                    )}
                >
                    <div className="relative">
                        <div
                            className={cn(
                                'absolute top-1/3 right-full z-10 flex translate-x-full -translate-y-full flex-col text-end opacity-0',
                                // "transition duration-1000 ease-out",
                                showIndex > -1 && 'opacity-100',
                                [0, 2].includes(showIndex) && 'text-start',
                                showIndex === 0 && 'translate-x-2/3',
                                showIndex === 2 &&
                                    'translate-x-1/2 translate-y-full',
                                showIndex === 3 &&
                                    'translate-x-[150%] translate-y-4/6',
                            )}
                        >
                            {hoverTexts[showIndex]?.map((text) => (
                                <Text
                                    key={text}
                                    className="text-nowrap"
                                    {...animationProps('fadeIn,scaleUp', {
                                        duration: 500,
                                    })}
                                >
                                    {text}
                                </Text>
                            ))}
                        </div>
                        <svg
                            viewBox="0 0 146 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn(
                                'size-[7.292vw] opacity-0',
                                showIndex > -1 && 'opacity-100',
                                [2, 3].includes(showIndex) && 'rotate-180',
                                [0, 3].includes(showIndex) && 'scale-x-[-1]',
                            )}
                        >
                            <path
                                d="M5.66667 27.3242C5.66667 28.797 4.47276 29.9909 3 29.9909C1.52724 29.9909 0.333328 28.797 0.333328 27.3242C0.333328 25.8515 1.52724 24.6576 3 24.6576C4.47276 24.6576 5.66667 25.8515 5.66667 27.3242ZM145.667 3.32422C145.667 4.79698 144.473 5.99089 143 5.99089C141.527 5.99089 140.333 4.79698 140.333 3.32422C140.333 1.85146 141.527 0.657552 143 0.657552C144.473 0.657552 145.667 1.85146 145.667 3.32422ZM143.5 3.32422V5.32422H142.5V3.32422H143.5ZM143.5 9.32422V13.3242H142.5V9.32422H143.5ZM143.5 17.3242V19.3242H142.5V17.3242H143.5ZM143.5 19.3242C143.5 20.4758 143.271 21.5751 142.855 22.578L141.931 22.195C142.298 21.3114 142.5 20.3421 142.5 19.3242H143.5ZM138.254 27.179C137.251 27.5949 136.152 27.8242 135 27.8242V26.8242C136.018 26.8242 136.987 26.6217 137.871 26.2553L138.254 27.179ZM135 27.8242H132.462V26.8242H135V27.8242ZM127.385 27.8242H122.308V26.8242H127.385V27.8242ZM117.231 27.8242H112.154V26.8242H117.231V27.8242ZM107.077 27.8242H102V26.8242H107.077V27.8242ZM96.9231 27.8242H91.8462V26.8242H96.9231V27.8242ZM86.7692 27.8242H81.6923V26.8242H86.7692V27.8242ZM76.6154 27.8242H71.5385V26.8242H76.6154V27.8242ZM66.4615 27.8242H61.3846V26.8242H66.4615V27.8242ZM56.3077 27.8242H51.2308V26.8242H56.3077V27.8242ZM46.1539 27.8242H41.0769V26.8242H46.1539V27.8242ZM36 27.8242H30.9231V26.8242H36V27.8242ZM25.8462 27.8242H20.7693V26.8242H25.8462V27.8242ZM15.6923 27.8242H10.6154V26.8242H15.6923V27.8242ZM5.5385 27.8242H3V26.8242H5.5385V27.8242Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            )}

            {/* mobile hover text */}
            {isMobile &&
                hoverTexts.map((items, index) => (
                    <div
                        key={index}
                        className={cn(
                            'absolute inset-0 z-[2] flex size-full flex-col flex-wrap px-5 py-5 opacity-0',
                            showIndex === index && 'opacity-100',
                            index === 0 && 'items-center justify-start',
                            index === 1 && 'items-end justify-center',
                            index === 2 && 'items-start justify-center',
                            index === 3 && 'items-center justify-end',
                        )}
                    >
                        {items.map((text) => (
                            <Caption key={text} className="text-nowrap">
                                {text}
                            </Caption>
                        ))}
                    </div>
                ))}

            {/* hover cone*/}
            <div className="flex-center absolute inset-0 z-[1] flex overflow-hidden rounded-full bg-black/50">
                <div
                    className={cn(
                        'cone hidden rotate-0 bg-black/20 opacity-0 transition duration-1000 ease-out md:block',
                        showIndex > -1 && 'opacity-100',
                        showIndex === 0 && '-rotate-135',
                        showIndex === 1 && '-rotate-45',
                        showIndex === 2 && '-rotate-225',
                        showIndex === 3 && 'rotate-45',
                    )}
                />
                <div className="z-10 rounded-full bg-[#0b2243] md:size-[18.073vw]" />
            </div>

            <div className="flex-center absolute top-[55%] md:top-1/2 left-1/2 z-[2] flex w-[40vw] -translate-x-1/2 -translate-y-1/2 md:size-[15.146vw]">
                <p className="text-center text-lg leading-5 font-medium text-white lowercase md:text-3xl md:leading-9 md:font-bold">
                    DIRECT TRAFFIC FROM WEBSITE OWNERS
                </p>
            </div>

            {isMounted() &&
                curvedTexts.map((props) => (
                    <div key={props.text} className="absolute inset-0 z-[2]">
                        <ReactCurvedText {...props} />
                    </div>
                ))}

            {/* buttons */}
            <div className="absolute top-1/2 left-1/2 z-[2] grid size-[72vw] -translate-x-1/2 -translate-y-1/2 grid-cols-2 content-between p-8 md:size-[22.396vw]">
                {hoverTexts.map((texts, index) => (
                    <div
                        key={index}
                        className={cn(
                            'relative',
                            index % 2 !== 0 && 'flex flex-row justify-end',
                        )}
                    >
                        <IconButton
                            size="md"
                            outlined
                            className={cn(
                                'peer z-20',
                                showIndex === index && 'bg-primary',
                            )}
                            onClick={() => changeIndex(index)}
                            onMouseEnter={() => changeIndex(index)}
                            onMouseLeave={() => changeIndex(-1)}
                        >
                            <Icon
                                name="common/plus"
                                className="size-10 rotate-45"
                            />
                        </IconButton>
                    </div>
                ))}
            </div>

            <div className="animate-elipse absolute z-0 md:w-[43.063vw]">
                <Image src={circleLines} alt="elipse lines" quality={100} />
            </div>
            <div className="animate-elipse2 absolute w-[120vw] md:w-[40.458vw]">
                <Image
                    src={circleLinesSmall}
                    alt="elipse lines"
                    quality={100}
                />
            </div>
            <div className="animate-elipse2 absolute z-0 w-[120vw] md:w-[36.458vw]">
                <Image src={equalizerBg} alt="elipse lines" quality={100} />
            </div>

            {/* <div className="absolute inset-0 rounded-full bg-red-500 clip-arc-quarter rotate-0 z-0"></div> */}
        </div>
    );
};
