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
                path:'blogDetails/:id',
                component: resolve => require(['../components/pcView/blog/blogDetails.vue'], resolve),
                name:'blogDetails',
                meta:{
                    title:'博客详情'
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