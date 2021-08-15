const baseConfig = require('@mfdemo/webpack-base');
const merge = require('webpack-merge');

module.exports = merge(
    baseConfig,
    {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
);