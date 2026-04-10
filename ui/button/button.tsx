import { cn } from "@lib/utils";
import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Button as HUIButton } from "@headlessui/react";
import Link from "next/link";

const button = cva(
  [
    // base
    "inline-flex flex-row flex-nowrap items-center justify-center gap-2 px-6 text-xl font-bold text-nowrap cursor-pointer focus:outline-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary: "bg-secondary text-white hover:bg-primary",
        light: "bg-white text-secondary",
        dark: "bg-black text-white",
        ghost: "bg-transparent",
      },
      size: {
        xs: "h-11 md:h-[2.292vw] py-0 px-5 text-[3.72vw] md:text-base font-medium md:font-semibold",
        sm: "h-12 md:h-[2.592vw] py-0 px-5 text-sm md:text-lg font-medium md:font-semibold",
        md: "h-[13.75vw] md:h-[2.604vw]",
        lg: "h-[15vw] md:h-[4.167vw] md:px-[3.906vw] text-xl",
        xl: "h-[15vw] md:h-[6.25vw] md:px-[3.906vw] text-xl md:text-2xl",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-sm md:rounded-md",
      },
      hoverVariant: {
        default: null,
        dark: "hover:bg-black",
        secondary: "hover:bg-secondary",
      },
      active: {
        true: null,
        false: null,
      },
    },
    compoundVariants: [
      {
        size: "xl",
        rounded: "md",
        className: "rounded-xs",
      },
      {
        active: true,
        variant: ["secondary", "ghost"],
        className: "bg-primary hover:bg-primary",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
    },
  },
);

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onClick">,
    VariantProps<typeof button> {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button = forwardRef<HTMLLinkElement, ButtonProps>(
  (
    {
      variant,
      size,
      rounded,
      hoverVariant,
      active,
      href,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      button({ variant, size, rounded, hoverVariant, active }),
      className,
    );

    if (href) {
      const isAbsoluteUrl = href.startsWith("http");
      const isHashLink = href.startsWith("/#");
      const LinkTag = isAbsoluteUrl || isHashLink ? "a" : Link;

      return (
        <LinkTag
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          target={isAbsoluteUrl ? "_blank" : undefined}
          rel={isAbsoluteUrl ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </LinkTag>
      );
    }

    return (
      <HUIButton ref={ref} className={classes} {...props}>
        {children}
      </HUIButton>
    );
  },
);
