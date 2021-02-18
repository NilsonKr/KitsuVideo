const path = require('path')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')


const isAnalyze = process.argv.includes('--analyze')

const plugins =[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        filename: 'index.html'
    })
]

if(isAnalyze){
    plugins.push(new WebpackBundleAnalyzer())
}


module.exports = {
    entry: path.resolve(__dirname, 'src' , 'main.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins,
}