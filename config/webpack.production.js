const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].[hash].js'
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'post',
                use: {
                    loader: WebpackObfuscator.loader,
                    options: {
                        reservedStrings: [ '\s*' ],
                        rotateStringArray: true
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new WebpackObfuscator({rotateStringArray: true, reservedStrings: [ '\s*' ]}, [])
    ],
};