// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';
// 引入工具包
import util from './utils/util.js';
import requestHttp from './utils/requestHttp.js';

// 引入重置样式
import './assets/common.css';
// 引入Vant 组件库
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
// 引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vant);
Vue.use(ElementUI);

// 挂载
Vue.prototype.$util = util;
Vue.prototype.$requestHttp = requestHttp;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
