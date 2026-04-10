import { Cell } from "@components/ui/cell";
import { Caption, Text } from "@components/typography";
import { BlogComment } from "@features/blog/types";
import Image from "next/image";
import { getRandomLogo } from "./utils";

interface CommentCardProps {
  comment: BlogComment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="grid gap-6">
      <Cell
        before={
          <div className="relative inline-block size-18 md:size-[4.729vw]">
            <svg
              viewBox="0 0 110 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="55"
                cy="55.8242"
                r="55"
                fill="url(#paint0_linear_354_1121)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_354_1121"
                  x1="101"
                  y1="-151"
                  x2="169.033"
                  y2="-96.0332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.21058" stopColor="#035CEA" />
                  <stop offset="0.389167" stopColor="#FEFEFF" />
                  <stop offset="0.709299" stopColor="#035CEA" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
            <Image
              src={getRandomLogo()}
              alt="About Galaksion"
              quality={100}
              priority
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4rem]"
            />
          </div>
        }
        gap={6}
      >
        <p className="text-xl leading-6 font-semibold md:text-3xl md:leading-[2vw]">
          {comment.author}
        </p>
        <div className="flex flex-row items-center justify-end">
          <Cell gap={3}>
            <Caption muted>
              {comment?.createdAt.replace(
                /(\d{4})-(\d{2})-(\d{2})/,
                "$3-$2-$1",
              )}
            </Caption>
          </Cell>
        </div>
      </Cell>
      <Text muted className="mb-3">
        {comment.text}
      </Text>
    </div>
  );
};
