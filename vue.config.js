module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Inspiration'
        return args
      })
  },
  publicPath: '/inspiration'
}
