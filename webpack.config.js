const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
      },
    mode: 'development',
};