// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入Mint-ui
// 里面其实做的就是注册鄋的全局组件和给Vue.prototype挂载一些对象
import MintUI from 'mint-ui'
import Axios from 'axios'
import router from './router'
import App from './App.vue'
// 引入mint-ui的CSS
import 'mint-ui/lib/style.css'
// 引入axios
// 引入全局样式
import '../static/css/global.css'
// 引入插件安装自己的插件安装器
import Installer from '@/plugins/installer'
// 注册全局组件
import OrderContent from './components/common/OrderContent.vue'
import OrderItem from './components/common/OrderItem.vue'

Vue.component(OrderContent.name, OrderContent)
Vue.component(OrderItem.name, OrderItem)
Vue.config.productionTip = false

// 安装mint-ui插件
Vue.use(MintUI)
Vue.use(Installer)
// 给vue的原型挂载$axios属性
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
// axios发送请求

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
