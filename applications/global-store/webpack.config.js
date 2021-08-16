const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3001
        }
    }
)