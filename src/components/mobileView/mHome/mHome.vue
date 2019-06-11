<template>
    <div class="mhome_wrap">
        <van-nav-bar title="首页"></van-nav-bar>
        <van-tabbar 
            v-model="active"
            active-color="#F4472C"
            inactive-color="#000">
            <van-tabbar-item 
                :icon="item.meta.icon" 
                v-for="(item, key) in constantRouterMap" 
                :key="key" 
                v-if="item.meta && item.meta.type == 'mobile'">{{item.meta.title}}</van-tabbar-item>
            <!-- <van-tabbar-item icon="edit">博客</van-tabbar-item>
            <van-tabbar-item icon="description">书架</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item> -->
        </van-tabbar>
    </div>
</template>
<script>
    import { constantRouterMap } from '@/router'

    export default {
        data(){
            return{
                active: 0,
                constantRouterMap
            }
        },
        created(){
            this.$adapter.$adapter;
            console.log(this.constantRouterMap);
        },
        methods: {
            // 开发中
            developing(){

            }
        }
    }
</script>

