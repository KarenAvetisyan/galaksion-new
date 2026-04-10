'use client';

import { useEffect } from 'react';
import { Headline, Text } from '@components/typography';
import { Button } from '@components/ui/button';
import { Icon } from '@components/ui/icon';
import { IconButton } from '@components/ui/icon-button';
import { Input } from '@components/ui/input';
import { SocialButton } from '@components/ui/social-button';

import { useUnit } from 'effector-react';
import { $isOpenModal, $isSuccess, modalClosed } from './model';
import { Card, CardTitle } from '@components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { animationProps, cn } from '@lib/utils';
import { EMAIL } from '@features/feedback/constants';
import { useFeedbackSubmit } from '@features/feedback/hooks/use-feedback-submit';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email('Incorrect email'),
  text: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export const FeedBackModal = () => {
  const [isOpen, closeModal, isSuccess] = useUnit([
    $isOpenModal,
    modalClosed,
    $isSuccess,
  ]);

  const { isLoading, handleSubmit } = useFeedbackSubmit();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  });

  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 transition duration-300 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-4 flex items-end justify-end md:inset-16">
        <DialogPanel
          transition
          className={cn(
            'flex w-full scale-100 flex-col items-end justify-end gap-3 md:flex-row md:items-stretch',
            'transition duration-300 ease-out data-closed:scale-95 data-closed:opacity-0'
          )}
        >
          <Card
            variant="light"
            className="order-2 flex w-full flex-1 flex-col gap-3 p-5 md:max-w-[34.375vw]"
          >
            <Headline className="mb-2 text-xl leading-6">
              Please send us your details so we can respond to you
            </Headline>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="rounded-xs md:rounded-md">
                        <Input size="lg" placeholder="Name" className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="rounded-xs md:rounded-md">
                        <Input
                          size="lg"
                          type="email"
                          inputMode="email"
                          placeholder="Email"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="rounded-xs md:rounded-md">
                        <Input size="lg" placeholder="Text" className="w-full" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="xl"
                  className="w-full rounded-full md:rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </Form>
            {isSuccess && (
              <div className="flex-center absolute inset-0 flex flex-col gap-8 rounded-md bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-20 text-green-600"
                  {...animationProps('fadeIn,scaleUp')}
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12l2 2l4-4" />
                  </g>
                </svg>
                <CardTitle {...animationProps('fadeIn')}>Successfully</CardTitle>
              </div>
            )}
          </Card>
          <Card
            variant="light"
            className="order-2 flex w-full flex-col items-center justify-between gap-3 bg-transparent p-3 md:w-auto md:bg-white md:p-5"
          >
            <div className="flex w-full flex-row items-center justify-around gap-3 md:flex-col md:justify-center">
              <SocialButton social="instagram" />
              <SocialButton social="facebook" />
              <SocialButton social="telegram" />
              <SocialButton social="linkedIn" />
              <SocialButton social="twitter" />
              <SocialButton social="email" className="md:hidden" />
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="hidden rotate-180 rounded-full bg-black p-4 text-white md:block"
              style={{ writingMode: 'vertical-rl' }}
            >
              <Text>{EMAIL}</Text>
            </a>
          </Card>
          <IconButton
            size="lg"
            className="order-1 bg-transparent md:order-3 md:bg-white"
            onClick={closeModal}
          >
            <Icon name="common/plus" className="h-8 w-8 rotate-45 text-white md:text-black" />
          </IconButton>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
