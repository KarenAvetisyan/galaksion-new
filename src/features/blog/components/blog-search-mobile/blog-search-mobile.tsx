"use client";

import { Icon } from "@components/ui/icon";
import { useUnit } from "effector-react";
import { Input } from "@headlessui/react";
import { cn } from "@lib/utils";
import { useRef } from "react";
import { useDebounceCallback } from "usehooks-ts";
import {
  $isOpenBlogSearchMobile,
  blogSearchMobileClosed,
  blogSearchMobileOpened,
} from ".";
import {
  $blogSearch,
  blogOffsetChanged,
  blogSearchChanged,
} from "../blog-post-list";

export const BlogSearchMobile = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, openSearch, closeSearch, search, onSearch, changeOffset] =
    useUnit([
      $isOpenBlogSearchMobile,
      blogSearchMobileOpened,
      blogSearchMobileClosed,
      $blogSearch,
      blogSearchChanged,
      blogOffsetChanged,
    ]);

  const handleSearch = (value: string) => {
    onSearch(value);
    changeOffset(0);
  };

  const debounced = useDebounceCallback(handleSearch, 500);

  const handleOpen = () => {
    openSearch();
  };

  const handleBlur = () => {
    if (!search) return;

    if (search.trim().length) return;

    closeSearch();
  };

  return (
    <div
      className={cn(
        "absolute inset-y-3 right-0 left-auto z-10 inline-flex items-center gap-2 rounded-full px-2 py-3 text-lg text-white/50 transition-all duration-300 ease-out md:hidden",
        isOpen && "bg-secondary right-0 left-0 px-5",
      )}
    >
      <Icon name="common/search" className="size-6" onClick={handleOpen} />
      {isOpen && (
        <div className="inline-flex w-full items-center">
          <Input
            ref={inputRef}
            onChange={(e) => debounced(e.target.value)}
            className={cn("hidden w-full focus:outline-0", isOpen && "block")}
            onBlur={handleBlur}
            autoFocus
          />
          {!!search?.length && (
            <Icon
              name="common/plus"
              className="size-6 rotate-45"
              onClick={closeSearch}
            />
          )}
        </div>
      )}
    </div>
  );
};
