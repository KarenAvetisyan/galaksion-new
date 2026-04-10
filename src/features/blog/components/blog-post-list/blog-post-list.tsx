"use client";

import { Skeleton } from "@components/ui/skeleton";
import { Text, Title } from "@components/typography";
import { useUnit } from "effector-react";
import { Icon } from "@components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuItem,
  DropdownMenuItems,
} from "@components/ui/dropdown-menu";
import { useBlogPosts } from "@features/blog/hooks/use-blog-posts";
import { BlogPostCard, BlogPostCardSkeleton } from "../blog-post-card";
import { BlogPost, GetBlogPostsParams } from "@features/blog/types";
import { $blogLimit, $blogSortField, $blogTag, blogSortFieldChanged } from ".";
import Pagination from "./Pagination";

const sortItems: {
  name: string;
  sortField: GetBlogPostsParams["sortField"];
  direction: GetBlogPostsParams["direction"];
}[] = [
  {
    name: "Date",
    sortField: "publishedAt",
    direction: "DESC",
  },
  {
    name: "Views",
    sortField: "views",
    direction: "DESC",
  },
];

export const BlogPostList = () => {
  const [tag, sortField, limit, changeSort] = useUnit([
    $blogTag,
    $blogSortField,
    $blogLimit,
    blogSortFieldChanged,
  ]);
  const { posts, isLoading, postsCount, refetch } = useBlogPosts();

  if (isLoading || !posts) {
    return (
      <>
        <div className="grid-cols-full grid gap-3 md:grid-cols-2">
          <div className="col-span-full mb-3 flex flex-col items-center justify-between md:flex-row">
            <Skeleton className="hidden h-14 w-56 md:block" />
            <Skeleton className="h-15 w-full md:h-11 md:w-72" />
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <BlogPostCardSkeleton key={`blog-list-skeleton${i}`} />
          ))}
        </div>
        <div className="w-full flex flex-center mt-10">
          <Skeleton className="h-7 w-75 " />
        </div>
      </>
    );
  }

  const currentSort = sortItems.find((item) => item.sortField === sortField);

  return (
    <div className="grid-cols-full grid gap-3 md:grid-cols-2">
      <div className={"col-span-full mb-3 justify-between md:flex"}>
        <Title className="hidden capitalize md:block">
          {isLoading ? <Skeleton className="h-10 w-36" /> : (tag ?? "All")}
        </Title>
        <div className="bg-secondary flex h-15 items-center justify-between rounded-full px-8 md:h-auto md:bg-transparent">
          <Text className="md:hidden">order</Text>
          <DropdownMenu>
            <DropdownMenuButton>
              <Text>{currentSort?.name}</Text>
              <Icon name="common/chevron-down" className="size-9" />
            </DropdownMenuButton>
            <DropdownMenuItems anchor="bottom end">
              {sortItems.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  onClick={() => changeSort(item.sortField)}
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuItems>
          </DropdownMenu>
        </div>
      </div>
      {posts.length ? (
        posts.map((post: BlogPost) => (
          <BlogPostCard key={post.uuid} post={post} refetch={refetch} />
        ))
      ) : (
        <Text>No posts</Text>
      )}
      {postsCount >= limit && <Pagination postsCount={postsCount} />}
    </div>
  );
};
