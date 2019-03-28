import requestHttp from '../utils/requestHttp.js';
import store from '../store/index.js';
export default{
    getInfo:function(){
        let githubUsername = store.state.configuration.githubUsername;
        return requestHttp({
            url:'/users/' + githubUsername
        })
    }
}