import { Metadata } from 'next';
import { BaseLayout } from '@components/layout';
import { JsonLd } from '@components/json-ld';
import { generateArticleSchema } from '@lib/json-ld';
import { BlogPost } from '@features/blog/components';
import { BlogService } from '@features/blog/api/service';
import { CommentAuthModal } from '@features/comment/components/comment-auth-modal';
import { siteUrl } from '@config/configure';

type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    try {
        const post = await BlogService.getPost(params.slug);

        return {
            title: post.meta.title || post.name,
            description: post.meta.description || post.name,
            ...(post.meta.keywords && { keywords: post.meta.keywords }),
        };
    } catch (error) {
        return {
            title: 'Blog Post',
            description: 'Read our latest blog post',
        };
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    let jsonLdData = null;

    try {
        const post = await BlogService.getPost(params.slug);

        jsonLdData = generateArticleSchema({
            url: `${siteUrl}/${params.slug}`,
            headline: post.meta.title || post.name,
            description: post.meta.description || post.name,
            image: post.imageUrl,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
        });
    } catch (error) {
        console.error('Failed to fetch blog post for JSON-LD:', error);
    }

    return (
        <>
            {jsonLdData && <JsonLd data={jsonLdData} />}
            <BaseLayout>
                <BlogPost slug={params.slug} />
                <CommentAuthModal />
            </BaseLayout>
        </>
    );
}
