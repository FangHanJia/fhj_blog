const configuration = {
    // 属性
    state: {
        githubUsername:'',
        blogTitle:'',
        blogDescribe:'',
        htmlTitle:'',
        fontColor:'',
        useBackgroundImage:false,
        backgroundColorLeft:'',
        backgroundColorRight:'',
        audioUrl:'',
        mini:false,
        webSites:[],
        audioAutoPlay:false
    },
    // 方法
    mutations: {
        /**
         * state:本地属性
         * configuration：外部对象
         */
        SET_CONFIGURATION: (state,configuration)=>{
            state.githubUsername = configuration['githubUsername'] || 'GitHub-Fanghanjia';
            state.blogTitle = configuration['blogTitle'] || state.githubUsername;
            state.blogDescribe = configuration['blogDescribe'] || `欢迎来到${state.githubUsername}的个人博客。`;
            state.htmlTitle = configuration['htmlTitle'] || `${state.githubUsername}的博客`;
            state.fontColor = configuration['fontColor'] || '#ffffff';
            state.useBackgroundImage = configuration['useBackgroundImage'] || false;
            state.backgroundColorLeft = configuration['backgroundColorLeft'] || '#155799';
            state.backgroundColorRight = configuration['backgroundColorRight'] || '#159957';
            state.audioUrl = configuration['audioUrl'] || '';
            state.mini = configuration['mini'] || false;
            state.webSites = configuration['webSites'] || [];
            state.audioAutoPlay = configuration['audioAutoPlay'] || false;
            state.blogSource = configuration['blogSource'] || false;
        }
    },
    // 执行方法的对象
    actions:{
        // 重写本地配置数据
        reloadLocal({ commit },configuration){
            commit('SET_CONFIGURATION',configuration);
        },
        // 初始化本地数据
        initData({commit}){
            let xmlhttp;
            if(window.XMLHttpRequest){
                xmlhttp = new XMLHttpRequest();
            }else{
                xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlhttp.open('GET','../../../static/configuration.json?v='+Date.now(),false);
            xmlhttp.send();
            let configuration = JSON.parse(xmlhttp.responseText);
            commit('SET_CONFIGURATION',configuration);
        }
    }
}
export default configuration;