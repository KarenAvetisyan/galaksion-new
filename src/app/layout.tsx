import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { PreloadResources } from '@components/preload-resources';
import { JsonLd } from '@components/json-ld';
import { generateOrganizationSchema } from '@lib/json-ld';
import { AdblockScript } from '@components/modals/adblock-modal';
import { Providers } from './providers';

import '@styles/main.css';
import '@styles/animations.css';

export const metadata: Metadata = {
    title: 'Galaksion',
    description:
        'Galaksion is an international advertising network delivering over 50 billion monthly impressions to help our partners achieve exceptional growth',
    icons: {
        icon: '/favicon.png',
    },
};

const DMSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <PreloadResources />
                <style
                    dangerouslySetInnerHTML={{
                        __html: '#app{opacity:0}',
                    }}
                />
            </head>
            <Script id="gtm" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MVRVL6Z');
        `}
            </Script>
            <body className={DMSans.className}>
                <JsonLd data={generateOrganizationSchema()} />
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MVRVL6Z"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <div id="app">
                    <Providers>{children}</Providers>
                </div>
                <AdblockScript />
            </body>
        </html>
    );
}
