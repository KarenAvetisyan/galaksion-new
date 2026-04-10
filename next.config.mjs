import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config = {
    // Базовые настройки
    poweredByHeader: false,
    generateEtags: false,

    // Компилятор
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
        reactRemoveProperties: process.env.NODE_ENV === 'production',
    },

    // Изображения
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.galaksion.com',
                pathname: '/**',
            },
        ],
    },

    // Сжатие
    compress: true,

    // Экспериментальные фичи
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    // Webpack конфигурация
    webpack: (config, { dev, isServer }) => {
        // Дополнительные оптимизации только для production клиента
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        // React и основные зависимости
                        react: {
                            name: 'react',
                            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                            chunks: 'all',
                            priority: 40,
                            reuseExistingChunk: true,
                        },
                        // UI библиотеки
                        ui: {
                            name: 'ui',
                            test: /[\\/]node_modules[\\/](@headlessui|@heroicons)[\\/]/,
                            chunks: 'all',
                            priority: 30,
                        },
                        // Three.js
                        three: {
                            name: 'three',
                            test: /[\\/]node_modules[\\/](three|@types\/three)[\\/]/,
                            chunks: 'all',
                            priority: 25,
                        },
                        // Next.js
                        next: {
                            name: 'next',
                            test: /[\\/]node_modules[\\/](next)[\\/]/,
                            chunks: 'all',
                            priority: 20,
                        },
                        // Утилиты
                        utils: {
                            name: 'utils',
                            test: /[\\/]node_modules[\\/](lodash|date-fns|axios)[\\/]/,
                            chunks: 'all',
                            priority: 15,
                        },
                        // Общий vendor
                        lib: {
                            name: 'lib',
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'all',
                            priority: 10,
                            reuseExistingChunk: true,
                        },
                    },
                },
                // Минимизация
                minimize: true,
            };

            // Плагины для production
            if (!config.plugins) {
                config.plugins = [];
            }
        }

        // Общие оптимизации для dev и prod
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
            },
        };

        return config;
    },
};

const configWithPlugins =
    process.env.ANALYZE === 'true'
        ? withBundleAnalyzer({ enabled: true })(config)
        : config;

export default configWithPlugins;
