import requestHttp from '../utils/requestHttp';
import store from '../store';

export default{
    // 获取博客配置文件
    getBlogConfigure:function(){
        let githubUsername = store.state.configuration.githubUsername;
        return requestHttp({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json'
        });
    },
    // 编辑博客配置文件
    editBlogConfigure:function(configure, sha){
        let githubUsername = store.state.configuration.githubUsername;
        let content = JSON.stringify(configure);
        return requestHttp({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json',
            method: 'PUT',
            data: {
                'message': 'update-system',
                'content': require('js-base64').Base64.encode(content),
                'sha': sha
            }
        });
    }
}