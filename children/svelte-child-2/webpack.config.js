const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const preprocess = require('svelte-preprocess');
const path = require('path');

const { dependencies } = require('./package.json');
const shareDeps = {};
if (process.env.SHARE_DEPS === 'true') {
    shareDeps.shared = {
        ...(dependencies || {}),
        '@mfdemo/create-web-component': {
            singleton: true
        }
    };
}

const PRODUCTION_ENV = 'production';
const isProd = process.env.NODE_ENV === PRODUCTION_ENV;

module.exports = merge(
    baseConfig,
    {
        resolve: {
            alias: {
                svelte: path.join(__dirname, 'node_modules', 'svelte')
            },
            extensions: [
                '.mjs', '.js', '.svelte'
            ],
            mainFields: [
                'svelte', 'browser', 'module', 'main'
            ]
        },
        devServer: {
            port: 3006,
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
                name: 'svelteChild2',
                filename: 'remoteEntry.js',
                remotes: {
                    globalStore: 'globalStore@/globalStore/remoteEntry.js'
                },
                exposes: {
                    '.': './src/bootstrap.js'
                },
                ...shareDeps
            })
        ]
    }
);
