const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('./package.json');

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3002,
            proxy: {
                '/globalStore': {
                    target: 'http://localhost:3001',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/globalStore': ''
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'reactChild1',
                filename: 'remoteEntry.js',
                remotes: {
                    globalStore: 'globalStore@/globalStore/remoteEntry.js'
                },
                exposes: {
                    '.': './src/index.js'
                },
                shared: {
                    ...dependencies,
                    'core-js': {
                        // requiredVersion: dependencies['core-js'],
                        singleton: true
                    },
                    'regenerator-runtime': {
                        // requiredVersion: dependencies['regenerator-runtime'],
                        singleton: true
                    }
                }
            })
        ]
    }
);
