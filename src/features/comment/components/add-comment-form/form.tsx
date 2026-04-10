import { Button } from "@components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@lib/utils";
import { useUnit } from "effector-react";
import {
  ComponentPropsWithoutRef,
  FormEventHandler,
  useEffect,
  useRef,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { $username } from "../comment-auth-modal";
import { modalOpenned } from "../comment-auth-modal/model";

const formSchema = z.object({
  text: z.string().min(1, { message: "Text is required" }),
  recaptcha: z.string().min(1, { message: "Recaptcha is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

export type AddCommentFormSubmitHandler = SubmitHandler<FormSchema>;

interface AddCommentFormProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  onSubmit: AddCommentFormSubmitHandler;
}

export const AddCommentForm = ({
  onSubmit,
  className,
  ...props
}: AddCommentFormProps) => {
  const [name, openModal] = useUnit([$username, modalOpenned]);
  const captchaRef = useRef(null);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { text: "", recaptcha: "" },
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.resetField("text");
      // @ts-ignore
      captchaRef.current?.reset();
    }
  }, [form.formState.isSubmitSuccessful]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (!name.trim().length) {
      e.preventDefault();
      openModal();
      return;
    }

    // @ts-ignore
    const recaptcha = captchaRef.current?.getValue();
    form.setValue("recaptcha", recaptcha);

    form.handleSubmit(onSubmit)(e);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "my-6 flex w-full flex-col items-center gap-3 md:flex-row",
          className,
        )}
        {...props}
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full md:w-7/12">
              <FormControl className="w-full rounded-xs md:rounded-full">
                <Input
                  placeholder="Your comment"
                  className="w-full bg-white text-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          rounded="full"
          hoverVariant="dark"
          className="w-full md:w-5/12"
        >
          Send
        </Button>
      </form>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string}
        ref={captchaRef}
      />
    </Form>
  );
};
