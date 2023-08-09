const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const distPath = resolve(__dirname + '/dist');
const distDataPath = resolve(distPath + '/data');

module.exports = {
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
                { from: './config/*', to: distPath },
                { from: './data/**/*', to: distDataPath },
                { from: './package.json', to: distPath},
                { from: './public/**/*', to: distPath},
            ],
        }),
    ],
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    mode: 'development',
};