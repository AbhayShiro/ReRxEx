'use strict';

/*************************************
 * webpack.config.js
 * configuration file for webpack module loader
 * 1. entry:    main key/source file to generate bundle
 * 2. output:   destination file
 * 3. watch:    watch file for any change occurred
 * 4. module:   specify module loader to perform which activity
 * 5. plugins:  add on plugins alongwith module loading
 * *************************************/
 
// load dependancy modules
const webpack = require('webpack');
const path = require('path');

// It moves every require() entry chunks into a separate css output file.
// So your styles are no longer inlined into the javascript, but separate in a css bundle file.
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// client entry file to generate bundle
var entry = [path.resolve(__dirname, 'app/index.js')];

// name of bundle and target folder
var output = {
  path: path.resolve(__dirname, 'public/dist'),
  filename: 'bundle-[name].js',
  publicPath: 'dist/'
};

// loaders basically transform/preprocess file in required format
// its kind of "tasks" which parses es6 to es5, jsx etc using specified loader.
var modules = {
  loaders: [
    { test: /\.json$/, loader: 'json-loader' },   
    { test: /\.js$/, loader: ['babel-loader'], exclude: /node_modules/, query: { cacheDirectory: 'babel_cache', presets: ['react', 'es2015'] } },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader') },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
    { test: /\.(woff|woff2)$/, loader: 'file-loader' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
  ]
};

// webpack plugins helpful along with loaders
var plugins = [
  new ExtractTextPlugin('bundle.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ // minimize/compress all js chunks
    compress: { warnings: false },
    mangle: false,
    sourcemap: false,
    beautify: false,
    dead_code: true
  })
]

// finally export all variables to webpack
module.exports = {  
  entry: entry,
  output: output,
  stats: { colors: true },
  watch: true,
  module: modules,
  plugins: plugins
};
