var webpack = require('webpack'),
    path = require('path');

module.exports = {
  devtool:   'hidden-source-map',
  entry: {
    app: './app/entry.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
        React: 'react',
        "_": 'lodash',
        Actions: 'actions',
        h: 'helpers',
        a: 'animate',
        colors: 'colors'

    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    modulesDirectories: ['bower_components', 'node_modules', 'app', 'web_components'],
    extensions: ['', '.js', '.jsx', '.less', '.es6']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel-loader?stage=0&optional=runtime'},
      { test: /\.es6$/, loader: 'babel-loader?stage=0&optional=runtime' },
      { test: /\.css/, loader: "style-loader!css-loader" },
      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!less-loader'},
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
      { test: /\.svg/, loader: "raw-loader" },
      { test: /\.jpg/, loader: "file-loader" },
      { test: /\.json/, loader: "json-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
    ]
  },
};
