var webpack = require("webpack"),
	path = require("path");

module.exports = {
	entry: "./src/twitch.user",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{ test: /\.js/, exclude: /node_modules/, loader: "babel" }
		]
	}
};