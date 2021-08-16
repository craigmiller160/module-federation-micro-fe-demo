const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const preprocess = require('svelte-preprocess');

const PRODUCTION_ENV = 'production';
const isProd = process.env.NODE_ENV === PRODUCTION_ENV;

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3003,
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
                    test: /\.svelte$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            compilerOptions: {
                                dev: !isProd
                            },
                            emitCss: isProd,
                            hotReload: !isProd,
                            hotOptions: {
                                preserveLocalState: true
                            },
                            preprocess: preprocess({
                                sourceMap: !isProd
                            })
                        }
                    }
                }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'svelteChild1',
                filename: 'remoteEntry.js',
                remotes: {
                    globalStore: 'globalStore@/globalStore/remoteEntry.js'
                },
                exposes: {
                    '.': './src/index.js'
                }
            })
        ]
    }
);