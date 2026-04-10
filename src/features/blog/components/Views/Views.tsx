'use client';

import { Icon } from '@components/ui/icon';
import { CardCaption } from '@components/ui/card';
import { Cell } from '@components/ui/cell';
import useReadBlog from './useReadBlog';

interface ViewsProps {
    id: string;
    views: number;
}

const Views = ({ id, views }: ViewsProps) => {
    useReadBlog({ id });

    return (
        <Cell
            before={
                <Icon
                    name="common/eye-solid"
                    className="size-8 text-white/80 md:size-10"
                />
            }
            fullWidth={false}
        >
            <CardCaption>{views}</CardCaption>
        </Cell>
    );
};

export default Views;
