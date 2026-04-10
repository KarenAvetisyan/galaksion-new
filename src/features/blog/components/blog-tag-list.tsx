"use client";

import { Button } from "@components/ui/button";
import { Skeleton } from "@components/ui/skeleton";
import { useBlogTags } from "../hooks/use-blog-tags";
import { useUnit } from "effector-react";
import { $blogTag, blogOffsetChanged, blogTagChanged } from "./blog-post-list";

export const BlogTagList = () => {
  const [selectedTag, changeTag, changeOffset] = useUnit([
    $blogTag,
    blogTagChanged,
    blogOffsetChanged,
  ]);

  const { tags, isLoading } = useBlogTags();

  if (isLoading || !tags) {
    return (
      <div className="flex flex-row flex-wrap gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={`blog-tag-list-skeleton${i}`}
            className="h-12 w-28 md:h-[2.592vw]"
          />
        ))}
      </div>
    );
  }

  const handleChangeTag = (value: string | null) => {
    changeTag(value);
    changeOffset(0);
  };

  return (
    <div
      className={
        "scrollbar-hidden inline-flex flex-row gap-2 overflow-x-auto md:flex md:flex-wrap"
      }
    >
      <Button
        size="sm"
        variant="ghost"
        className="border-secondary border"
        hoverVariant="secondary"
        onClick={() => handleChangeTag(null)}
        active={!selectedTag}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag.label}
          size="sm"
          variant="ghost"
          className="border-secondary border"
          hoverVariant="secondary"
          onClick={() => handleChangeTag(tag.value)}
          active={tag.value === selectedTag}
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
};
