const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('./package.json');
const shareDeps = {};
if (process.env.SHARE_DEPS === 'true') {
    shareDeps.shared = {
        ...(dependencies || {})
    };
}

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3000,
            proxy: {
                '/reactChild1': {
                    target: 'http://localhost:3002',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/reactChild1': ''
                    }
                },
                '/svelteChild1': {
                    target: 'http://localhost:3003',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/svelteChild1': ''
                    }
                },
                '/vueChild1': {
                    target: 'http://localhost:3004',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/vueChild1': ''
                    }
                },
                '/globalStore': {
                    target: 'http://localhost:3001',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/globalStore': ''
                    }
                }
            }
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'vanillaParent',
                filename: 'remoteEntry.js',
                remotes: {
                    reactChild1: 'reactChild1@/reactChild1/remoteEntry.js',
                    svelteChild1: 'svelteChild1@/svelteChild1/remoteEntry.js',
                    vueChild1: 'vueChild1@/vueChild1/remoteEntry.js'
                },
                ...shareDeps
            })
        ]
    }
);
