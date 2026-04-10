import { StaticImageData } from 'next/image';

export type PartnerKeys =
  | 'starzplay'
  | 'wargaming'
  | 'lazada'
  | 'coinis'
  | 'accesstrade'
  | 'metacpa'
  | 'affpaying'
  | 'afflift'
  | 'affroom'
  | 'affminer'
  | 'affvalley'
  | 'afffix'
  | 'affbank'
  | 'mobidea'
  | 'stm'
  | 'offervault'
  | 'allpushnetworks';

export type Partner = {
  key: PartnerKeys;
  imageData: StaticImageData;
  name: string;
  link: string;
  description: string;
};
