import axios from 'axios';
import Vue from 'vue';
import store from '../store';

// 创建axios
const service = axios.create({
    baseURL:'https://api.github.com',
    timeout: 8000
});
// 请求头追加access_token
service.interceptors.request.use(
    config => {
        let token = store.state.token.token
        if (token) {
            let sp = "?"
            if (config.url.indexOf("?") >= 0) {
                sp = "&"
            }
            config.url = config.url + sp + "access_token=" + token + "&v=" + Date.now();
        }else{
            // 添加时间戳
            let sp = "?"
            if (config.url.indexOf("?") >= 0) {
                sp = "&"
            }
            config.url = config.url + sp + 'v=' + Date.now();
        }
        return config
    },
    error => {

    }
);
// 中间拦截器
service.interceptors.response.use(
    response => {
        let responseJson = response.data
        return response
    },
    error => {
        let message
        switch (error.response.status) {
            case 401:
                message = "Token错误"
                break
            default:
                message = error.response.data.message
                break
        }
        Vue.prototype.$message({
            message: message,
            type: 'error'
        })
        return Promise.reject('error')
    }
);
export default service;