"use client";

import { useBlogPopularPosts } from "../hooks/use-blog-popular-posts";
import { BlogPostCard, BlogPostCardSkeleton } from "./blog-post-card";

export const BlogPopularPostList = () => {
  const { posts, isLoading, refetch } = useBlogPopularPosts();

  if (isLoading || !posts) {
    return (
      <div className="grid gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <BlogPostCardSkeleton
            key={`blog-popular-posts-skeleton${i}`}
            withImages={false}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {posts?.map((post) => (
        <BlogPostCard key={post.uuid} post={post} refetch={refetch} customClass={"min-h-[180px]"} />
      ))}
    </div>
  );
};
