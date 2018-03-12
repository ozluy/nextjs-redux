/* eslint-disable */

const webpack = require('webpack')
const dev = process.env.NODE_ENV !== 'prod'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  webpack: config => {
    if (!dev) {
      config.plugins = config.plugins.concat([
        new webpack.NamedModulesPlugin(),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundleAnalyzerReport.html',
          defaultSizes: 'gzip',
        }),
      ])
    }
    if (dev) {
      config.plugins = config.plugins.concat([new webpack.NamedModulesPlugin()])
    }

    if (!config.resolve) {
      config.resolve = {}
    }

    const modules = ['app']
    config.resolve.modules = config.resolve.modules
      ? config.resolve.modules.concat(modules)
      : modules

    // fixme: IMPORTANT!!! remove following line before launching
    if (dev) {
      config.devtool = 'inline-source-map'
    }
    return config
  },
}
