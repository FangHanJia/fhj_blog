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
// 引入富文本组件库
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import 'mavon-editor/dist/markdown/github-markdown.min.css';
// 引入gitalk插件
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

// 全局使用
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(mavonEditor);

// 挂载
Vue.prototype.$util = util;
Vue.prototype.$requestHttp = requestHttp;
Vue.prototype.$markDown = function(value){
	return mavonEditor.markdownIt.render(value);
}
Vue.prototype.$share = function(message){
	if(!message){
		message = window.location;
	}else{
		let arr = (window.location + '').split('#');
		message = arr[0] + '#' +message;
	}
	if(util.copy(message)){
		Vue.prototype.$confirm('链接已复制,去分享给好友吧！','分享',{
			showCancelButton: false,
			showClose: false,
			type: 'success'
		});
	}else{
		Vue.prototype.$confirm('链接复制失败,可能由于浏览器不兼容！','分享',{
			showCancelButton:false,
			showClose:false,
			type:'warning'
		});
	}
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
