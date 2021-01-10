module.exports = {

  devServer: {
    hot: true,
    open: true
  },

  chainWebpack: config => {
    configureWebpack: {
      module.rules = {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    }
  }
}
