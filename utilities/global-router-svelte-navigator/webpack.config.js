const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const preprocess = require('svelte-preprocess');

module.exports = merge(
    baseConfig,
    {
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