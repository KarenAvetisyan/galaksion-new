import { Icon } from '@components/ui/icon';
import { IconName } from '@components/ui/icon/name';
import { animationProps, cn } from '@lib/utils';

type Props = {
  items: { title: string; iconName: IconName }[];
  position: 'left' | 'right';
};

export const LineEndpoints = ({ position, items }: Props) => {
  const isLeft = position === 'left';

  return items.map((item, index) => (
    <div
      key={item.title}
      className={cn(
        'flex flex-1 items-center justify-center md:w-auto',
        index === 0 && 'justify-start md:-translate-y-1/2',
        index === items.length - 1 && 'justify-end md:translate-y-1/2 md:justify-start'
      )}
      {...animationProps('fadeIn,scaleUp', { delay: 1000 + +index * 300 })}
    >
      <div className="flex flex-col items-center md:flex-row md:gap-4">
        <Icon
          name={item.iconName}
          className="size-20 min-h-20 stroke-white md:size-[6.208vw] md:min-w-[6.208vw]"
        />
        <span
          className={cn(
            'text-center leading-[1.75rem] font-bold -tracking-[0.06rem] text-nowrap md:-ml-[1.042vw] md:text-start md:text-2xl',
            !isLeft && 'md:text-wrap'
          )}
        >
          {item.title}
        </span>
      </div>
    </div>
  ));
};
