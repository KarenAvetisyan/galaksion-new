'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardBadge, CardCaption, CardContent } from '@components/ui/card';
import { Cell } from '@components/ui/cell';
import { Icon } from '@components/ui/icon';
import { Headline, Text, Title } from '@components/typography';
import { StickyBar } from '@components/ui/sticky-bar';
import Likes from '../Likes';
import Views from '../Views';
import {
    DropdownMenu,
    DropdownMenuButton,
    DropdownMenuItem,
    DropdownMenuItems,
} from '@components/ui/dropdown-menu';
import { ButtonCopy } from '@components/ui/button-copy';
import { paths } from '@config/routing';
import { siteUrl } from '@config/configure';
import {
    FACEBOOK_LINK,
    LINKEDIN_LINK,
    TELEGRAM_LINK,
    X_LINK,
} from '@features/feedback/constants';
import {
    BlogPopularPostList,
    BlogPostComments,
} from '@features/blog/components';
import { useBlogPost } from '@features/blog/hooks/use-blog-post';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { Skeleton } from '@components/ui/skeleton';
import { BlogPostCardSkeleton } from '@features/blog/components/blog-post-card';

interface BlogPostProps {
    slug: string;
}

export const BlogPost = ({ slug }: BlogPostProps) => {
    const { post, isLoading, refetch, error } = useBlogPost(slug);

    if (error) {
        notFound();
    }

    if (isLoading || !post) {
        return (
            <>
                <Breadcrumb>
                    <BreadcrumbList>
                        <Skeleton className="h-7 w-14" />
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Skeleton className="h-7 w-55" />
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mb-6 grid grid-cols-12">
                    <div className="col-span-full mb-6 flex flex-col gap-8 md:col-[1/span_8]">
                        <Skeleton className="h-52 w-full rounded-sm min-h-[504px] max-h-[504px]" />
                        <Skeleton className="h-7 w-35" />
                        <Skeleton className="h-7 w-145" />
                        <Skeleton className="h-7 w-205" />
                    </div>
                    <div className="order-4 col-span-full mb-6 md:order-none md:col-[10/span_3] md:mb-0">
                        <Headline className="mb-3">Featured News</Headline>
                        {Array.from({ length: 2 }).map((_, i) => (
                            <BlogPostCardSkeleton
                                key={`blog-popular-posts-skeleton${i}`}
                                withImages
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbLink href={paths.blog}>Blog</BreadcrumbLink>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>{post?.name}</BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mb-6 grid grid-cols-12">
                <div className="col-span-full mb-6 flex flex-col gap-8 md:col-[1/span_8]">
                    {!!post?.imageUrl.length && (
                        <Image
                            src={post.imageUrl}
                            alt={post?.name ?? ''}
                            quality={80}
                            width="0"
                            height="0"
                            sizes="100vw"
                            className="h-auto w-full rounded-md"
                        />
                    )}
                    <div className="flex flex-row items-center gap-3">
                        {post!.tags.map((it) => (
                            <CardBadge key={it}>{it}</CardBadge>
                        ))}
                        <Cell
                            before={
                                <Icon
                                    name="common/clock-solid"
                                    className="size-7 text-white/80"
                                />
                            }
                        >
                            <CardCaption>{post!.readingTime} min</CardCaption>
                        </Cell>
                        <Likes
                            id={post.uuid}
                            likes={post.likes}
                            refetch={refetch}
                        />
                    </div>
                    <div>
                        <Title className="mb-6">{post?.name}</Title>
                        <Text
                            muted
                            className="postBody"
                            dangerouslySetInnerHTML={{
                                __html: post?.content ?? '',
                            }}
                        />
                    </div>
                    <StickyBar
                        position="bottom"
                        stickyClassName="group md:hidden"
                    >
                        <div className="flex flex-row justify-around gap-5 md:justify-center md:gap-14">
                            <Likes
                                id={post.uuid}
                                likes={post.likes}
                                refetch={refetch}
                            />
                            <Views id={post.uuid} views={post.views} />
                            <DropdownMenu>
                                <DropdownMenuButton>
                                    <Icon
                                        name="common/share"
                                        className="size-7 text-white/80 group-data-sticky:size-6"
                                    />
                                </DropdownMenuButton>
                                <DropdownMenuItems
                                    anchor="top"
                                    className="rounded-md"
                                >
                                    <DropdownMenuItem
                                        as={ButtonCopy}
                                        variant="ghost"
                                        text={`${siteUrl}${paths.blogPost(slug)}`}
                                        className="h-auto justify-start rounded-none font-normal md:h-auto md:rounded-none"
                                    >
                                        <Icon name="common/link" />
                                        Copy link
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        as="a"
                                        href={FACEBOOK_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="social/facebook" />
                                        Facebook
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        as="a"
                                        href={TELEGRAM_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="social/telegram" />
                                        Telegram
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        as="a"
                                        href={X_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="social/twitter" />
                                        Twitter
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        as="a"
                                        href={LINKEDIN_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon name="social/linkedIn" />
                                        Linked In
                                    </DropdownMenuItem>
                                </DropdownMenuItems>
                            </DropdownMenu>
                        </div>
                    </StickyBar>

                    <Card variant="secondary">
                        <CardContent>
                            <BlogPostComments
                                comments={post?.comments}
                                uuid={post?.uuid}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className="order-4 col-span-full mb-6 md:order-none md:col-[10/span_3] md:mb-0">
                    <Headline className="mb-3">Featured News</Headline>
                    <BlogPopularPostList />
                </div>
            </div>
        </>
    );
};
