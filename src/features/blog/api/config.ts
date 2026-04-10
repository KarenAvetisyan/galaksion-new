export const BLOG_POSTS_QUERY_KEY = "BLOG_POSTS_QUERY_KEY";
export const BLOG_POST_QUERY_KEY = "BLOG_POST_QUERY_KEY";
export const BLOG_POPULAR_POSTS_QUERY_KEY = "BLOG_POPULAR_POSTS_QUERY_KEY";
export const BLOG_DIGEST_QUERY_KEY = "BLOG_DIGEST_QUERY_KEY";
export const BLOG_TAGS_QUERY_KEY = "BLOG_TAGS_QUERY_KEY";
export const BLOG_TAG_QUERY_KEY = "BLOG_TAG_QUERY_KEY";

export const BlogEndpoints = {
  getTags: () => "/tags",
  getTag: (id: number) => `/tags/${id}`,
  getPosts: () => "/posts-new",
  getPopularPosts: () => "/posts/popular",
  getDigest: () => "/posts/digest",
  getPost: (slug: string) => `/posts/${slug}`,
  addPostComment: () => `/comments`,
  postLike: (id: string) => `/posts/${id}/likes`,
  deleteLike: (id: string) => `/posts/${id}/likes`,
  postView: (id: string) => `/posts/${id}/views`,
};
