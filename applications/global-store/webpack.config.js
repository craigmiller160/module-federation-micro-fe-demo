const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3001
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'globalStore',
                filename: 'remoteEntry.js',
                exposes: {
                    '.': './src/index.js'
                }
            })
        ]
    }
)