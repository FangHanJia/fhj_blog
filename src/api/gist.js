import requestHttp from '../utils/requestHttp';
import store from '../store/index';

export default{
    // 获取动态列表
    getNewList:function(query){
        let githubUsername = store.state.configuration.githubUsername;
        return requestHttp({
            url: `/users/${ githubUsername }/gists?page=${ query.page }&per_page=${ query.pageSize }`
        });
    },
    // 获取单个动态
    getSingleNew:function(id){
        return requestHttp({
            url: '/gists/' + id
        });
    }
}