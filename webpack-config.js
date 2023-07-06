const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const distPath = resolve(__dirname + '/dist');
const distDataPath = resolve(distPath + '/data');

module.exports = {
    mode: 'development',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    entry: './app.js',
    output: { 
        path: distPath,
        filename: 'application.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader', 
        }],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [distPath],
          }),
        new CopyPlugin({
            patterns: [
                { from: './data/**/*', to: distDataPath },
            ],
        }),
    ],
};