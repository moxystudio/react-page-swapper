'use strict';

const basePath = process.env.GITHUB_ACTIONS ? '/react-page-swapper' : '';

module.exports = {
    exportPathMap() {
        return {
            '/': { page: '/' },
            '/page2': { page: '/page2' },
            '/page3': { page: '/page3' },
        };
    },
    assetPrefix: `${basePath}/`,
    experimental: {
        basePath,
    },
};
