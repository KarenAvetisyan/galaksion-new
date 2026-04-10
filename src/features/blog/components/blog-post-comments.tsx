"use client";

import { Text, Title } from "@components/typography";
import {
  AddCommentForm,
  AddCommentFormSubmitHandler,
  CommentList,
} from "@features/comment/components";
import { BlogService } from "../api/service";
import { toast } from "sonner";
import { useUnit } from "effector-react";
import { $username } from "@features/comment/components/comment-auth-modal";
import { BlogComment } from "@features/blog/types";

interface BlogPostComments {
  comments?: BlogComment[];
  uuid?: string;
}

export const BlogPostComments = ({ comments, uuid }: BlogPostComments) => {
  const username = useUnit($username);

  const onSubmit: AddCommentFormSubmitHandler = async (data) => {
    const promise = BlogService.addPostComments({
      author: username,
      post: uuid!,
      text: data.text,
      recaptcha: data.recaptcha,
    });

    toast.promise(promise, {
      loading: "Adding...",
      success: "Comment added!",
      error: "Error!",
    });
  };

  return (
    <div id="comments" className="grid">
      <Title weight={600} className="mb-3">
        Comments
      </Title>
      <Text>Ask a question or tell us about your experience</Text>

      <AddCommentForm onSubmit={onSubmit} />
      <div className="mb-4" />
      <CommentList comments={comments} />
    </div>
  );
};
