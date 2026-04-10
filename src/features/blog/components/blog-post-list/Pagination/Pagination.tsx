import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@components/ui/pagination";
import usePagination from "./usePagination";

interface PaginationBlogProps {
  postsCount: number;
}

const PaginationBlog = ({ postsCount }: PaginationBlogProps) => {
  const { current, onChangeCurrent, getPaginationItems } = usePagination({
    postsCount,
  });

  return (
    <Pagination className="col-span-full mt-10">
      <PaginationContent>
        {getPaginationItems().map((it, i) => {
          if (it === 0) {
            return (
              <PaginationItem
                key={i}
                onClick={() =>
                  onChangeCurrent(i === 1 ? current - 3 : current + 3)
                }
              >
                ...
              </PaginationItem>
            );
          }

          return (
            <PaginationItem
              key={i}
              onClick={() => onChangeCurrent(it)}
              isActive={current === it}
            >
              {it}
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBlog;
