import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Button as HUIButton } from "@headlessui/react";
import { HTMLAttributes } from "react";

const iconButtonVariants = cva(
  [
    "relative rounded-full flex items-center justify-center",
    // hover
    "hover:bg-primary hover:text-white",
  ],
  {
    variants: {
      variant: {
        light: "bg-white text-black",
        dark: "bg-black text-white",
        ghost: "bg-transparent",
        secondary: "bg-secondary text-white",
      },
      size: {
        md: "min-w-8 size-8 md:min-w-11 md:size-11",
        lg: "min-w-9 size-9 md:min-w-14 md:size-14",
      },
      outlined: {
        true: "bg-transparent border-[0.5vw] md:border-[0.156vw]",
        false: null,
      },
    },
    compoundVariants: [
      {
        outlined: true,
        variant: "light",
        className: "border-white text-white",
      },
      {
        outlined: true,
        variant: "dark",
        className: "border-black text-black",
      },
    ],
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  },
);

interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export const IconButton = ({
  variant,
  size,
  outlined,
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <HUIButton
      className={cn(iconButtonVariants({ variant, size, outlined }), className)}
      {...props}
    >
      {children}
    </HUIButton>
  );
};
