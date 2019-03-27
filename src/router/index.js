import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
	routes: [
		{
            path:'/',
            redirect:'/pc/pHome'
        },
        // pc
        {
            path:'/pc/pHome',
            component: resolve => require(['../components/pcView/pHome/pHome.vue'], resolve),
            name:'pHome',
            meta:{
                title:'首页'
            }
        },
        {
            path:'/mobile/mHome',
            component: resolve => require(['../components/mobileView/mHome/mHome.vue'], resolve),
            name:'mHome',
            meta:{
                title:'首页'
            }
        },
	]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})
export default router;