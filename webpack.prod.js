const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizePlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin      = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[fullhash].js'
    },
    module: {
        rules: [
            {
                test:/\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test:/\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader' ]
            },
            {
                test:/styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]

            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer:[
            new CssMinimizePlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebPack({
            title: 'HtmlWebpack',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[nombre].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[{from:'src/assets/' ,to:'assets/'}]
        })
    ]
}