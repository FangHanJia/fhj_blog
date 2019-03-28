<template>
    <div class="pHome_wrap">
        <header class="pHome_header" :style="'background:linear-gradient(120deg,'+backgroundColorLeft+','+backgroundColorRight+')'">
            <h1 class="blog_master">{{githubUsername}}</h1>
            <h2 class="blog_welcome">{{blogDescribe}}</h2>
            <a :href="'https://github.com/'+githubUsername" class="blog_btn" target="_blank">GitHub主页</a>
            <a :href="blogSource" class="blog_btn blog_source" target="_blank">博客源码</a>
        </header>
        <nav class="pHome_nav">
            <el-card shadow="never" :body-style="{padding:'0px'}">
                <el-row>
                    <el-col :span="10">
                        <el-menu @select="selectTopbar" :default-active="topbar.active" mode="horizontal" menu-trigger="click">
                            <el-submenu index="#more">
                                <template slot="title">了解博主</template>
                                <el-menu-item index="#githubHome">github主页</el-menu-item>
                            </el-submenu>
                            <el-submenu index="#webSites" v-if="webSites.length>0">
                                <template slot="title">其他网站</template>
                                <el-menu-item :index="'#webSites-'+index" v-for="(item,index) in webSites" :key="'#webSites'+index">{{item.name}}</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-card>
        </nav>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return{
                topbar: {
                    active: "",
                },
            }
        },
        computed: {
            ...mapGetters([
                'githubUsername',
                'blogTitle',
                'blogDescribe',
                'backgroundColorLeft',
                'backgroundColorRight',
                'blogSource',
                'webSites'
            ])
        },
        methods:{
            // 导航菜单
            selectTopbar(index){
                console.log(index);
                switch(index){
                    case '#githubHome':
                        window.open('https://github.com/' + this.githubUsername);
                        break;
                    default:
                        if(/#webSites-\d+/.test(index)){
                            let i = parseInt(index.split('-')[1]);
                            let url = this.webSites[i].url;
                            window.open((url.match(/https?:\/\//i)?'':'https://') + url);
                        }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .pHome_wrap{
        height: 100%;
        .pHome_header{
            padding: 5rem 6rem;
            color: #fff;
            text-align: center;
            background: linear-gradient(120deg, rgb(36, 114, 191), rgb(238, 41, 41));
            .blog_master{
                font-size: 3.25rem;
                margin-bottom: 0.5rem;
            }
            .blog_welcome{
                font-size: 1.25rem;
                opacity: 0.7;
                font-weight: 400;
                margin-bottom: 2rem;
            }
            .blog_btn{
                display: inline-block;
                font-size: 1rem;
                font-weight: 400;
                color: hsla(0,0%,100%,.7);
                padding: 0.75rem 1rem;
                border: 1px solid hsla(0,0%,100%,.2);
                border-radius: 0.3rem;
                background: hsla(0,0%,100%,.08);
            }
            .blog_source{
                margin-left: 1rem;
            }
            .blog_btn:hover{
                color: rgba(255, 255, 255, 0.8);
                border-color: rgba(255, 255, 255, 0.3);
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
        .pHome_nav{
            position: relative;
            width: 64rem;
            margin: 0 auto;
            margin-top: -30px;
        }
    }
</style>


