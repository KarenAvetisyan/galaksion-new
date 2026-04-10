import { Icon } from '@components/ui/icon';
import { IconName } from '@components/ui/icon/name';
import { Stack } from '@components/ui/stack';
import {
  EMAIL,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TELEGRAM_LINK,
  X_LINK,
} from '@features/feedback/constants';
import { cn } from '@lib/utils';
import { ComponentPropsWithoutRef } from 'react';

type SocialNames = 'facebook' | 'instagram' | 'linkedIn' | 'telegram' | 'twitter' | 'email';

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  social: SocialNames;
  size?: 'small' | 'large';
};

const socialItems: Record<SocialNames, { name: string; iconName: IconName; link: string }> = {
  facebook: {
    name: 'Facebook',
    iconName: 'social/facebook',
    link: FACEBOOK_LINK,
  },
  instagram: {
    name: 'Instagram',
    iconName: 'social/instagram',
    link: INSTAGRAM_LINK,
  },
  linkedIn: {
    name: 'LinkedIn',
    iconName: 'social/linkedIn',
    link: LINKEDIN_LINK,
  },
  telegram: {
    name: 'Telegram',
    iconName: 'social/telegram',
    link: TELEGRAM_LINK,
  },
  twitter: {
    name: 'Twitter',
    iconName: 'social/twitter',
    link: X_LINK,
  },
  email: {
    name: 'Email',
    iconName: 'social/email',
    link: `mailto:${EMAIL}`,
  },
};

export const SocialButton = ({ social, size = 'small', className, ...props }: Props) => {
  const currentSocial = socialItems[social];

  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <a
      href={currentSocial.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group cursor-pointer',
        isLarge && 'aspect-5/3 min-h-[90px]',
        isSmall && 'size-[12.5vw] md:size-[3.125vw]',
        className
      )}
      {...props}
    >
      <Stack
        centered
        className={cn(
          'h-full w-full transition-all duration-300 ease-out group-hover:rounded-full md:group-hover:rounded-[6.25vw]',
          {
            'bg-[#1877f2]': social === 'facebook',
            'bg-linear-to-tr from-[#42b8f2] to-[#1095d5]': social === 'telegram',
            'bg-[#0a66c2]': social === 'linkedIn',
            'bg-[#0e0e0e]': social === 'twitter',
            instagram: social === 'instagram',
            'bg-primary': social === 'email',
            'rounded-[16.25vw] md:rounded-xs': isSmall,
            'rounded-sm md:rounded-md': isLarge,
          }
        )}
        gap={2}
      >
        <Icon
          name={currentSocial.iconName}
          className={cn('fill-white text-white', {
            'size-[5vw] md:size-[1.25vw]': isSmall,
            'size-[7.5vw] md:size-[2.604vw]': isLarge,
            'size-[5vw] md:size-[1.15vw]': isSmall && social === 'email',
          })}
        />
        {!isSmall && (
          <span className="text-[0.75rem] font-semibold md:text-2xl md:leading-[2.625rem] md:-tracking-[0.08rem]">
            {currentSocial.name}
          </span>
        )}
      </Stack>
    </a>
  );
};
