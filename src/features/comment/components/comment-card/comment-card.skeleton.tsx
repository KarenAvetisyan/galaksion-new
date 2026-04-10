import { Cell } from "@components/ui/cell";
import { Skeleton } from "@components/ui/skeleton";

export const CommentCardSkeleton = () => {
  return (
    <div className="grid">
      <Cell
        before={
          <Skeleton
            variant="dark"
            className="size-[20vw] rounded-full md:size-[5.729vw]"
          />
        }
        gap={6}
        className="mb-6"
      >
        <Skeleton variant="dark" className="mb-1 h-6 w-36 md:h-8" />
      </Cell>
      <Skeleton variant="dark" className="mb-2 h-6 w-10/12" />
      <div className="flex flex-row items-center justify-end">
        <Skeleton variant="dark" className="h-10 w-16" />
      </div>
    </div>
  );
};
