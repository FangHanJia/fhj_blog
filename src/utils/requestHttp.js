import axios from 'axios';
import Vue from 'vue';

// 创建axios
const service = axios.create({
    baseURL:'https://api.github.com',
    timeout: 8000
});

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