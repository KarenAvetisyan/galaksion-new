import { BaseLayout } from '@components/layout';
import { JsonLd } from '@components/json-ld';
import { generateBlogPageSchema } from '@lib/json-ld';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from '@components/ui/breadcrumb';
import {
    BlogDigest,
    BlogPostList,
    BlogSearchMobile,
    BlogSidebar,
    BlogTagList,
} from '@features/blog/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Case studies, pro tips, and guides to help you master Galaksion, optimize campaigns, and achieve higher ROI.',
};

export default function BlogPage() {
    return (
        <>
            <JsonLd data={generateBlogPageSchema()} />
            <BaseLayout>
                <div className="relative flex flex-row items-center justify-between">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>Blog</BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <BlogSearchMobile />
                </div>
                <div className="mb-6 grid grid-cols-12 items-start">
                    <div className="col-span-full mb-6 grid gap-y-6 md:col-[1/span_8]">
                        <BlogDigest />
                        <BlogTagList />
                        <BlogPostList />
                    </div>
                    <div className="col-span-full grid gap-y-6 md:col-[10/span_3]">
                        <BlogSidebar />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}
