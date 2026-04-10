"use client";

import { useUnit } from "effector-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Icon } from "@components/ui/icon";
import { Button } from "@components/ui/button";
import { Logo } from "../logo";
import { IconButton } from "@components/ui/icon-button";
import { EMAIL } from "@features/feedback/constants";
import {
  $isOpenMobileMenu,
  $mobileMenuSubItems,
  closeMobileMenuPressed,
  mobileMenuItemPressed,
  resetMobileSubItems,
} from ".";
import { animationProps, cn } from "@lib/utils";
import { headerNavItems, loginVariants, signInVariants } from "../constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export const MobileMenuModal = () => {
  const [subItems, resetSubItems, isOpen, closePressed, itemPressed] = useUnit([
    $mobileMenuSubItems,
    resetMobileSubItems,
    $isOpenMobileMenu,
    closeMobileMenuPressed,
    mobileMenuItemPressed,
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.search) {
      setSearch(location.search);
    }
  }, []);

  const isSelected = subItems.length > 0;

  return (
    <Dialog
      open={isOpen}
      onClose={closePressed}
      className="relative z-[9999]"
      unmount={false}
      __demoMode
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black transition duration-500 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel
          transition
          className="group flex size-full flex-col transition duration-500 ease-out data-closed:scale-95 data-closed:opacity-0"
        >
          <div className="flex items-center justify-between">
            <div className="pl-5">
              {isSelected ? (
                <Icon
                  name="common/chevron-down"
                  className="size-10 rotate-90"
                  onClick={resetSubItems}
                  {...animationProps("fadeIn")}
                />
              ) : (
                <Logo {...animationProps("fadeIn")} />
              )}
            </div>
            <span onClick={closePressed} className="p-5">
              <Icon
                name="common/plus"
                className="size-10 rotate-45 transition duration-500 ease-out group-data-closed:rotate-0 group-data-closed:opacity-0"
              />
            </span>
          </div>
          <div className="relative flex flex-1 flex-row">
            <div
              className={cn(
                "flex-center flex w-full flex-1 flex-col transition duration-300 ease-out",
                isSelected && "-translate-x-1/4 opacity-0",
              )}
            >
              {headerNavItems.map((item, key) => (
                <Button
                  key={`${item.path}_${key}`}
                  variant="ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    itemPressed(item);
                  }}
                  className="relative"
                >
                  {item.title}
                  {!!item.items?.length && (
                    <Icon
                      name="common/chevron-down"
                      className="absolute -right-1 size-6 -rotate-90"
                    />
                  )}
                </Button>
              ))}
            </div>
            <div
              className={cn(
                "flex-center absolute inset-0 flex translate-x-full flex-col gap-6 overflow-y-auto px-16 text-center transition duration-300 ease-out",
                isSelected && "translate-x-0",
              )}
            >
              {subItems?.map((subItem, key) => (
                <Link
                  key={`${subItem.path}_${key}`}
                  href={subItem.path}
                  onClick={() => closePressed()}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-2 p-5">
            <Popover className="relative">
              <PopoverButton
                as={Button}
                size="md"
                variant="secondary"
                rounded="full"
                className="z-10 w-full"
              >
                Login
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute right-0 bottom-full left-0 z-10 mt-5 grid w-full p-4 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="absolute inset-0 z-0 rounded-sm bg-white/10 backdrop-blur-xs" />
                {loginVariants.map((variant) => (
                  <a
                    key={`mobile_login_${variant.title}`}
                    href={variant.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:bg-primary z-10 mb-3 flex w-full flex-row items-center justify-between gap-3 rounded-xs bg-white p-3 text-xl font-bold text-black transition-colors duration-300 ease-out hover:text-white"
                  >
                    {variant.title}
                    <IconButton
                      outlined
                      variant="dark"
                      size="md"
                      className="group-hover:border-white"
                    >
                      <Icon
                        name="common/arrow-right"
                        className="text-black group-hover:text-white md:size-6"
                      />
                    </IconButton>
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
            <Popover className="relative">
              <PopoverButton
                as={Button}
                size="md"
                variant="primary"
                rounded="full"
                hoverVariant="dark"
                className="z-10 w-full"
              >
                Sign up
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute right-0 bottom-full left-0 z-10 mt-5 grid w-full p-4 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="absolute inset-0 z-0 rounded-sm bg-white/10 backdrop-blur-xs" />
                {signInVariants.map((variant) => (
                  <a
                    key={`mobile_${variant.title}`}
                    href={`${variant.href}${search}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:bg-primary z-10 mb-3 flex w-full flex-row items-center justify-between gap-3 rounded-xs bg-white p-3 text-xl font-bold text-black transition-colors duration-300 ease-out hover:text-white"
                  >
                    {variant.title}
                    <IconButton
                      outlined
                      variant="dark"
                      size="md"
                      className="group-hover:border-white"
                    >
                      <Icon
                        name="common/arrow-right"
                        className="text-black group-hover:text-white md:size-6"
                      />
                    </IconButton>
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
            <Button
              href={`mailto:${EMAIL}`}
              size="sm"
              variant="dark"
              className="font-normal"
            >
              {EMAIL}
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
