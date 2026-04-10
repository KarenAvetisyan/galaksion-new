import { AdFormat } from './types';

export const adFormats: AdFormat[] = [
    {
        key: 'popunder',
        title: 'Popunder',
        shortTitle: 'Pops',
        subTitle:
            'Popunder is one of the most impactful and high-performing ad formats in the industry. It opens in a new browser tab, ensuring visibility without immediate interruption. Triggered by user interaction (such as a click), Popunders are designed to grab attention at just the right moment. This format is available in both desktop and mobile variations, making it universally compatible across devices and browsers.',
        shortDesc:
            'This ad format displays in a new browser tab. Particularly beneficial for newcomers, it serves as an effective solution to overcome banner-blindness.',
        headline: 'Why Choose Popunder Ads?',
        text: 'This format generates the highest traffic volumes on our platform, making it ideal for campaigns that demand scale and visibility. Popunder is impossible to ignore. It delivers promotions by appearing in a separate browser tab, ensuring your ad is seen once the user finishes browsing their initial content. Advertisers rely on this tried-and-true format to drive performance, boost ROI, and ensure their offers are front and center when attention matters most.',
        list: {
            title: 'Key Benefits of Popunder Ads:',
            items: [
                'the highest traffic volumes in Galaksion;',
                'cost-effective format for start in affiliate marketing;',
                'a wide range of targeting options;',
                'help in avoiding banner blindness;',
                'easy integration with a high conversion potential: no creatives or landings needed.',
            ],
        },
        pricingModels: ['sCPM', 'CPM', 'CPA'],
    },
    {
        key: 'native',
        title: 'Native',
        shortTitle: 'Native',
        subTitle:
            'Native ads, also known as teasers, are designed to seamlessly integrate into a website’s content, offering a user-friendly and natural ad experience. These ads match the site’s style, appearing as part of the content rather than as external interruptions. This integration improves click-through rates and increases user engagement by blending with the website’s design.',
        shortDesc:
            'This format seamlessly embeds ads into site content, increasing revenue while maintaining a comfortable user environment.',
        headline: 'What makes Native format stand out?',
        text: 'Native format provides advertisers with the opportunity to align their offers with the content the user is already engaging with, ensuring higher relevance and better performance. Galaksion’s team customizes these ads to fit perfectly with each website’s design, creating an authentic and appealing experience for the user. Additionally, native ads comply with Google’s strict advertising guidelines, making them a safe choice for any site.',
        list: {
            title: 'Native Ads Benefits:',
            items: [
                'seamlessly integrates into the content;',
                'high engagement and click-through rates;',
                'optimized for any device and platform;',
                'designed for a positive user experience;',
                'exclusive creative’s design to naturally adapt to website’s appearance.',
            ],
        },
        pricingModels: ['CPM', 'CPC'],
    },
    {
        key: 'on-page-notification',
        title: 'On-Page Notification',
        shortTitle: 'On Page',
        subTitle:
            'The On-Page Notification format delivers a seamless user experience, appearing directly within the browser window. It’s offering advertisers the opportunity to drive immediate engagement or conversions without disrupting the user’s journey. This format ensures higher visibility and better interaction since it appears when the user is actively on the website, increasing click-through rates significantly.',
        shortDesc:
            'This format looks like a classic push-notification but appears only in the browser window, which brings the user right to the targeted action.',
        headline: 'Why choose On-Page Notifications?',
        text: `On-Page Notifications are designed to bypass browser blocks and function similarly to pop-up messages. By optimizing these notifications to align with the website’s style, we not only increase user trust but also overcome common issues like "banner blindness". Launched in 2020, the On-Page format has already shown to outperform Push in some cases, offering incredible potential for quality leads. It’s your chance to test and succeed with a fresh, powerful ad tool.`,
        list: {
            title: 'Advantages of On-Page Notifications:',
            items: [
                'no user subscription required;',
                'works smoothly across browsers;',
                'optimized for iOS and macOS;',
                'high CTR potential due to user on-site engagement;',
                'Galaksion’s exclusive base of creatives.',
            ],
        },
        pricingModels: ['CPM', 'CPC', 'CPA'],
    },
    {
        key: 'push',
        title: 'Push-Notification',
        shortTitle: 'Push Not',
        subTitle:
            'Push-notifications, or Browser Notifications, are an engaging way to reach users even when they are not actively browsing your website. These messages are sent directly to a user’s device once they’ve opted in, appearing prominently on the screen and encouraging interaction. This format is particularly effective for retargeting and keeping your brand top-of-mind.',
        shortDesc:
            "Also known as Browser Notification, it is the ad unit sent to the user's device after subscription that takes enough space to attract users' attention ideally.",
        headline: 'Why Push-Notifications?',
        text: 'Push-notifications remain one of the most profitable traffic sources, especially when targeting verticals like e-commerce, utilities, dating, and finance. While browser restrictions and audience burnout can affect the format, Galaksion’s clean and high-quality subscriber base ensures you get the best possible results. By optimizing for fresh subscriptions and testing creative variations, you can maximize your ROI with Push-notifications.',
        list: {
            title: 'Key Benefits of Push-Notifications:',
            items: [
                'reaches users even when they’re not actively browsing;',
                'excellent for retargeting and driving conversions;',
                'direct, high-impact messages;',
                'Galaksion’s quality database ensures high performance;',
                'decent price-quality ratio.',
            ],
        },
        pricingModels: ['CPM', 'CPC', 'CPA'],
    },
    {
        key: 'mobile-push',
        title: 'Mobile Push-Up',
        shortTitle: 'Mobile Push-Up',
        subTitle:
            'The Mobile Push-Up format delivers a mobile-friendly notification that mimics push-notifications but without requiring user subscription. These notifications appear at the bottom of the mobile screen, offering a subtle yet highly effective way to engage users and promote offers without overwhelming them. Exclusively for mobile campaigns, Mobile Push-Up ensures a seamless experience across devices, including iOS and Android.',
        shortDesc:
            'This format is similar to Push-Notification but works only on mobile devices and without a subscription request.',
        headline: 'Why Mobile Push-Up?',
        text: 'This format is a game-changer for mobile advertising. Unlike traditional push-notifications that don’t operate on iOS, Mobile Push-Up works across all devices. It’s perfect for mobile-specific verticals like utilities, VPNs, extensions, apps. With no subscription required, it’s an ideal solution for advertisers seeking to maximize their mobile reach with minimal user disruption.',
        list: {
            title: 'Advantages of Mobile Push-Up:',
            items: [
                'no subscription needed;',
                'works on both, iOS and Android devices;',
                'smooth integration into mobile browsing experience;',
                'high visibility without overwhelming the user;',
                'effective boost of top-performing verticals.',
            ],
        },
        pricingModels: ['CPM', 'CPC', 'CPA'],
    },
    {
        key: 'interstitial',
        title: 'Interstitial',
        shortTitle: 'Interstitial',
        subTitle:
            'Interstitial ads provide a full-screen experience, appearing shortly after a user lands on a website. With a compelling message, image, and CTA, Interstitials create a high-impact, immersive ad experience that demands attention. These ads are ideal for promoting offers that require undivided user focus, such as special promotions or new product launches.',
        shortDesc:
            'It is an image with a title and a description that appears a few moments after the website is opened. The full page provides complete immersion in the product and the highest performance.',
        headline: 'Why Interstitial Format?',
        text: 'Interstitial ads are known for their strong performance, particularly in verticals like gaming, utilities, and VPNs. Their full-screen format ensures maximum engagement and conversion, creating an opportunity to reach users with clear, high-visibility messaging. Whether on mobile or desktop, Interstitials make a significant impact.',
        list: {
            title: 'Key Benefits of Interstitial Format:',
            items: [
                'full-screen ads create high-impact engagement;',
                'effective for time-sensitive promotions;',
                'strong performance across mobile and desktop;',
                'works with CPC and CPM pricing models;',
                'extensive variety of targeting options.',
            ],
        },
        pricingModels: ['CPM', 'CPC', 'CPA'],
    },
];
