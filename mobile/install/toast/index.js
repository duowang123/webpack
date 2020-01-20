// 引入组件
import LoadingComponent from './loading.vue'
// 定义 Loading 对象
const Loading = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install: (Vue) => {
    Vue.component('Loading', LoadingComponent)
  }
}
// 导出
export default Loading