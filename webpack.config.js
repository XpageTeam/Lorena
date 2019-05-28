const path = require("path"),
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ignoredGSAPFiles = ['BezierPlugin', 'DirectionalRotationPlugin', 'RoundPropsPlugin'];

module.exports = {
	entry: {
		base: "./src/js/common.js",
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
				include: ignoredGSAPFiles.map(fileName => path.resolve('node_modules/gsap/' + fileName)),
				loader: 'null-loader',
			},
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
	optimization: {
		// runtimeChunk: 'single',
    	splitChunks: {
	        cacheGroups: {
	            vendors: {
	                test: /(jquery.js|swiper.esm.js|swiper.esm.bundle.js|dom7.modular.js|select2.js|jquery.fancybox.js|jquery.fancybox.css|stringAnimate.js|ssr-window.esm.js)/,
	                name: 'js/vendors',
	                enforce: true,
	                chunks: 'all'
	            },
	            xpage: {
	            	test: /app.ts$/,
	            	name: 'js/xpage',
	                enforce: true,
	                chunks: 'all'
	            }
	        }
    	}
	},
	// plugins: [
	// 	new BundleAnalyzerPlugin()
	// ]
}