import { Text } from '@components/typography';
import { Card, CardContent, CardTitle } from '@components/ui/card';

import terms from '../data/terms.json';
import { animationProps } from '@lib/utils';

export const DictionaryList = () => {
  return Object.entries(terms).map(([letter, letterItems]) => (
    <div
      key={`dictionary-list-letter-${letter}`}
      id={letter}
      className="col-span-9 mb-3 flex flex-col gap-3 md:col-span-8"
    >
      {letterItems.map(({ term, definition }, index) => (
        <Card
          key={`dictionary-list-letter-item-${term}`}
          variant="light"
          className="hover:bg-primary transition-colors duration-300 ease-out hover:text-white"
          {...(index < 10 ? animationProps('fadeIn,slideUp', { delay: 600 + +index * 200 }) : {})}
        >
          <CardContent className="gap-3">
            <CardTitle>{term}</CardTitle>
            <Text> {definition} </Text>
          </CardContent>
        </Card>
      ))}
    </div>
  ));
};
