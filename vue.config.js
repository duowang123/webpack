const path = require('path')

module.exports = {
  // 部署应用包时的基本 URL,从 Vue CLI 3.3 起已弃用baseUrl
  publicPath: '/',
  outputDir: path.resolve(__dirname, process.env.NODE_ENV === 'moblie' ? 'mob' : 'dist'), // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'public', // 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  runtimeCompiler: true, // 运行时版本是否需要编译\
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'mobile/main.js', // 手机端 // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      // entry: process.env.NODE_ENV === 'moblie' ? 'mobile/main.js' : 'pc/main.js', // pc端 // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  css: {
    // sourceMap: true, //  方便调试样式。  会影响编译速度，平时要关闭
    loaderOptions: {
      sass: {
        prependData: '@import \'./mobile/style/theme.scss\';'
      }
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  lintOnSave: false, // 关闭eslink
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}