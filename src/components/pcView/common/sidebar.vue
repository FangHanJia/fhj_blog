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

        <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div v-if="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <el-button type="text" @click="openTokenDialog">绑定</el-button>
            </div>
            <div v-if="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
                <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
                <el-button type="text" @click="cancelToken">注销</el-button>
            </div>
        </el-card>
        <TokenDialog ref="tokenDialog" />
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { constantRouterMap } from '../../../router/index.js';
    import TokenDialog from './tokenDialog.vue';
    export default {
        components:{
            TokenDialog
        },
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
            },
            // 显示token弹窗
            openTokenDialog(){
                this.$refs.tokenDialog.open();
            },
            cancelToken() {
                this.$store.dispatch("cancelToken")
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


