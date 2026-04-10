import { cn } from '@lib/utils';
import Image, { ImageProps } from 'next/image';
import { forwardRef } from 'react';

interface SectionImageProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>,
    Pick<ImageProps, 'src' | 'alt'> {}

export const SectionImage = forwardRef<HTMLDivElement, SectionImageProps>(
  ({ src, alt, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-3 w-full overflow-hidden rounded-xs md:mb-6 md:rounded-md', className)}
      {...props}
    >
      <Image src={src} alt={alt} quality={100} placeholder="blur" />
    </div>
  )
);
