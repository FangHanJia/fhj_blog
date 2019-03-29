import Cookies from '../../utils/cookies';
import userApi from '../../api/user';
import store from '../../store';
import Vue from 'vue';

const TOKEN_KEY = 'TOKEN_KEY';
const token = {
    state:{
        token: Cookies.getCookie(TOKEN_KEY)
    },
    mutations:{
        SET_TOKEN: (state,value)=>{
            state.token = value;
            Cookies.setCookie(TOKEN_KEY,value,30);
        },
        REMOVE_TOKEN: (state)=>{
            state.token = null;
            Cookies.removeCookie(TOKEN_KEY);
        }
    },
    actions: {
        // 身份认证
        authentication({ commit },accessToken){
            userApi.verifToken(accessToken).then(res=>{
                let result = res.data;
                let githubUsername = store.state.configuration.githubUsername;
                if(githubUsername == result['login'] ){
                    commit('SET_TOKEN',accessToken);
                    Vue.prototype.$notify({
                        title:'成功',
                        message:'Token绑定成功',
                        type:'success'
                    });
                }else{
                    Vue.prototype.$message({
                        message:'Token不一致',
                        type:'error'
                    });
                }
            })
        }   
    }
}
export default token;