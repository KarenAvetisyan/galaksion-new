"use client";

import { Headline, Text } from "@components/typography";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { cn } from "@lib/utils";
import { useUnit } from "effector-react";
import {
  $isOpenModal,
  $username,
  usernameChanged,
  usernameSubmitted,
} from "./model";
import { useState } from "react";

export const CommentAuthModal = () => {
  const [isOpen, onClose, value, onChange] = useUnit([
    $isOpenModal,
    usernameSubmitted,
    $username,
    usernameChanged,
  ]);
  const [username, setUsername] = useState(value);

  const handleClose = () => {
    onChange(username);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/70 transition duration-300 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-4 flex items-center justify-center md:inset-16">
        <DialogPanel
          transition
          className={cn(
            "flex-center flex w-full scale-100",
            "transition duration-300 ease-out data-closed:scale-95 data-closed:opacity-0",
          )}
        >
          <Card variant="light" className="md:max-w-[34.375vw]">
            <CardContent className="items-center">
              <Headline className="md:text-4xl">Enter your name</Headline>
              <Input
                className="w-full md:rounded-sm"
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button size="lg" className="w-full" onClick={handleClose}>
                Post a comment
              </Button>
              <Text weight={500} className="w-3/4 text-center text-[#AEAEB2]">
                By continuing you agree Terms of Services & Privacy Policy
              </Text>
            </CardContent>
          </Card>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
