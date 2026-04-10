import { isCyprus } from '@config/configure';
import React from 'react';
import { cyprusContacts, galaksionContacts } from './constants';

const FooterContacts = () => {
    const contacts = isCyprus ? cyprusContacts : galaksionContacts;

    return (
        <div className="flex flex-col gap-4">
            <div
                className="text-base md:text-xl md:leading-6 font-base md:font-base"
                dangerouslySetInnerHTML={{
                    __html: contacts.content,
                }}
            />
            <a
                href={`mailto:${contacts.email}`}
                className="bg-primary w-fit rounded-full p-4 text-base md:mb-6 md:bg-black md:text-xl"
            >
                {contacts.email}
            </a>
        </div>
    );
};

export default FooterContacts;
