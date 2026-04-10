import { useQuery } from '@tanstack/react-query';
import { BLOG_TAGS_QUERY_KEY } from '../api/config';
import { BlogService } from '../api/service';

export const useBlogTags = () => {
  const { data, isLoading } = useQuery({
    queryKey: [BLOG_TAGS_QUERY_KEY],
    queryFn: () => BlogService.getTags(),
  });

  return {
    tags: data,
    isLoading,
  };
};
