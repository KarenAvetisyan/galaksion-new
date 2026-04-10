"use client";

import { Caption, Text } from "@components/typography";
import { Button } from "@components/ui/button";
import { useEffect, useRef, useState } from "react";

import { Section } from "@components/ui/section";
import { Card, CardContent, CardTitle } from "@components/ui/card";

import { IconName } from "@components/ui/icon/name";
import { Icon } from "@components/ui/icon";

import { Gradient } from "./gradient";
import { Elipse } from "./elipse";
import { GradientContent } from "./gradient-content";

import styles from "./styles.module.css";
import { animationProps } from "@lib/utils";
import { registrationUrl } from "@config/configure";

export const welcomeCards = [
  {
    icon: "marketing/figure15" as IconName,
    title: "For self-service platform advertisers: control your ads",
    text: "Launch campaigns in minutes, access comprehensive statistics, and easily optimize your ads for better performance with Galaksion.",
  },
  {
    icon: "marketing/figure17" as IconName,
    title: "For direct advertisers: traffic with expert management",
    text: "Provide us with your campaign requirements, and we’ll take care of the rest. From strategy building to scaling, we handle all aspects of the campaign.",
  },
];

export const HomeWelcomeSection = () => {
  const [search, setSearch] = useState("");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.search) {
      setSearch(location.search);
    }
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="mb-6 flex h-full flex-row py-0 md:h-[calc(100vh-var(--header-height)-3vw)] md:space-x-6 md:py-0"
    >
      {/* Leftside */}
      <div
        className="group relative z-0 h-[inherit] w-full overflow-hidden rounded-t-sm md:w-9/12 md:rounded-es-xl md:rounded-t-xl"
        {...animationProps("fadeIn,scaleUp")}
      >
        <div className="relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-b-sm py-4 md:items-start md:justify-end md:p-10">
          <Gradient />
          <Elipse sectionRef={sectionRef} />
          <div
            className="z-2 flex items-center justify-center rounded-full bg-black px-6 py-3 opacity-0 md:absolute md:top-10 md:left-10 md:px-10 md:py-6"
            {...animationProps("fadeIn", { delay: 1500 })}
          >
            <Caption upperCase className="-mb-[1px] whitespace-nowrap md:mb-0">
              Advertising network*
            </Caption>
          </div>
          <GradientContent />
        </div>
        <div className={styles.button_wrapper}>
          <Button
            href={`${registrationUrl}${search}`}
            variant="primary"
            size="lg"
            className="w-full md:w-[18.854vw]"
            {...animationProps("fadeIn,scaleUp", { delay: 1000 })}
          >
            Start earning now
          </Button>
        </div>
      </div>
      {/* Rightside */}
      <div className="z-0 hidden justify-between gap-6 md:grid md:w-3/12 md:px-0">
        {welcomeCards.map((item, index) => (
          <Card
            key={item.title}
            variant="secondary"
            {...animationProps("fadeIn,scaleUp", { delay: 400 + +index * 300 })}
          >
            <CardContent className="justify-between">
              <div className="relative max-h-[5.208vw] max-w-[5.208vw] flex-1">
                <Icon
                  name={item.icon}
                  preserveAspectRatio="none"
                  className="size-full stroke-white"
                />
              </div>
              <div className="grid gap-4">
                <CardTitle>{item.title}</CardTitle>
                <Text>{item.text}</Text>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
