import axios from 'axios';
import Vue from 'vue';
import store from '../store';

// 创建axios
const service = axios.create({
    baseURL:'https://api.github.com',
    timeout: 8000
});
// 追加access_token
service.interceptors.response.use(
    config=>{
        let token = store.state.token.token;
        if(token){
            let sp = '?';
            if(config.url.indexOf('?') >= 0){
                sp = '&';
            }
            config.url = config.url + sp + 'access_token=' + token; 
        }
        return config;
    },
    error=>{
        
    }
);
// 中间拦截器
service.interceptors.response.use(
    response=>{
        let responseJson = response.data;
        return response;
    },
    error=>{
        let message;
        switch(error.response.status){
            case 401:
                message = 'Token错误';
                break;
            default :
                message = error.response.data.message;
        }
        Vue.prototype.$message({
            message:message,
            type:'error'
        });
        return Promise.reject('error');
    }
);
export default service;