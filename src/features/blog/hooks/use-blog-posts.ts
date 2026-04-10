import { useQuery } from "@tanstack/react-query";
import { GetBlogPostsParams } from "../types";
import { BLOG_POSTS_QUERY_KEY } from "../api/config";
import { BlogService } from "../api/service";
import { useUnit } from "effector-react";
import {
  $blogDirection,
  $blogLimit,
  $blogOffset,
  $blogSearch,
  $blogSortField,
  $blogTag,
} from "../components/blog-post-list";

export const useBlogPosts = () => {
  const [tag, search, sortField, direction, limit, offset] = useUnit([
    $blogTag,
    $blogSearch,
    $blogSortField,
    $blogDirection,
    $blogLimit,
    $blogOffset,
  ]);

  const params: GetBlogPostsParams = {
    tag,
    search,
    sortField,
    direction,
    limit,
    offset,
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: [BLOG_POSTS_QUERY_KEY, params],
    queryFn: () => BlogService.getPosts(params),
  });

  return {
    posts: data?.data ?? [],
    isLoading,
    refetch,
    postsCount: data?.count ?? 0,
  };
};
