module.exports = {
	module:	{
		loaders: [
			{ test: /\.png$/, loader: 'file-loader' },
			{ test: /\.jpg$/, loader: 'file-loader' },
			{ test: /\.svg/, loader: 'file-loader' },
			{ test: /\.ttf/, loader: 'file-loader' },
			{ test: /\.woff/, loader: 'file-loader' },
			{ test: /\.eot/, loader: 'file-loader' },
			{ test: /\.css$/, loader: '!css!autoprefixer' },
			{ test: /\.less$/, loader: '!css!autoprefixer!less' },
			{ test: /\.jade$/, loader: 'html?removeRedundantAttributes=false!jade-html' },
			{ test: /\.html$/, loader: 'html?removeRedundantAttributes=false' }
		]
	},
	devtool: 'source-map',
	debug: true,
	resolve: {
		alias: {
			// So it turns out a bad dedupe can make a module load more than once.
			// This is to prevent ngDialog from using its angular, and instead use ours
			angular: __dirname + '/node_modules/angular/index.js',
		}
	},
	entry: { 'main.bundle.js': './index.js' },
	output: { filename: '[name]', path: '/' },
	context: process.cwd() + '/src/',
	devServer: {
		host: 'localhost',
		publicPath: '/',
		outputPath: '/',
		filename: 'main.bundle.js',
		watchOptions: undefined,
		watchDelay: undefined,
		hot: true,
		contentBase: process.cwd() + '/src',
		stats: {
			cached: false,
			cachedAssets: false,
			colors: true
		}
	}
};
