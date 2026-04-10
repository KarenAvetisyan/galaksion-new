import { cn } from "@lib/utils";
import { HTMLAttributes } from "react";

export interface CardTitleProps extends HTMLAttributes<HTMLButtonElement> {}

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <span
      className={cn("text-xl font-bold md:text-2xl min-h-[50px]", className)}
      {...props}
    />
  );
};
