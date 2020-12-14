import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入全局样式表
import './assets/css/global.css'

//导入UI组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 导入icon图标
import './assets/fonts/iconfont.css'

//配置Axios
import Axios from 'axios'
//配置请求的根路径
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = Axios

Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
