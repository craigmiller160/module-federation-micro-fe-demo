const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

const { dependencies } = require('./package.json');

module.exports = merge(
    baseConfig,
    {
        resolve: {
            extensions: [
                '.js', '.vue', '.json'
            ]
        },
        devServer: {
            port: 3004,
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
        plugins: [
            new VueLoaderPlugin(),
            new ModuleFederationPlugin({
                name: 'vueChild1',
                filename: 'remoteEntry.js',
                remotes: {
                    globalStore: 'globalStore@/globalStore/remoteEntry.js'
                },
                exposes: {
                    '.': './src/bootstrap.js'
                },
                shared: {
                    ...dependencies
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                }
            ]
        }
    }
);
