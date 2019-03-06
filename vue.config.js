const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  publicPath: '/pvc/',
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new Visualizer({ filename: './statistics.html' })
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  transpileDependencies: [
    // can be string or regex
    '@philly/vue-comps'
  ]
}
