"use client";

import { Fragment, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { HeaderNavItem } from "./types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Stack } from "@components/ui/stack";
import { cn } from "@lib/utils";
import { paths } from "@config/routing";
import { headerNavItems, loginVariants, signInVariants } from "./constants";
import { Button } from "@components/ui/button";
import { Icon } from "@components/ui/icon";
import { Logo } from "./logo";
import { Caption, Text } from "@components/typography";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IconButton } from "@components/ui/icon-button";
import { MobileMenuModal, openMobileMenuPressed } from "./mobile-menu-modal";

export const Header = () => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const onOpenMobileMenuPressed = useUnit(openMobileMenuPressed);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (location.search) {
      setSearch(location.search);
    }
  }, []);

  const isHomePage = pathname === paths.home;

  return (
    <>
      <header
        className={cn(
          "relative z-50 flex h-[var(--header-height)] flex-row items-center justify-between gap-6",
          "md:bg-secondary md:mb-6 md:rounded-full md:px-3 md:py-0",
          isHomePage &&
            "-translate-y-[150%] opacity-0 transition-all duration-1000 ease-out",
          isHomePage && animate && "translate-y-0 opacity-100",
        )}
      >
        <Logo />
        <Stack
          direction="row"
          alignItems="center"
          className="hidden h-full md:flex"
        >
          {headerNavItems.map((item, key) => (
            <HeaderItem key={key} item={item} />
          ))}
          <Stack direction="row" gap={2} className="ml-3 w-[23.281vw]">
            <Popover className="relative">
              <PopoverButton
                as={Button}
                variant="dark"
                className="z-10 w-[11.6vw] font-medium"
              >
                Login
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full right-0 mt-5 grid w-[18vw] p-4 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="absolute inset-0 z-0 rounded-sm bg-white/10 backdrop-blur-xs" />
                {loginVariants.map((variant) => (
                  <a
                    key={variant.title}
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
                      className="border-[0.104vw] group-hover:border-white"
                    >
                      <Icon
                        name="common/arrow-right"
                        className="size-6 text-black group-hover:text-white"
                      />
                    </IconButton>
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
            <Popover className="relative">
              <PopoverButton
                as={Button}
                variant="primary"
                hoverVariant="dark"
                className="z-10 w-[11.6vw] font-medium"
              >
                Sign up
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full right-0 mt-5 grid w-[18vw] p-4 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="absolute inset-0 z-0 rounded-sm bg-white/10 backdrop-blur-xs" />
                {signInVariants.map((variant) => (
                  <a
                    key={variant.title}
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
                      className="border-[0.104vw] group-hover:border-white"
                    >
                      <Icon
                        name="common/arrow-right"
                        className="size-6 text-black group-hover:text-white"
                      />
                    </IconButton>
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
          </Stack>
        </Stack>

        <div className="mr-3 block md:hidden">
          <Icon
            name="common/menu-line"
            className="size-[5.5vw]"
            onClick={onOpenMobileMenuPressed}
          />
        </div>
      </header>
      <MobileMenuModal />
    </>
  );
};

const HeaderItem = ({ item }: { item: HeaderNavItem }) => {
  const pathname = usePathname();

  const isSubMenu = !!item.items?.length;

  return (
    <Fragment>
      <Popover className="relative">
        <PopoverButton
          as={Button}
          variant="ghost"
          href={item.path}
          className="group relative z-10 flex h-full flex-row items-center"
        >
          <Text weight={500} className="-tracking-[0.021vw]">
            {item.title}
          </Text>
          {!!item.items?.length && (
            <Icon name="common/chevron-down" className="cursor-pointer" />
          )}
          <span
            className={cn(
              "absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 scale-50 cursor-pointer rounded-full bg-white opacity-0 transition duration-300 ease-out",
              "group-hover:scale-100 group-hover:opacity-100",
              {
                "scale-100 opacity-100":
                  !isSubMenu && isActive(item.path ?? "#", pathname),
              },
            )}
          />
        </PopoverButton>
        <PopoverPanel
          transition
          className="absolute top-full left-1/2 mt-5 grid w-[calc(18.1vw*3+var(--space)*6)] -translate-x-1/2 grid-cols-3 p-4 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="absolute inset-0 z-0 rounded-sm bg-black/10 backdrop-blur-xs" />
          {item.items?.map((subItem) => (
            <Link
              key={subItem.path}
              href={subItem.path}
              className={cn(
                "group hover:bg-primary z-10 mb-3 flex w-[17.448vw] flex-row items-end justify-between gap-3 rounded-xs bg-white p-3 text-black transition-colors duration-300 ease-out hover:text-white",
                !subItem.desc && "items-start",
              )}
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <Text weight={600}>{subItem.title}</Text>
                {subItem.desc && <Caption>{subItem.desc}</Caption>}
              </div>
              <IconButton
                outlined
                variant="dark"
                className="border-[0.104vw] group-hover:border-white"
              >
                <Icon
                  name="common/arrow-right"
                  className="size-6 text-black group-hover:text-white"
                />
              </IconButton>
            </Link>
          ))}
        </PopoverPanel>
      </Popover>
    </Fragment>
  );
};

function isActive(itemPath: string, pathname: string) {
  return (
    itemPath === "/" || (itemPath !== "/" && pathname.startsWith(itemPath))
  );
}
