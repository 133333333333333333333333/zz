import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/normalize.css'
import { Cascader } from 'element-ui'
Vue.use(Cascader)
import Echarts from './plugin/echarts'
import '../node_modules/echarts/map/js/china.js'
import '../node_modules/echarts/map/js/world'
import Axios from 'axios'
import '../node_modules/echarts/map/js/province/zhejiang.js'
import '../node_modules/echarts/map/js/province/anhui.js'
import '../node_modules/echarts/map/js/province/aomen.js'
import '../node_modules/echarts/map/js/province/beijing.js'
import '../node_modules/echarts/map/js/province/chongqing.js'
import '../node_modules/echarts/map/js/province/fujian.js'
import '../node_modules/echarts/map/js/province/gansu.js'
import '../node_modules/echarts/map/js/province/guangdong.js'
import '../node_modules/echarts/map/js/province/guangxi.js'
import '../node_modules/echarts/map/js/province/guizhou.js'
import '../node_modules/echarts/map/js/province/hainan.js'
import '../node_modules/echarts/map/js/province/hebei.js'
import '../node_modules/echarts/map/js/province/heilongjiang.js'
import '../node_modules/echarts/map/js/province/henan.js'
import '../node_modules/echarts/map/js/province/hubei.js'
import '../node_modules/echarts/map/js/province/hunan.js'
import '../node_modules/echarts/map/js/province/jiangsu.js'
import '../node_modules/echarts/map/js/province/jiangxi.js'
import '../node_modules/echarts/map/js/province/jilin.js'
import '../node_modules/echarts/map/js/province/liaoning.js'
import '../node_modules/echarts/map/js/province/neimenggu.js'
import '../node_modules/echarts/map/js/province/ningxia.js'
import '../node_modules/echarts/map/js/province/qinghai.js'
import '../node_modules/echarts/map/js/province/shandong.js'
import '../node_modules/echarts/map/js/province/shanghai.js'
import '../node_modules/echarts/map/js/province/shanxi.js'
import '../node_modules/echarts/map/js/province/shanxi1.js'
import '../node_modules/echarts/map/js/province/sichuan.js'
import '../node_modules/echarts/map/js/province/taiwan.js'
import '../node_modules/echarts/map/js/province/tianjin.js'
import '../node_modules/echarts/map/js/province/xianggang.js'
import '../node_modules/echarts/map/js/province/xinjiang.js'
import '../node_modules/echarts/map/js/province/xizang.js'
import '../node_modules/echarts/map/js/province/yunnan.js'
import './plugin/vant'


Vue.config.productionTip = false
Vue.use(Echarts)
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
