import Vue from 'vue'
import App from './App.vue'

// vuecli框架内部有对文件做自动检测
// index.js 和 index.vue文件不用刻意设置，默认就会自动寻找
import router from './router'

// 引入全局样式控制文件
// import '@assets/css/global.css'
import '@/assets/css/global.css'
// 引入elementui
import ElementUI from 'element-ui'

// 引入axjos
import axios from 'axios'
// 公共根地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 把axios通过原型继承的方式配置给vue，使得组件内部可以直接访问
// 后期在组件内部就可以通过  this.$http 的方式获得axios对象
// $http： 就是自定义名称，可以为其他
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
