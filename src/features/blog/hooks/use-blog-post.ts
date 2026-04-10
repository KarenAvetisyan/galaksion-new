import { useQuery } from "@tanstack/react-query";
import { BLOG_POST_QUERY_KEY } from "../api/config";
import { BlogService } from "../api/service";

export const useBlogPost = (slug: string, enabled = true) => {
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: [BLOG_POST_QUERY_KEY, slug],
    queryFn: () => BlogService.getPost(slug),
    enabled,
    retry: false,
  });

  return {
    post: data,
    isLoading,
    refetch,
    error,
  };
};
