const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION_ENV = 'production';

module.exports = {
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
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        sourceMap: process.env.NODE_ENV !== PRODUCTION_ENV
                    }
                ]
            },
            {
                test: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        sourceMap: process.env.NODE_ENV !== PRODUCTION_ENV
                    }
                ]
            }
        ]
    }
};