const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const preprocess = require('svelte-preprocess');
const path = require('path');

module.exports = merge(
    baseConfig,
    {
        entry: {
            index: path.join(__dirname, 'src', 'index.js'),
            vendor: ['svelte', 'svelte-navigator']
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