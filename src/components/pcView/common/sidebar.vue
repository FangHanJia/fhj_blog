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
    import { mapGetters } from 'vuex';
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
            onSelect(index){
                this.$router.push(index);
            }
        },
        mounted(){
            // 高亮
            let arr = this.$route.path.split('/');
            this.active = '/' + arr[1] + '/' + arr[2];
        }
    }
</script>
<style lang="scss" scoped>

</style>


