'use client';

import { animationProps } from '@lib/utils';
import { useUnit } from 'effector-react';
import { $showedCookiesModal, acceptCookiesEv, declineCokkiesEv } from '.';
import { Caption } from '@components/typography';
import { Button } from '@components/ui/button';
import Link from 'next/link';
import { paths } from '@config/routing';
import { Portal } from '@headlessui/react';

export const CookiesModal = () => {
  const [isShowed, onAccept, onDecline] = useUnit([
    $showedCookiesModal,
    acceptCookiesEv,
    declineCokkiesEv,
  ]);

  if (isShowed) return null;

  return (
    <Portal>
      <div
        className="fixed right-4 bottom-4 left-4 z-50 flex flex-col items-center gap-4 rounded-sm bg-black/90 px-5 py-5 md:right-10 md:bottom-10 md:left-auto md:w-[21.875vw] md:px-12"
        {...animationProps('fadeIn,scaleUp')}
      >
        <span className="text-center text-base leading-5 font-medium">
          We use cookies to enhance your experience on our website. By continuing to browse, you
          agree to our use of cookies.
        </span>
        <div className="flex w-full flex-row gap-3">
          <Button size="xs" className="w-full" onClick={onAccept}>
            Accept
          </Button>
          <Button
            size="xs"
            variant="secondary"
            hoverVariant="dark"
            className="w-full"
            onClick={onDecline}
          >
            Decline
          </Button>
        </div>
        <Caption muted>
          View{' '}
          <Link href={paths.privacyPolicy} className="underline">
            privacy policy
          </Link>
        </Caption>
      </div>
    </Portal>
  );
};
