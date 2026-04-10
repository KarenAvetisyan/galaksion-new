import { BlogService } from "@features/blog/api/service";
import { Icon } from "@components/ui/icon";
import { CardCaption } from "@components/ui/card";
import { Cell } from "@components/ui/cell";
import { toast } from "sonner";
import { getLikes, removeLike, setLike } from "./utils";

interface LikesProps {
  id: string;
  likes: number;
  refetch: () => void;
}

const Likes = ({ id, likes, refetch }: LikesProps) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const likes = getLikes();

    if (likes?.find((it: string) => it === id)) {
      const promise = BlogService.deleteLike(id).then(() => {
        removeLike(id);
        refetch();
      });

      toast.promise(promise, {
        loading: "Deleting...",
        success: "Like removed!",
        error: "Error!",
      });
    } else {
      const promise = BlogService.postLike(id).then(() => {
        setLike(id);
        refetch();
      });

      toast.promise(promise, {
        loading: "Adding...",
        success: "Like added!",
        error: "Error!",
      });
    }
  };

  const getName = () => {
    const lsLikes = getLikes();

    if (lsLikes?.includes(id)) {
      return "common/heart-solid";
    }

    return "common/heart-solid-rounded";
  };

  return (
    <Cell
      before={
        <Icon name={getName()} className="size-8 text-white/80 md:size-10" />
      }
      fullWidth={false}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <CardCaption>{likes}</CardCaption>
    </Cell>
  );
};

export default Likes;
