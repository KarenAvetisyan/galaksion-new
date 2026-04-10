"use client";

import { useBlogDigest } from "@features/blog/hooks/use-blog-digest";
import { BlogPostCard, BlogPostCardSkeleton } from "../blog-post-card";
import { Title } from "@components/typography";

export const BlogDigest = () => {
  const { digest, isLoading, refetch } = useBlogDigest();

  if (!digest) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="mb-4">
        <Title className="text-3xl">Top events to target this week</Title>
      </div>
      <div className="md:w-1/2">
        {isLoading ? (
          <BlogPostCardSkeleton />
        ) : (
          <BlogPostCard post={digest} refetch={refetch} />
        )}
      </div>
    </div>
  );
};
