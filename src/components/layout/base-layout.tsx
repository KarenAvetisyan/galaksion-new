'use client';

import { PropsWithChildren, useEffect } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { SmoothScroll } from '@components/smooth-scroll';
import { usePathname, useRouter } from 'next/navigation';
import { useUnit } from 'effector-react';
import { attachRouterEv } from '@models/router';
import { pathnameChanged } from '@models/pathname';
import { ScrollTopButton } from './scroll-top-button';

interface BaseLayoutProps extends PropsWithChildren {
    title?: string;
}

export const BaseLayout = ({
    title = 'Galaksion - Advertising network',
    children,
}: BaseLayoutProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [attachRouter, changePathname] = useUnit([
        attachRouterEv,
        pathnameChanged,
    ]);

    useEffect(() => {
        attachRouter(router);
        changePathname(pathname);
    }, [router, attachRouter, pathname, changePathname]);

    return (
        <SmoothScroll>
            <main className="px-3 pb-3 md:px-6 md:pt-6">
                <Header />
                {children}
                <Footer />
            </main>
            <ScrollTopButton />
        </SmoothScroll>
    );
};
