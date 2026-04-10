const path = require('path');
const { writeFile } = require('./utils');
const { getConfigurations } = require('./configurations');

const env = process.env.NODE_ENV || 'galaksion';

const configure = async ({
    isCyprus,
    siteUrl,
    recaptchaKey,
    registrationUrl,
    loginUrl,
    publisherRegistrationUrl,
    publisherLoginUrl,
    contactEmail,
}) => {
    console.info(`configuring for ${env} environment...`);

    const envContent = [
        `NEXT_PUBLIC_IS_CYPRUS=${isCyprus[env]}`,
        `NEXT_PUBLIC_SITE_URL=${siteUrl[env]}`,
        `NEXT_PUBLIC_RECAPTCHA_KEY=${recaptchaKey[env]}`,
        `NEXT_PUBLIC_REGISTRATION_URL=${registrationUrl[env]}`,
        `NEXT_PUBLIC_LOGIN_URL=${loginUrl[env]}`,
        `NEXT_PUBLIC_PUBLISHER_REGISTRATION_URL=${publisherRegistrationUrl[env]}`,
        `NEXT_PUBLIC_PUBLISHER_LOGIN_URL=${publisherLoginUrl[env]}`,
        `NEXT_PUBLIC_CONTACT_EMAIL=${contactEmail[env]}`,
    ].join('\n');

    await writeFile(
        path.resolve(__dirname, '..', '.env.local'),
        envContent + '\n',
        'utf8',
    );
};

Promise.all(getConfigurations().map(configure))
    .then(() => console.log('.env.local created'))
    .catch(console.error);
