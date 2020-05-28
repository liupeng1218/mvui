const path = require('path')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'mvui.min.js',
		path: path.resolve(__dirname, '../lib'),
		library: 'mvui',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		globalObject: 'this'
	},
	module: {
		rules: [{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/ //排除 node_modules 目录
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s[ac]ss$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [require('autoprefixer')()]
							}
						}
					},
					'sass-loader'
				],
				exclude: /node_modules/
			}
		]
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new OptimizeCssPlugin(),
		new MiniCssExtractPlugin({
			filename: 'mvui.min.css',
			chunkFilename: '[id].css',
		}),
	]
}
