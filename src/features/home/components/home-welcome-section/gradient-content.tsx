import { Text, Title } from '@components/typography';
import { Card, CardContent, CardTitle } from '@components/ui/card';
import { Icon } from '@components/ui/icon';
import { welcomeCards } from './section';
import { animationProps } from '@lib/utils';

export const GradientContent = () => {
  return (
    <div
      className="relative z-2 flex h-full flex-col justify-start gap-3 p-4 md:justify-end md:gap-0"
      {...animationProps('fadeIn,scaleUp', { delay: 600 })}
    >
      <div className="hidden md:grid">
        {['Direct traffic excellence:', 'transforming clicks into'].map(word => (
          <Title
            key={word}
            className="md:text-[3.333vw] md:leading-[3.333vw] md:-tracking-[0.008vw]"
            weight={600}
          >
            {word}
          </Title>
        ))}
      </div>
      <div className="grid md:hidden">
        {['Direct Traffic', 'Excellence:', 'Transforming Clicks', 'into Conversions'].map(word => (
          <Title key={word} className="md:leading-[3.333vw]" weight={600}>
            {word}
          </Title>
        ))}
      </div>
      <div className="flex flex-col gap-7 md:flex-row md:items-end">
        <Title className="hidden font-semibold md:block md:text-[3.333vw] md:leading-[3.333vw] md:-tracking-[0.16rem]">
          conversions
        </Title>
        <Text className="mb-1 whitespace-pre-line">
          Advertising network to monetize your{`\n`} offers, turning visitors into profit.
        </Text>
      </div>
      <div className="grid gap-1 md:hidden">
        {welcomeCards.map((item, index) => (
          <Card
            key={item.title}
            variant="dark"
            {...animationProps('fadeIn,scaleUp', { delay: 500 * (+index + 1) })}
          >
            <CardContent className="gap-4">
              <Icon name={item.icon} className="size-[13.75vw] stroke-white" />
              <CardTitle>{item.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
