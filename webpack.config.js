const path = require('path');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotEnv = require('dotenv-webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js',
	},
	resolve: {
		extensions: ['.js'],
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: './assets', to: 'assets/'},
				{from: './styles', to: 'styles/'},
			],
		}),
		new BundleAnalyzerPlugin(),
		new dotEnv(),
	],
};
