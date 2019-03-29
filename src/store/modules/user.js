import userApi from '../../api/user';
const user = {
    state: {
        location:null,
        name:null,
        avatarUrl:null
    },
    mutations:{
        SET_LOCATION: (state,value)=>{
            state.location = value;
        },
        SET_AVATARURL: (state,value)=>{
            state.avatarUrl = value;
        },
        SET_NAME: (state,value)=>{
            state.name = value;
        }
    },
    actions:{
        getUserInfo({commit}){
            userApi.getInfo().then(res=>{
                let result = res.data;
                commit('SET_LOCATION',result['location']);
                commit('SET_AVATARURL',result['avatar_url']);
                commit('SET_NAME',result['name']);
            });
        }
    }
}
export default user;