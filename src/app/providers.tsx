"use client";

import { PropsWithChildren } from "react";
import { queryClient } from "@config/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { CookiesModal } from "@components/modals/cookies-modal";
import FacebookPixel from "@components/facebook-pixel";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
      <CookiesModal />
      <FacebookPixel />
    </QueryClientProvider>
  );
};
