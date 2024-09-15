const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src/main.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
		clean: true, // clean the dist folder vefore each build
	},
	// devtool for source map to control the errors
	devtool: 'source-map',
	// settings for dev server on localhost:8080
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3030,
		open: true,
		hot: true,
		compress: true,
		//historyApiFallback: true,
	},
	// watch: true,
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			// extension for older browsers
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		// HtmlWebpackPlugin plugin which create a template (boilerplate) for a index.html strucutre. After add that plugin you can't modify a index.html directly from that file. It is possible using a template
		new HtmlWebpackPlugin({
			title: 'Webpack App',
			filename: 'index.html',
			template: 'src/template.html',
		}),
	],
};
