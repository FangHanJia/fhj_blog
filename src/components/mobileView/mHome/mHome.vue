<template>
    <div class="mhome_wrap">
        <van-nav-bar title="首页"></van-nav-bar>
        <van-list
            v-model="loadingConfig.loading"
            :finished="loadingConfig.finished"
            finished-text="没有更多了"
            @load="onLoad">
        </van-list>
    </div>
</template>
<script>
    import { constantRouterMap } from '@/router'
    export default {
        data(){
            return{
                active: 0,
                constantRouterMap,
                // 加载配置
                loadingConfig:{
                    loading : false,
                    finished: true
                },
                // 临时数据
                newList: [],
                listData: [],
            }
        },
        created(){
        },
        methods: {
            // 加载更多
            onLoad(){

            },
            onClickIcon() {
                Toast('点击图标');
            },
            onClickButton() {
                Toast('点击按钮');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mhome_wrap{
        .panel_header{
            height: 40px;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
        }
        ul{
            li{
                font-size: 16px;
                color: $appColor;
                @extend %relative;
            }
        }
    }
</style>


