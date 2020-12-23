import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式表
import './assets/css/global.css'
import VueQuillEditor from 'vue-quill-editor'
// require styles 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//导入UI组件
// import ElementUi from 'element-ui'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';

// 导入icon图标
import './assets/fonts/iconfont.css'


import TreeTable from 'vue-table-with-tree-grid'
// 将富文本编辑器注册全局组件
Vue.use(VueQuillEditor)

Vue.filter('dataFormat', function (originVal) {
  let dt = new Date(originVal)

  let y = dt.getFullYear()
  let m = (dt.getMonth() + 1 + '').padStart(2, '0')
  let d = (dt.getDate() + '').padStart(2, '0')

  let hh = (dt.getHours() + '').padStart(2, '0')
  let mm = (dt.getMinutes() + '').padStart(2, '0')
  let ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

})


//配置Axios
import Axios from 'axios'
//配置请求的根路径
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Axios.interceptors.request.use(config => {
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
