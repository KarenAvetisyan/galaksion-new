import type { ClassValue } from "class-variance-authority/types";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(cx(...inputs));

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

type AnimationNames =
  | "fadeIn"
  | "scaleUp"
  | "scaleDown"
  | "slideRight"
  | "rotate45"
  | "fadeIn,scaleUp"
  | "fadeIn,scaleDown"
  | "fadeIn,slideUp"
  | "fadeIn,slideRight"
  | "gradientSecondary"
  | "gradientPrimary";
type AnimationStyle = { duration?: number; delay?: number };
export const animationProps = (
  name: AnimationNames,
  { duration, delay }: AnimationStyle = {},
) => ({
  "data-animation": name,
  style: {
    "--animation-duration": duration ? `${duration}ms` : undefined,
    "--animation-delay": delay ? `${delay}ms` : undefined,
  },
});
