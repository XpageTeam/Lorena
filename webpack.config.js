const path = require("path"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		common: "./src/ts/common.ts",
		"main-page": "./src/ts/main-page.ts",
	},
	output: {
		path: path.resolve(__dirname, "./dist/js/"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					// configFileName: "./tsconfig.json"
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							minimize: true,
							sourceMap: true
						}
					}
				]
			},
			// {
			// 	test: /\.sss$/,
			// 	use: [
			// 		{
			// 			loader: "style-loader"
			// 		},
			// 		{
			//         	loader: MiniCssExtractPlugin.loader
			// 		},
			//         {
			//           loader: 'css-loader',
			//           options: { sourceMap: true }
			//         }, {
			//           loader: 'postcss-loader',
			//           options: { 
			//           	sourceMap: true, 
			//           	config: { 
			//           		path: './postcss.config.js' 
			//           	} 
			//           }
			//         }
			//     ]
			// }
		]
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js"
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.css",
		})
	]
}