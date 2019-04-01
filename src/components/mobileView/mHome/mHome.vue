<template>
    <div class="mhome_wrap">
        <van-nav-bar title="标题" left-text="返回" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <van-popup v-model="isShow">手机端开发中...</van-popup>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow:true
            }
        },
        methods: {
            // 开发中
            developing(){

            }
        }
    }
</script>

