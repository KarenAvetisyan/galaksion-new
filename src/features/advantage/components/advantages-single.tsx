import {
  Section,
  SectionCaption,
  SectionCol,
  SectionHeadline,
  SectionText,
  SectionTitle,
} from '@components/ui/section';
import Image from 'next/image';

export const AdvantagesSingle = () => {
  return (
    <Section bg="secondary" className="mt-6 md:mt-0">
      <SectionCol cols={3} className="hidden md:flex">
        <SectionCaption>Advantages</SectionCaption>
      </SectionCol>
      <SectionCol cols={9} className="md:w-[46.875vw]">
        <SectionTitle>Direct Traffic</SectionTitle>
        <SectionText>
          At Galaksion, we pride ourselves on offering clean, high-quality traffic sourced directly
          from trusted website owners. This direct approach ensures traffic purity, free from bots,
          resold impressions, or remnant sources, giving you maximum value for every click.
        </SectionText>
        <div className="mb-3 w-full rounded-md md:mb-6">
          {/* <Image
                        src={postImage}
                        alt=""
                    /> */}
        </div>
        <SectionHeadline>Why Choose Galaksion?</SectionHeadline>
        <SectionText>
          The advertising landscape is often clouded by layers of reselling between networks.
          Traffic passes through multiple hands, with each intermediary adding costs and often
          compromising quality with bots or artificial traffic. Galaksion stands apart, positioned
          at the very start of the chain, sourcing traffic directly from its origin: website owners.
          This unique position allows us to provide advertisers with authentic, affordable traffic
          that delivers results. We call it direct traffic — transparent, reliable, and clean. Let
          us connect you with authentic audiences and help your campaigns thrive with traffic you
          can trust.
        </SectionText>
      </SectionCol>
    </Section>
  );
};
