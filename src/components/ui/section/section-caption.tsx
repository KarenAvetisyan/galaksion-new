import { Caption } from '@components/typography';
import { CaptionProps } from '@components/typography/caption';

type Props = CaptionProps;

export const SectionCaption = ({ ...props }: Props) => {
  return (
    <Caption
      upperCase={typeof props.upperCase === 'undefined' ? true : props.upperCase}
      {...props}
    />
  );
};
