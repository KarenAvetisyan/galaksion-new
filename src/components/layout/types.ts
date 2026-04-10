import { ReactNode } from "react";

export type HeaderNavItem = {
  title: ReactNode | string;
  path?: string;
  sectionId?: string;
  items: {
    title: ReactNode | string;
    desc?: string;
    path: string;
  }[];
};
