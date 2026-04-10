'use client';

import {
  Section,
  SectionCaption,
  SectionCol,
  SectionText,
  SectionTitle,
} from '@components/ui/section';
import { PARTNERS_SECTION_ID } from '@features/home/constants';
import { PartnersSlider } from '@features/partner/components';
import { animationProps } from '@lib/utils';

export const HomePartnersSection = () => {
  return (
    <Section
      id={PARTNERS_SECTION_ID}
      bg="primary"
      intersection
      {...animationProps('gradientPrimary')}
    >
      <SectionCol cols={3}>
        <SectionCaption>Partners</SectionCaption>
      </SectionCol>
      <SectionCol cols={9}>
        <SectionTitle>
          Success through synergy: joining forces with trusted industry partners
        </SectionTitle>
        <SectionText>
          Every client matters. Galaksion’s dedication to businesses of all sizes.
        </SectionText>
      </SectionCol>
      <SectionCol cols={12}>
        <div>
          <PartnersSlider />
        </div>
      </SectionCol>
    </Section>
  );
};
