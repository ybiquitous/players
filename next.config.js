// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
    }))
    return config
  },
}
