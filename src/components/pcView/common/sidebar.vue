<template>
    <div class="sidebar_wrap">
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect">
                <el-menu-item v-for="item in constantRouterMap" v-if="item.meta&&item.meta.type=='user'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)"
                    :key="item.path" :index="item.path">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>
<script>
    import { mapGetters } from 'Vuex';
    import { constantRouterMap } from '../../../router/index.js';
    export default {
        data(){
            return{
                constantRouterMap,
                active: "",
            }
        },
        computed:{
            ...mapGetters([
                'token',
                'mini'
            ])
        },
        methods: {
            // 侧边栏切换
            onSelect(){

            }
        }
    }
</script>
<style lang="scss" scoped>

</style>


