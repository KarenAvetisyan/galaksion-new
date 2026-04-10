import { useQuery } from "@tanstack/react-query";
import { BLOG_DIGEST_QUERY_KEY } from "../api/config";
import { BlogService } from "../api/service";

export const useBlogDigest = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [BLOG_DIGEST_QUERY_KEY],
    queryFn: () => BlogService.getDigest(),
  });

  return {
    digest: data?.[0] ?? null,
    isLoading,
    refetch
  };
};
