import requestHttp from '../utils/requestHttp.js';
import store from '../store/index.js';
export default{
    // 身份验证
    verifToken:function(token){
        return requestHttp({
            url:'/users/access_token=' + token
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