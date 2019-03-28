import Vue from 'vue';
import Vuex from 'vuex';

// 引入模块
import configuration from './modules/configuration';
// 引入状态树
import getters from './getters.js';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        configuration
    },
    getters
});
export default store;