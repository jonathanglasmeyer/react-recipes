var webpack = require('webpack'),
    path = require('path');

module.exports = {
  cache: true,
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './app/entry'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules', 'app'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'es6', 'jsx?harmony'] },
      { test: /\.css/, loader: "style-loader!css-loader" },
	    { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
      { test: /\.jpg/, loader: "file-loader" },
      { test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
            loader: "imports?this=>window!exports?window.Modernizr" }
    ]
  },
};
