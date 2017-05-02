/**
 * Created by intelligrape on 25/4/17.
 */

const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        port: 3004,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;