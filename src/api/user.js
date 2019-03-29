import requestHttp from '../utils/requestHttp.js';
import store from '../store/index.js';
export default{
    // 身份验证
    verifToken:function(token){
        return requestHttp({
            url:'/user?ccess_token=' + token
        })
    },
    // 获取用户信息
    getInfo:function(){
        let githubUsername = store.state.configuration.githubUsername;
        return requestHttp({
            url:'/users/' + githubUsername
        })
    }
}