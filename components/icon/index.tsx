"use client";

import { cn } from "@lib/utils";
import { forwardRef, type SVGProps } from "react";
import { IconName } from "./name";

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: IconName;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, viewBox, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        aria-hidden
        className={cn("size-5", className)}
        focusable="false"
        viewBox={viewBox}
        {...props}
      >
        <use href={`/assets/sprite.svg#${name}`} />
      </svg>
    );
  },
);
