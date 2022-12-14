const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true,
        
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
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebPack({
            title: 'HtmlWebpack',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[{from:'src/assets/' ,to:'assets/'}]
        })
    ]
}