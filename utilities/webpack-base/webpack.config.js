const path = require('path');
const fs = require('fs');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PRODUCTION_ENV = 'production';

const indexHtmlPath = path.join(process.cwd(), 'src', 'index.html');
const indexHtmlExists = fs.existsSync(indexHtmlPath);

// TODO need a leading / before assets, but that'll break micro-frontend loading. probably need to figure out public path to make that work.

const baseConfig = {
    mode: process.env.NODE_ENV,
    entry: path.join(process.cwd(), 'src', 'index.js'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'assets/js/[name].[contenthash].js'
    },
    resolve: {
        modules: [
            path.join(process.cwd(), 'src'),
            path.join(process.cwd(), 'node_modules')
        ]
    },
    experiments: {
        topLevelAwait: true
    },
    devtool: 'eval-source-map',
    optimization: {
        usedExports: process.env.NODE_ENV === PRODUCTION_ENV,
        minimize: process.env.NODE_ENV === PRODUCTION_ENV,
        sideEffects: false,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    process.env.NODE_ENV === PRODUCTION_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ],
                sideEffects: true
            },
            {
                test: /\.module\.css$/,
                use: [
                    process.env.NODE_ENV === PRODUCTION_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [
                    process.env.NODE_ENV === PRODUCTION_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== PRODUCTION_ENV
                        }
                    }
                ],
                sideEffects: true
            },
            {
                test: /\.module\.scss$/,
                use: [
                    process.env.NODE_ENV === PRODUCTION_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== PRODUCTION_ENV
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        // contentBase: path.join(process.cwd(), 'src'),
        hot: true,
        historyApiFallback: {
            index: '/'
        }
    }
};

const htmlConfig = {
    plugins: [
        new HtmlWebpackPlugin({
            template: indexHtmlPath
        })
    ]
};

const analyzer = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};

const configs = [baseConfig];
if (indexHtmlExists) {
    configs.push(htmlConfig);
}

if (process.env.ANALYZE === 'true') {
    configs.push(analyzer);
}

module.exports = merge(configs);
