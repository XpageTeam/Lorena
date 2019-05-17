const path = require("path");

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
	}
}