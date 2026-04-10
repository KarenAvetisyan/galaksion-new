"use client";

import {
  Input as HUIInput,
  InputProps as HUIInputProps,
} from "@headlessui/react";
import { cn } from "@lib/utils";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Icon } from "../icon";
import { IconButton } from "../icon-button";
import { useUnit } from "effector-react";
import {
  $blogSearch,
  blogOffsetChanged,
  blogSearchChanged,
} from "@features/blog/components/blog-post-list";

export interface SearchInputProps
  extends Omit<HUIInputProps, "value" | "onChange"> {
  timeout?: number;
}

export const SearchInput = ({
  timeout = 500,
  placeholder,
  className,
  ...props
}: SearchInputProps) => {
  const [search, onSearch, changeOffset] = useUnit([
    $blogSearch,
    blogSearchChanged,
    blogOffsetChanged,
  ]);
  const [value, setValue] = useState<string>(search ?? "");

  useEffect(() => {
    const debounced = setTimeout(() => {
      if (onSearch) {
        onSearch(value);
      }
    }, timeout);

    return () => clearTimeout(debounced);
  }, [value, timeout]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    changeOffset(0);
  };

  const reset = () => {
    setValue("");
    changeOffset(0);
  };

  return (
    <div
      className={cn(
        "flex-center bg-secondary inline-flex h-[15vw] w-full gap-3 rounded-full pr-3 pl-8 text-xl font-medium text-white/50 md:h-[3.125vw]",
        className,
      )}
    >
      <Icon name="common/search" className="md:size-[1.25vw]" />
      <HUIInput
        value={value}
        placeholder={placeholder ?? "search"}
        className={cn("flex-1 focus:outline-0")}
        onChange={onChange}
        {...props}
      />
      <IconButton
        variant="ghost"
        className={cn(
          "hover:bg-secondary opacity-100 transition duration-100 ease-out rotate-45",
        )}
        onClick={reset}
      >
        <Icon name="common/plus" className="size-7" />
      </IconButton>
    </div>
  );
};
