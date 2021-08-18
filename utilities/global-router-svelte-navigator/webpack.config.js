const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const preprocess = require('svelte-preprocess');
const path = require('path');

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
        // entry: {
        //     main: path.join(__dirname, 'src', 'index.js'),
        //     vendor: ['svelte', 'svelte-navigator']
        // },
        output: {
            path: path.join(__dirname, 'lib'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.svelte$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            compilerOptions: {
                                dev: false
                            },
                            emitCss: true,
                            preprocess: preprocess({
                                sourceMap: false
                            })
                        }
                    }
                }
            ]
        }
    }
);