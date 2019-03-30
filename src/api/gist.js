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
    },
    // 添加博客
    addBlog:function(form){
        let files = {};
        files[form.title] = { content: form.content};
        return requestHttp({
            url: '/gists',
            method: 'post',
            data: {
                'description': form.description,
                'public': true,
                'files': files
            }
        });
    },
    // 编辑博客
    editBlog:function(form){
        let files = {};
        files[form.title] = { content: form.content};
        return requestHttp({
            url: '/gists/' + form.id,
            method: 'PATCH',
            data: {
                'description': form.description,
                'public': true,
                'files': files
            }
        });
    },
    // 删除博客
    deleteBlog:function(id){
        return requestHttp({
            url: '/gists/' + id,
            method:'DELETE'
        });
    }
}