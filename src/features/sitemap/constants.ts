import { adFormats } from "@features/ad-format/constants";
import { advantages } from "@features/advantage/constants";
import { paths } from '@config/routing';
import { SiteSection } from "./types";

export const sections: SiteSection[] = [
        {
            title: 'Main Pages',
            links: [
                { title: 'Home', path: paths.home },
                { title: 'About Galaksion', path: paths.about },
                { title: 'Achievements', path: paths.achievements },
            ],
        },
        {
            title: 'Features',
            links: advantages.map(advantage => {
                let title = 'Feature';
                if (typeof advantage.title === 'string') {
                    title = advantage.title.replace(/\n/g, ' ');
                }
                else if (advantage.title && typeof advantage.title === 'object' && 'props' in advantage.title) {
                    const children = advantage.title.props?.children;
                    if (Array.isArray(children)) {
                        title = children
                            .filter(child => typeof child === 'string')
                            .join(' ')
                            .trim();
                    }
                }
                return {
                    title,
                    path: advantage.path,
                };
            }),
        },
        {
            title: 'Ad Formats',
            links: adFormats.map(format => ({
                title: format.title,
                path: paths.adFormats(format.key),
            })),
        },
        {
            title: 'Knowledge Base',
            links: [
                { title: 'Blog', path: paths.blog },
                { title: 'Dictionary', path: paths.dictionary },
                { title: 'Media Partners', path: paths.partners },
            ],
        },
        {
            title: 'Legal Pages',
            links: [
                { title: 'Privacy Policy', path: paths.privacyPolicy },
                { title: 'Sanction Policy', path: paths.sanctionPolicy },
                { title: 'Cookies Policy', path: paths.cookiesPolicy },
                { title: 'Data Protection', path: paths.dataProtection },
                { title: 'Advertisers Terms', path: paths.advertisersTerms },
            ],
        },
    ];