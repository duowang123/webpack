# eventBus

#### 1.在utils文件夹下添加BusEvent.js

```javascript
import Vue from "vue";
const Bus = new Vue();

/**
 * 同级组件通讯，提交事件
 * @param {String} component    要提交的目标组件名称
 * @param {string} action       要调用目标组件的方法名
 * @param {any} param           目标组件的方法参数
 */
export const BusEmit = (component, action, param) => {
  Bus.$emit(component, action, param);
};

/**
 * 同级组件通讯，监听销毁事件
 */
export const BusOn = {
  mounted() {
    Bus.$on(`${this.$options.name}`, this.onBusAction);
  },
  beforeDestroy() {
    Bus.$off(`${this.$options.name}`, this.onBusAction);
  },
  methods: {
    onBusAction(action, param) {
      log(`调用组件：${this.$options.name},方法：${action},参数：${param}`);
      this[action](param);
    }
  }
};

```

#### 2.需要监听事件的组件引入 BusOn 挂载在组件的mixins上

```javascript
import { BusOn} from "@/utils/BusEvent";
export default {
  name: "app",
  mixins: [BusOn],
  methods: {
      show(is){
          console.log(is);
      }
  }
 ```

#### 3.发起通讯的组件引入 BusEmit 发起同级组件通讯

```javascript
import { BusEmit} from "@/utils/BusEvent";
export default {
  name: "child",
  methods: {
      emitShow(is){
         //大概意思：我要调用 app 组件的 show 方法，并且传了一个 true 的参数
         BusEmit("app","show",true)
      }
  }
}
```
##### 好处：
* 不用每个组件去引入Bus，然后在 mounted 监听，beforeDestroy 销毁（eventbus监听事件必须销毁），很繁琐
* 提供了良好的扩展，你想调用哪个组件，调用哪个方法，传递什么参数，很清晰
* 你可以在其他 js 文件 去引入并且调用组件的方法