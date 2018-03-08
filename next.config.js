/* eslint-env node */

const webpack = require('webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins.concat([new webpack.NamedModulesPlugin()])
    if (!config.resolve) {
      config.resolve = {}
    }

    const modules = ['app']
    config.resolve.modules = config.resolve.modules
      ? config.resolve.modules.concat(modules)
      : modules

    // fixme: IMPORTANT!!! remove following line before launching
    config.devtool = 'inline-source-map'

    return config
  },
}
