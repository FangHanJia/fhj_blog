<template>
    <div class="mhome_wrap">
        <van-list
            v-model="loadingConfig.loading"
            :finished="loadingConfig.finished"
            finished-text="没有更多了"
            @load="onLoad">
            <van-cell
                v-for="(item, key) in listData"
                :key="key"
            />
        </van-list>
        <van-nav-bar title="首页"></van-nav-bar>
        <van-panel title="标题" desc="描述信息" status="状态">
            <div>内容</div>
            <div slot="footer">
            <van-button size="small">按钮</van-button>
            <van-button size="small" type="danger">按钮</van-button>
            </div>
        </van-panel>
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
                listData: []
            }
        },
        created(){
            this.$adapter.$adapter;
            console.log(this.constantRouterMap);
        },
        methods: {
            // 加载更多
            onLoad(){

            }
        }
    }
</script>

