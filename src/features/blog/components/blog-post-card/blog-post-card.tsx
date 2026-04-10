import {
    Card,
    CardBadge,
    CardCaption,
    CardContent,
    CardTitle,
} from '@components/ui/card';
import { BlogPost } from '../../types';
import Image from 'next/image';

import { Icon } from '@components/ui/icon';
import Link from 'next/link';
import { paths } from '@config/routing';
import { Cell } from '@components/ui/cell';
import Likes from '../Likes';
import Views from '../Views';

type BlogCardProps = {
    post: BlogPost;
    refetch: () => void;
    customClass?: string;
};

export const BlogPostCard = ({
    post,
    refetch,
    customClass = 'min-h-[304px]',
}: BlogCardProps) => (
    <Link href={paths.blogPost(post.slug)} prefetch>
        <Card variant="secondary" className="overflow-hidden">
            {!!post.imageUrl.length && (
                <Image
                    src={post.imageUrl}
                    alt={post.name}
                    quality={80}
                    width="0"
                    height="0"
                    sizes="50vw"
                    className={`${customClass} w-full rounded-sm max-h-[305px] object-contain`}
                />
            )}
            <CardContent>
                <div className="flex flex-row items-center gap-3">
                    <CardBadge>{post.tags?.[0]}</CardBadge>
                    <Cell
                        before={
                            <Icon
                                name="common/clock-solid"
                                className="size-7 text-white/80"
                            />
                        }
                    >
                        <CardCaption>{post.readingTime} min</CardCaption>
                    </Cell>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <CardCaption>
                        {new Intl.DateTimeFormat('ru-RU').format(
                            new Date(post.publishedAt),
                        )}
                    </CardCaption>
                    <CardTitle>{post.name}</CardTitle>
                </div>
                <div className="inline-flex w-auto gap-6">
                    <Likes
                        id={post.uuid}
                        likes={post.likes}
                        refetch={refetch}
                    />
                    <Views id={post.uuid} views={post.views} />
                    <Cell
                        before={
                            <Icon
                                name="common/message-solid"
                                className="size-8 text-white/80 md:size-10"
                            />
                        }
                        fullWidth={false}
                    >
                        <CardCaption>{post.comments}</CardCaption>
                    </Cell>
                </div>
            </CardContent>
        </Card>
    </Link>
);
