var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(process.env.NODE_ENV)
module.exports = {
	entry:{
		app:['./src/app.es6']
	},
	module: {
    	loaders: [{
		    test: /\.es6$/,
		    exclude: /node_modules/,
		    loader: 'babel-loader',
	    },
	    {
	    	test:/\.css$/,
	    	loader:ExtractTextPlugin.extract('style', 'css')
	    }]
  	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath:'http://localhost:8080/assets/',
    	filename: 'bundle.js'
 	},
 	plugins: [
 		new ExtractTextPlugin('bundle.css'),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
    ]
}