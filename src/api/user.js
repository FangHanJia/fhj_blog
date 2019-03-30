import requestHttp from '../utils/requestHttp.js';
import store from '../store/index.js';
export default{
    // 身份验证
    verifToken:function(token){
        return requestHttp({
            url:'/user?access_token=' + token
        })
    },
    // 获取用户信息
    getInfo:function(){
        let githubUsername = store.state.configuration.githubUsername;
        return requestHttp({
            url:'/users/' + githubUsername
        })
    },
    // 获取书架
    getBook:function(query){
        return requestHttp({
            url:`https://www.jiangshuaijie.com/server/api/v1/book/index?page=${query.page}&pageSize=${query.pageSize}`
        })
    }
}