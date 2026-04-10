import { IconName } from '@components/ui/icon/name';
import { ReactNode } from "react";

export type AdvantageKeys =
  | 'direct-traffic'
  | 'antifraud-system'
  | 'cpa-pricing-model'
  | 'base-of-creatives'
  | 'personal-manager-for-everyone'
  | 'opportunity-to-test'
  | 'ai-rotation-system'
  | 'deposit'
  | 'optimization';

export type Advantage = {
  key: AdvantageKeys;
  title: ReactNode | string;
  shortDesc: string;
  path: string;
  // imageSrc: StaticImageData;
  iconName: IconName;
};
