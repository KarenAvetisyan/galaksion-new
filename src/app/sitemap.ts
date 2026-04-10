import { paths } from '@config/routing';
import { BlogService } from '@features/blog/api/service';
import { adFormats } from '@features/ad-format/constants';
import { advantages } from '@features/advantage/constants';
import { MetadataRoute } from 'next';

const escapeXml = (url: string): string => {
    return url.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&apos;');
};

const getStaticRoutes = (baseUrl: string): MetadataRoute.Sitemap => {
    const pathsValues = Object.values(paths);

    const routes: MetadataRoute.Sitemap = [];

    for (const link of pathsValues) {
        if (typeof link !== 'string') continue;
        if (link === '/') continue;

        routes.push({
            url: escapeXml(`${baseUrl}${link}`),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    return routes;
};

const getAdFormatsRoutes = (baseUrl: string): MetadataRoute.Sitemap => {
    return adFormats.map((format) => ({
        url: escapeXml(`${baseUrl}${paths.adFormats(format.key)}`),
        changeFrequency: 'monthly',
        priority: 0.9,
    }));
};

const getFeaturesRoutes = (baseUrl: string): MetadataRoute.Sitemap => {
    return advantages.map((advantage) => ({
        url: escapeXml(`${baseUrl}${advantage.path}`),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));
};

const getBlogPostsRoutes = async (baseUrl: string): Promise<MetadataRoute.Sitemap> => {
    try {
        const { data: posts } = await BlogService.getPosts();

        return posts.map((post) => ({
            url: escapeXml(`${baseUrl}${paths.blogPost(post.slug)}`),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Failed to fetch blog posts for sitemap:', error);
        return [];
    }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://galaksion.com';

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: escapeXml(baseUrl),
            changeFrequency: 'daily',
            priority: 1.0,
        },
    ];

    return [
        ...baseRoutes,
        ...getStaticRoutes(baseUrl),
        ...getAdFormatsRoutes(baseUrl),
        ...getFeaturesRoutes(baseUrl),
        ...(await getBlogPostsRoutes(baseUrl)),
    ];
}
