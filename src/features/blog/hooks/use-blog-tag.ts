import { useQuery } from '@tanstack/react-query';
import { BLOG_TAG_QUERY_KEY } from '../api/config';
import { BlogService } from '../api/service';

export const useBlogTag = (id?: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [BLOG_TAG_QUERY_KEY, id],
    queryFn: () => BlogService.getTag(id!),
    enabled: !!id,
  });

  return {
    tag: data,
    isLoading,
  };
};
