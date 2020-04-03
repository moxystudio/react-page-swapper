'use strict';

const basePath = process.env.GITHUB_ACTIONS ? '/react-page-swapper' : '';

module.exports = {
    exportPathMap() {
        return {
            '/': { page: '/' },
            '/dummy': { page: '/dummy' },
        };
    },
    assetPrefix: `${basePath}/`,
    experimental: {
        basePath,
    },
};
