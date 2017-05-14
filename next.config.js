// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')

module.exports = {
  webpack(config) {
    // NOTE: workaround for build error (https://github.com/zeit/next.js/issues/1877)
    if (config.resolve.alias) {
      /* eslint-disable */
      delete config.resolve.alias['react']
      delete config.resolve.alias['react-dom']
      /* eslint-enable */
    }

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
    }))
    return config
  },
}
