var webpack = require('webpack'),
    path = require('path');

module.exports = {
  devtool: 'eval',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        React: 'react',
        "_": 'lodash',
        Actions: 'actions',
        h: 'helpers',
        a: 'animate',
        colors: 'colors'

    })
  ],
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules', 'app', 'web_components'],
    extensions: ['', '.js', '.jsx', '.less', '.es6']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders:
        ['react-hot', 'babel-loader?stage=0&optional=runtime']},
      { test: /\.es6$/, loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'] },
      { test: /\.css/, loader: "style-loader!css-loader" },
      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader'},
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
      { test: /\.svg/, loader: "raw-loader" },
      { test: /\.jpg/, loader: "file-loader" },
      { test: /\.json/, loader: "json-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/, loader: "imports?this=>window!exports?window.Modernizr" }
    ]
  },
};
