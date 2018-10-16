const webpack = require('webpack');

require('dotenv').config();

module.exports = {
    distDir: '../build',
    serverRuntimeConfig: {
        secret: process.env.SECRET
    },
    publicRuntimeConfig: {
        SENTRY_DSN: process.env.SENTRY_DSN
    },
    webpack: config => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(['BLOGGER_URL', 'BLOGGER_API_KEY', 'SENTRY_DSN'])
        );
        return config;
    }
}