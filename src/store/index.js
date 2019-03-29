import Vue from 'vue';
import Vuex from 'vuex';

// 引入模块
import configuration from './modules/configuration.js';
import user from './modules/user.js';
import token from './modules/token.js';
// 引入状态树
import getters from './getters.js';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        configuration,
        user,
        token
    },
    getters
});
export default store;