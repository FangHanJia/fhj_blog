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