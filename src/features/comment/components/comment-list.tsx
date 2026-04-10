import { Text } from "@components/typography";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@lib/utils";
import { CommentCard } from "./comment-card/comment-card";
import { CommentCardSkeleton } from "./comment-card/comment-card.skeleton";
import { BlogComment } from "@features/blog/types";

interface CommentListProps extends ComponentPropsWithoutRef<"div"> {
  comments?: BlogComment[];
  isLoading?: boolean;
}

export const CommentList = ({
  comments,
  isLoading,
  className,
  ...props
}: CommentListProps) => {
  if (isLoading || !comments) {
    return (
      <div className="grid gap-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <CommentCardSkeleton key={`comment-list-skeleton${i}`} />
        ))}
      </div>
    );
  }

  if (!isLoading && !comments.length) {
    return <Text>No comments</Text>;
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {comments.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
    </div>
  );
};
