"use client";

import { Button } from "@components/ui/button";
import {
  Section,
  SectionCaption,
  SectionCol,
  SectionText,
  SectionTitle,
} from "@components/ui/section";
import Image from "next/image";
import { Icon } from "@components/ui/icon";
import { IconButton } from "@components/ui/icon-button";
import { Fragment, useEffect, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";
import { AdvantagesSlider } from "@features/advantage/components/advantages-slider";

import VideoBg from "@assets/images/advantages/video-bg.png";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { animationProps, cn } from "@lib/utils";
import { registrationUrl } from "@config/configure";
import { ADVANTAGES_SECTION_ID } from "@features/home/constants";
import { useToggle } from "usehooks-ts";

export const HomeFeaturesSection = () => {
  // const openFeedbackModal = useUnit(feedbackModalOpenned);
  const [search, setSearch] = useState("");
  const [isOpen, toggle] = useToggle();

  const sliderRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (location.search) {
      setSearch(location.search);
    }
  }, []);

  const videoBlock = (
    <div className="grid gap-3">
      <div
        className="group/video relative flex h-[100vw] cursor-pointer items-center justify-center rounded-md md:h-[calc(28.125vw-4.167vw-0.625vw)]"
        {...animationProps("fadeIn,scaleUp", { delay: 1000 })}
      >
        <button className="absolute inset-0 z-0" onClick={toggle}>
          <Image
            src={VideoBg}
            alt="Innovative Advertising"
            quality={100}
            fill
            sizes="100%"
            className="rounded-md object-cover"
          />
        </button>
        <div className="relative">
          <div
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white transition-transform duration-150 ease-out group-hover/video:scale-110"
            onClick={toggle}
          >
            <Icon
              name="common/play-solid"
              className="ml-1 h-6 w-6 text-black"
            />
          </div>
          <div className="flex-center absolute top-full left-1/2 mt-20 flex -translate-x-1/2 flex-col">
            <span className="text-xl font-bold text-nowrap md:text-2xl md:font-semibold">
              Galaksion SSP:
            </span>
            <span className="text-xl font-bold text-nowrap md:text-2xl md:font-semibold">
              How do we start?
            </span>
          </div>
        </div>
      </div>
      <Button
        size="lg"
        hoverVariant="dark"
        className="w-full"
        href={`${registrationUrl}${search}`}
        {...animationProps("fadeIn,scaleUp", { delay: 1400 })}
      >
        Get my profit
      </Button>
    </div>
  );

  return (
    <Fragment>
      <Section
        id={ADVANTAGES_SECTION_ID}
        bg="secondary"
        intersection
        className="group px-2 md:px-4"
        {...animationProps("gradientSecondary")}
      >
        <SectionCol cols={3} className="justify-between pl-4 md:pl-6">
          <SectionCaption
            {...animationProps("fadeIn,slideRight", { delay: 1000 })}
          >
            KEY FEATURES
          </SectionCaption>
          <div className="hidden md:block">{videoBlock}</div>
        </SectionCol>
        <SectionCol cols={9} className="gap-9">
          <div className="flex items-end justify-between px-4 md:px-6">
            <div className="grid">
              <SectionTitle
                as="h2"
                {...animationProps("fadeIn,slideRight", { delay: 500 })}
              >
                Innovative advertising
              </SectionTitle>
              <SectionText {...animationProps("fadeIn", { delay: 1500 })}>
                Dive into our feature-rich platform with Antifraud, CPA, and
                Beyond.
              </SectionText>
            </div>
            <div className="flex-center hidden gap-4 md:flex">
              <IconButton
                size="lg"
                outlined
                onClick={handlePrev}
                {...animationProps("fadeIn,scaleUp", {
                  delay: 2000,
                  duration: 4000,
                })}
              >
                <Icon
                  name="common/arrow-right"
                  className="h-8 w-8 rotate-180"
                />
              </IconButton>
              <IconButton
                size="lg"
                outlined
                onClick={handleNext}
                {...animationProps("fadeIn,scaleUp", {
                  delay: 2300,
                  duration: 4000,
                })}
              >
                <Icon name="common/arrow-right" className="h-8 w-8" />
              </IconButton>
            </div>
          </div>
          <div>
            <AdvantagesSlider ref={sliderRef} />
          </div>
        </SectionCol>
      </Section>
      <div className="mb-6 block md:hidden">{videoBlock}</div>

      <Dialog open={isOpen} onClose={toggle} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/90 transition duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-4 flex items-end justify-end md:inset-16">
          <DialogPanel
            transition
            className={cn(
              "flex-center flex size-full scale-100",
              "transition duration-300 ease-out data-closed:scale-95 data-closed:opacity-0",
            )}
          >
            <iframe
              className="aspect-video h-auto w-full rounded-xs md:rounded-sm"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://youtube.com/embed/43UhQ-oP9PM?autoplay=0`}
            ></iframe>
            <button className="absolute top-0 right-0" onClick={toggle}>
              <Icon
                name="common/plus"
                className="size-10 rotate-45 md:size-12"
              />
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </Fragment>
  );
};
