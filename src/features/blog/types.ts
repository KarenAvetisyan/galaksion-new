import { Ideable } from "types/mixin";

export interface BlogPostTag {
  label: string;
  value: string;
}

export interface BlogPost extends Ideable {
  uuid: string;
  name: string;
  slug: string;
  imageUrl: string;
  shortDescription: string;
  readingTime: number;
  likes: number;
  views: number;
  publishedAt: string;
  tags: string[];
  comments: number;
}

interface PostMeta {
  title: string;
  description: string;
  keywords: string | null;
}

export interface BlogComment {
  author: string;
  text: string;
  createdAt: string;
}

export interface BlogPostPage {
  uuid: string;
  name: string;
  meta: PostMeta;
  imageUrl: string;
  content: string;
  readingTime: number;
  likes: number;
  views: number;
  isDigest: boolean;
  publishedAt: string;
  tags: string[];
  comments: BlogComment[];
  anchors: any[];
}

export interface BlogPostComment {
  author: string;
  text: string;
  post: string;
  recaptcha: string;
}

export type SortDirection = "ASC" | "DESC";

export type GetBlogPostsParams = {
  search?: string | null;
  limit?: number;
  offset?: number;
  sortField?: "views" | "publishedAt";
  direction?: SortDirection;
  tag?: string | null;
};
