import { request } from "@lib/request";
import {
  BlogPost,
  BlogPostComment,
  BlogPostPage,
  BlogPostTag,
  GetBlogPostsParams,
} from "../types";
import { BlogEndpoints } from "./config";
import { Paginateable } from "types/mixin";
import { AxiosMethod } from "types/axios";

export class BlogService {
  public static async getTags(): Promise<BlogPostTag[]> {
    return request({
      url: BlogEndpoints.getTags(),
    });
  }

  public static async getTag(id: number): Promise<BlogPostTag> {
    return request({
      url: BlogEndpoints.getTag(id),
    });
  }

  public static async getPosts(
    params: GetBlogPostsParams = {},
  ): Promise<Paginateable<BlogPost>> {
    return request(
      {
        url: BlogEndpoints.getPosts(),
        params,
      },
      true,
    );
  }

  public static async getPost(slug: string): Promise<BlogPostPage> {
    return request({
      url: BlogEndpoints.getPost(slug),
    });
  }

  public static async addPostComments(
    data: BlogPostComment,
  ): Promise<BlogPostComment> {
    return request({
      url: BlogEndpoints.addPostComment(),
      method: AxiosMethod.POST,
      data,
    });
  }

  public static async postLike(id: string): Promise<void> {
    return request({
      url: BlogEndpoints.postLike(id),
      method: AxiosMethod.POST,
    });
  }

  public static async deleteLike(id: string): Promise<void> {
    return request({
      url: BlogEndpoints.deleteLike(id),
      method: AxiosMethod.DELETE,
    });
  }

  public static async postView(id: string): Promise<void> {
    return request({
      url: BlogEndpoints.postView(id),
      method: AxiosMethod.POST,
    });
  }

  public static async getPopularPosts(): Promise<BlogPost[]> {
    return request({
      url: BlogEndpoints.getPopularPosts(),
    });
  }

  public static async getDigest(): Promise<BlogPost[]> {
    return request({
      url: BlogEndpoints.getDigest(),
    });
  }
}
