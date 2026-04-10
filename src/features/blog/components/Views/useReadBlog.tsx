'use client';

import { useEffect } from 'react';
import { BlogService } from '@features/blog/api/service';

interface UseReadBlogProps {
    id: string;
}

const storageKey = 'gartls';

export const readSeconds = 15;

let globalRequestSent = false;

const useReadBlog = ({ id }: UseReadBlogProps) => {
    useEffect(() => {
        if (!globalRequestSent) {
            globalRequestSent = true;
            let timeoutId: ReturnType<typeof setTimeout> | null = null;

            const readArticle = () => {
                timeoutId = setTimeout(() => {
                    BlogService.postView(id).then(() => {
                        const raw = localStorage.getItem(storageKey);
                        let existing;

                        try {
                            if (raw) {
                                existing = JSON.parse(raw);
                            }
                        } catch {
                            existing = {};
                        }

                        localStorage.setItem(
                            storageKey,
                            JSON.stringify({
                                ...existing,
                                [id]: true,
                            }),
                        );
                    });
                }, readSeconds * 1000);
            };

            const storageArticlesViewed = localStorage.getItem(storageKey);

            if (!storageArticlesViewed) {
                readArticle();
            } else {
                try {
                    const actions = JSON.parse(storageArticlesViewed);

                    if (!actions[id]) {
                        readArticle();
                    }
                } catch {
                    readArticle();
                }
            }

            return () => {
                if (timeoutId) clearTimeout(timeoutId);
                globalRequestSent = false;
            };
        }
    }, []);
};

export default useReadBlog;
