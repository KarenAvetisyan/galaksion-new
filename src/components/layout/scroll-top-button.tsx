"use client";

import { Icon } from "@components/ui/icon";
import { IconButton } from "@components/ui/icon-button";
import { cn } from "@lib/utils";
import { useEffect, useState } from "react";

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.pageYOffset;
        const screenHeight = window.innerHeight;

        if (position > screenHeight) {
          return setVisible(true);
        } else if (position < screenHeight) {
          return setVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      variant="secondary"
      size="lg"
      onClick={scrollTop}
      className={cn(
        "fixed right-5 bottom-5 z-10 translate-y-full rounded-full opacity-0 transition duration-300 ease-out",
        visible && "translate-y-0 opacity-100",
      )}
    >
      <Icon name="common/chevron-down" className="size-12 rotate-180" />
    </IconButton>
  );
};
