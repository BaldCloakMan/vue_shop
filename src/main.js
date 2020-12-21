import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式表
import './assets/css/global.css'

//导入UI组件
// import ElementUi from 'element-ui'
import  './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';

// 导入icon图标
import './assets/fonts/iconfont.css'


import TreeTable from 'vue-table-with-tree-grid'




//配置Axios
import Axios from 'axios'
//配置请求的根路径
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Axios.interceptors.request.use( config =>{
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = Axios

Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
