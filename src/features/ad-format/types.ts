export type AdFormats =
    | 'on-page-notification'
    | 'native'
    | 'push'
    | 'mobile-push'
    | 'interstitial'
    | 'popunder';

export type AdFormat = {
    key: AdFormats;
    title: string;
    shortTitle: string;
    subTitle: string;
    shortDesc: string;
    headline: string;
    text: string;
    list: { title: string; items: string[] };
    pricingModels: string[];
};
