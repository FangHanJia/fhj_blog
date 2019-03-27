// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入重置样式
import './assets/common.css';
// 引入Vant 组件库
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
// 引入工具包
import util from './utils/util.js';
Vue.prototype.$util = util;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
