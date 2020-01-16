navBar = require('../.vuepress/config/navBar.js')
sideBar = require('../.vuepress/config/sideBar.js')
module.exports = {
  title: 'Chen\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/logo.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: navBar.nav,
    // 侧边栏
    // 侧边栏名字在对应的md文件中：上下各用三根杠，然后中间写一个title，后面的名字就是你侧边栏显示的名字
    sidebar: sideBar.bar,
    // 搜索框
    search: true,
    sidebarDepth: 5, // 侧边栏显示5级
  }
};