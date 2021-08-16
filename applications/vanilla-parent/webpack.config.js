const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
                }
            }
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'vanillaParent',
                filename: 'remoteEntry.js',
                remotes: {
                    reactChild1: 'reactChild1@/reactChild1/remoteEntry.js'
                }
            })
        ]
    }
);