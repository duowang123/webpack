const path = require('path')
// html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// css分离
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 模式
  mode: 'production',
  // 入口文件
  entry: {
    'app': './src/app.js'
  },
  output: {
    // 打包文件地址
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件名
    filename: '[name].[chunkhash].js'
  },
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
  // chainWebpack: config => {
  //   config.module
  //     .rule('eslint')
  //     .use('eslint-loader')
  //     .loader('eslint-loader')
  //     .tap(options => {
  //       options.fix = true
  //       return options
  //     })
  // },
  lintOnSave: true, // 关闭eslint
  outputDir: process.env.NODE_ENV === 'development' ? 'alpha' : 'dist',
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 标题
      title: '学习 webpack',
      // 模板
      template: 'src/index.html',
      // 压缩 去掉所有空格
      minify: {
        collapseWhitespace: true // false | true
      },
      // 添加hash
      hash: true
    }),
    // css分离
    new ExtractTextPlugin('style.css'),
    // 删除文件 保留新文件
    new CleanWebpackPlugin(['dist'])
  ]
}