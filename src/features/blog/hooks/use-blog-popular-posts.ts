import { useQuery } from "@tanstack/react-query";
import { BLOG_POPULAR_POSTS_QUERY_KEY } from "../api/config";
import { BlogService } from "../api/service";

export const useBlogPopularPosts = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [BLOG_POPULAR_POSTS_QUERY_KEY],
    queryFn: () => BlogService.getPopularPosts(),
  });

  return {
    posts: data,
    refetch,
    isLoading,
  };
};
