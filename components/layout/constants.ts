import { ACHIEVEMENTS_SECTION_ID } from '@features/home/constants';
import { HeaderNavItem } from './types';
import { advantages } from '@features/advantage/constants';
import { adFormats } from '@features/ad-format/constants';
import { paths } from '@config/routing';
import { registrationUrl, loginUrl, publisherRegistrationUrl, publisherLoginUrl } from '@config/configure';

export const headerNavItems: HeaderNavItem[] = [
    {
        title: 'Achievements',
        path: `/#${ACHIEVEMENTS_SECTION_ID}`,
        // sectionId: ACHIEVEMENTS_SECTION_ID,
        items: [],
    },
    {
        title: 'Features',
        items: advantages.map((a) => ({
            title: a.title,
            path: paths.features(a.key),
        })),
    },
    {
        title: 'Ad Formats',
        items: adFormats.map((a) => ({
            title: a.title,
            path: paths.adFormats(a.key),
        })),
    },
    {
        title: 'Knowledge Base',
        items: [
            {
                title: 'Blog',
                desc: 'Advertising network to monetize your offers',
                path: paths.blog,
            },
            {
                title: 'Dictionary',
                desc: 'Our Dictionary offers clear definitions of key digital marketing terms',
                path: paths.dictionary,
            },
            {
                title: 'Media Partners',
                desc: 'Success through synergy: joining forces with trusted industry partners',
                path: paths.partners,
            },
        ],
    },
    {
        title: 'About Galaksion',
        path: paths.about,
        items: [],
    },
];

export const signInVariants = [
    {
        title: 'As a publisher',
        href: publisherRegistrationUrl,
    },
    {
        title: 'As an advertiser',
        href: registrationUrl,
    },
];

export const loginVariants = [
    {
        title: 'As a publisher',
        href: publisherLoginUrl,
    },
    {
        title: 'As an advertiser',
        href: loginUrl,
    },
];

export const galaksionContacts = {
    content: `<strong>Galaksion Group SIA</strong>
          <br />
          Brivibas iela 57-16,
          <br />
          LV-1010, Riga, Latvia;`,
    email: 'info@galaksion.com',
};

export const cyprusContacts = {
    content: `<strong>Galaksion LTD</strong>
                <br />
                HE 435214
                <br/>
                Omirou 20, 3rd Floor, Office 301,
                <br />
                1097 Nicosia, Cyprus`,
    email: 'info_cy@galaksion.com',
};
