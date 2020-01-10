module.exports = {
  css: {
    // sourceMap: true, //  方便调试样式。  会影响编译速度，平时要关闭
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/style/theme.scss\';'
      }
    }
  },
  devServer: {
    port: '8800', // 端口号
    open: true // 自动启动浏览器
  },
  // 配置保存自动修复eslint错误(在没有做任何配置时，此时，如果出现不符合eslint规则的代码，会出现以下1 error potentially fixable with the '--fix' option.报错:)
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  lintOnSave: true, // 关闭eslint
  outputDir: process.env.NODE_ENV === 'development' ? 'alpha' : 'dist'
}