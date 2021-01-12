const path = require('path')

module.exports = {
  devServer: {
    hot: true,
    open: true
  },

  chainWebpack: config => {
    configureWebpack: {
      module.rules = [{
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }]
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/global.sass'),
        path.resolve(__dirname, './src/styles/smart-grid.sass'),
        path.resolve(__dirname, './src/styles/mixins.sass')
      ]
    }
  }
};
