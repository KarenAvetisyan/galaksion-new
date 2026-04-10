import { Card, CardContent } from "@components/ui/card";
import { Cell } from "@components/ui/cell";
import { Skeleton } from "@components/ui/skeleton";

type BlogPostCardSkeletonProps = {
  withImages?: boolean;
};

export const BlogPostCardSkeleton = ({
  withImages = true,
}: BlogPostCardSkeletonProps) => {
  return (
    <Card variant="dark" className="border-secondary border mb-6">
      {withImages && (
        <Skeleton className="h-52 w-full rounded-sm min-h-[292px] max-h-[292px]" />
      )}
      <CardContent>
        <div className="flex flex-row items-center gap-2.5">
          <Skeleton className="h-7 w-24" />
          <Cell before={<Skeleton className="size-8" />} gap={2}>
            <Skeleton className="h-4 w-10" />
          </Cell>
        </div>
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-8 w-full min-h-[43px]" />
        <div className="flex flex-row items-center gap-3">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </CardContent>
    </Card>
  );
};
