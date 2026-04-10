export const isCyprus = process.env.NEXT_PUBLIC_IS_CYPRUS === 'true';

export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://galaksion.com';

export const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || '';

export const registrationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_URL ||
    'https://ssp-adv.galaksion.com/registration/advertiser';

export const loginUrl =
    process.env.NEXT_PUBLIC_LOGIN_URL || 'https://ssp-adv.galaksion.com/login';

export const publisherRegistrationUrl =
    process.env.NEXT_PUBLIC_PUBLISHER_REGISTRATION_URL ||
    'https://ssp.profiton.com/signup';

export const publisherLoginUrl =
    process.env.NEXT_PUBLIC_PUBLISHER_LOGIN_URL ||
    'https://ssp.profiton.com/login?utm_source=galaksion&utm_content=website';

export const contactEmail = isCyprus
    ? 'info_cy@galaksion.com'
    : 'info@galaksion.com';

export const organizationName = isCyprus
    ? 'Galaksion LTD'
    : 'Galaksion Group SIA';
