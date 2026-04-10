import { useState } from "react";
import { useUnit } from "effector-react";
import {
  $blogLimit,
  $blogOffset,
  blogOffsetChanged,
} from "@features/blog/components/blog-post-list";

interface UsePaginationProps {
  postsCount: number;
}

const usePagination = ({ postsCount }: UsePaginationProps) => {
  const [limit, offset, changeOffset] = useUnit([
    $blogLimit,
    $blogOffset,
    blogOffsetChanged,
  ]);

  const [current, setCurrent] = useState(offset / 6 + 1);
  const lastPage = Math.ceil(postsCount / limit);

  const getPaginationItems = () => {
    const items = [1];

    if (lastPage <= 4) {
      return new Array(lastPage).fill(0).map((_, i) => i + 1);
    }

    if (current <= 3) {
      items.push(2, 3, 4);

      if (lastPage > 5) {
        items.push(0);
      }

      items.push(lastPage);

      return items;
    }

    if (current + 2 >= lastPage - 1) {
      if (lastPage > 6) {
        items.push(0);
      }

      items.push(
        lastPage - 4,
        lastPage - 3,
        lastPage - 2,
        lastPage - 1,
        lastPage,
      );

      return items;
    }

    if (current > 4) {
      items.push(0);
    }

    const startIndex = current - 1;

    for (let i = startIndex; i <= startIndex + 2; i++) {
      items.push(i);
    }

    if (current + 2 < lastPage - 1) {
      items.push(0);
    }

    items.push(lastPage);

    return items;
  };

  const onChangeCurrent = (number: number) => {
    if (number < 1) {
      number = 1;
    }

    if (number > lastPage) {
      number = lastPage;
    }
    changeOffset((number - 1) * limit);
    setCurrent(number);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return { current, onChangeCurrent, getPaginationItems };
};

export default usePagination;
