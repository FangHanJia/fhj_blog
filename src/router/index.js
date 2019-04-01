import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由树
export const constantRouterMap = [
    {
        path:'/',
        redirect:'/pc/pHome'
    },
    // pc
    {
        path:'/pc/pHome',
        redirect:'/pc/pHome/new',
        component: resolve => require(['../components/pcView/pHome/pHome.vue'], resolve),
        name:'pHome',
        meta:{
            type:'user',
            icon:'el-icon-star-off',
            title:'最新动态'
        },
        children:[
            {
                path:'new',
                component: resolve => require(['../components/pcView/new/new.vue'], resolve),
                name:'new',
                meta:{
                    title:'最新动态'
                }
            }
        ]
    },
    {
        path:'/pc/blog',
        redirect:'/pc/blog/blogMain',
        component: resolve => require(['../components/pcView/pHome/pHome.vue'], resolve),
        name:'blog',
        meta:{
            type:'user',
            icon:'el-icon-edit-outline',
            title:'博客列表'
        },
        children:[
            {
                path:'blogMain',
                component: resolve => require(['../components/pcView/blog/blogMain.vue'], resolve),
                name:'blogMain',
                meta:{
                    title:'博客列表'
                }
            },{
                path:'details/:id',
                component: resolve => require(['../components/pcView/blog/blogDetails.vue'], resolve),
                name:'details',
                meta:{
                    title:'博客详情'
                }
            },{
                path:'blogAdd',
                component: resolve => require(['../components/pcView/blog/blogAdd.vue'], resolve),
                name:'blogAdd',
                meta:{
                    title:'发表博客'
                }
            },{
                path:'blogEdit/:id',
                component: resolve => require(['../components/pcView/blog/blogEdit.vue'], resolve),
                name:'blogEdit',
                meta:{
                    title:'博客编辑'
                }
            }
        ]
    },
    {
        path:'/pc/bookShelf',
        redirect:'/pc/bookShelf/bookMain',
        component: resolve => require(['../components/pcView/pHome/pHome.vue'], resolve),
        name:'bookShelf',
        meta:{
            type:'user',
            icon:'el-icon-tickets',
            title:'书架'
        },
        children:[
            {
                path:'bookMain',
                component: resolve => require(['../components/pcView/bookShelf/bookMain.vue'], resolve),
                name:'bookMain',
                meta:{
                    title:'书架'
                }
            }
        ]
    },
    {
        path:'/pc/system',
        redirect:'/pc/system/systemMain',
        component: resolve => require(['../components/pcView/pHome/pHome.vue'], resolve),
        name:'system',
        meta:{
            type:'user',
            icon:'el-icon-setting',
            title:'系统配置',
            LoginRequired: true
        },
        children:[
            {
                path:'systemMain',
                component: resolve => require(['../components/pcView/system/systemMain.vue'], resolve),
                name:'systemMain',
                meta:{
                    title:'系统配置'
                }
            }
        ]
    },
    // mobile
    {
        path:'/mobile/mHome',
        component: resolve => require(['../components/mobileView/mHome/mHome.vue'], resolve),
        name:'mHome',
        meta:{
            title:'首页'
        }
    },
];
const router =  new Router({
	routes: constantRouterMap
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})
export default router;