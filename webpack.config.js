const path = require("path"),
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: {
		vendors: "./src/js/common.js",
		common: "./src/ts/common.ts",
		"main-page": "./src/ts/main-page.ts",
	},
	output: {
		path: path.resolve(__dirname, "./docs/"),
		filename: "js/[name].js",
		// publicPath: "/img/"
		chunkFilename: '[name].js'
	},
	devServer: {
		contentBase: "./docs",
		overlay: true,
	    // open: true,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
				  "presets": [
				    "@babel/preset-env"
				  ]
				},
				// exclude: /\/node_modules\/(?!dom7|ssr-window|swiper)\//,
				exclude: /(node_modules)/,
			},
			{
				test: /\.ts$/,
				loader: "ts-loader",
				// exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				// loader: "css-loader",
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							minimize: true,
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js"
		]
	},
	// optimization: {
	// 	// runtimeChunk: 'single',
 //    	splitChunks: {
	//         cacheGroups: {
	//             vendors: {
	//                 test: /[\\/]node_modules[\\/]|src\/ts\/app.ts/,
	//                 name: 'vendors',
	//                 enforce: true,
	//                 chunks: 'all'
	//             }
	//         }
 //    	}
	// },
	// plugins: [
	// 	new BundleAnalyzerPlugin()
	// ]
}