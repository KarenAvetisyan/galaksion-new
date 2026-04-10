const getConfigurations = () => [
    {
        name: 'galaksion',
        isCyprus: {
            local: false,
            galaksion: false,
            cyprus: true,
        },
        siteUrl: {
            local: 'http://localhost:3000',
            galaksion: 'https://galaksion.com',
            cyprus: 'https://galaksion.online',
        },
        recaptchaKey: {
            local: '6Lf9LwIlAAAAAGQi7_inlz0p9d72127l0KuyCxAo',
            galaksion: '6LcbWwclAAAAAB4Nxh7cz8yb7ujfqMYslinB1QP5',
            cyprus: '6LcaXQclAAAAAOOhSXg590RK9JakziQtx_g5TAsm',
        },
        registrationUrl: {
            local: 'https://ssp-adv.galaksion.com/registration/advertiser',
            galaksion: 'https://ssp-adv.galaksion.com/registration/advertiser',
            cyprus: 'https://ssp-adv.galaksion.online/registration/advertiser',
        },
        loginUrl: {
            local: 'https://ssp-adv.galaksion.com/login',
            galaksion: 'https://ssp-adv.galaksion.com/login',
            cyprus: 'https://ssp-adv.galaksion.online/login',
        },
        publisherRegistrationUrl: {
            local: 'https://profiton.com',
            galaksion: 'https://profiton.com',
            cyprus: 'https://profiton.com',
        },
        publisherLoginUrl: {
            local: 'https://ssp.profiton.com/login?utm_source=galaksion&utm_content=website',
            galaksion:
                'https://ssp.profiton.com/login?utm_source=galaksion&utm_content=website',
            cyprus: 'https://ssp.profiton.com/login?utm_source=galaksion&utm_content=website',
        },
        contactEmail: {
            local: 'info@galaksion.com',
            galaksion: 'info@galaksion.com',
            cyprus: 'info_cy@galaksion.com',
        },
    },
];

module.exports = { getConfigurations };
