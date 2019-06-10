<template>
    <div class="mhome_wrap">
        <van-nav-bar title="首页"></van-nav-bar>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home">首页</van-tabbar-item>
            <van-tabbar-item icon="like">项目</van-tabbar-item>
            <van-tabbar-item icon="description">书架</van-tabbar-item>
            <van-tabbar-item icon="setting">标签</van-tabbar-item>
        </van-tabbar>
        <!-- <van-popup v-model="isShow">手机端开发中...</van-popup> -->
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow: true,
                active: 0
            }
        },
        created(){
            this.$adapter.$adapter
        },
        methods: {
            // 开发中
            developing(){

            }
        }
    }
</script>

