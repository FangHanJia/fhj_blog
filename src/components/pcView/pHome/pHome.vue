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
                    <el-col :span="8" style="text-align: center;padding: 12px 0px 0px 10px">
                        <el-row>
                            <el-col :span="4">
                                <el-popover placement="top" trigger="hover">
                                    <div style="text-align:center;">
                                        <el-progress color="#67C23A" type="circle" :percentage="music.volume"></el-progress><br>
                                        <el-button @click="changeVolume(-10)" icon="el-icon-minus" circle></el-button>
                                        <el-button @click="changeVolume(10)" icon="el-icon-plus" circle></el-button>
                                    </div>
                                    <el-button @click="play" id="play" slot="reference" :icon="music.isPlay?'el-icon-refresh':'el-icon-caret-right'" circle></el-button>
                                </el-popover>
                            </el-col>
                            <el-col :span="14" style="padding-left: 20px">
                                <el-slider @change="changeTime" :format-tooltip="$util.formatNumber" :max="music.maxTime" v-model="music.currentTime" style="width: 100%;"></el-slider>
                            </el-col>
                            <el-col :span="6" style="padding: 9px 0px 0px 10px;color:#909399;font-size: 13px">
                                {{$util.formatNumber(music.currentTime)}}/{{$util.formatNumber(music.maxTime)}}
                            </el-col>
                        </el-row>
                        <audio ref="music" loop autoplay v-if="audioAutoPlay">
                            <source :src="audioUrl" type="audio/mpeg">
                        </audio>
                        <audio ref="music" loop v-else>
                            <source :src="audioUrl" type="audio/mpeg">
                        </audio>
                    </el-col>
                    <el-col :span="4" style="text-align: right;">
                        <div style="font-size: 20px;color:#606266;margin-top: 5px">
                            <b>{{githubUsername}}</b>
                        </div>
                        <div style="font-size: 16px;color:#606266;line-height:26px;">
                            <i class="el-icon-location"></i>&nbsp;{{location?location:'未填写地址'}}
                            <br>
                        </div>
                    </el-col>
                    <el-col :span="2" style="text-align: center;">
                        <img v-popover:bigAvatar :src="avatarUrl" style="margin-top: 4px;margin-left: 10px;width:52px; height:52px; border-radius:5px; border: 1px solid #EBEEF5"
                        />
                        <el-popover ref="bigAvatar" placement="top-start" :title="githubUsername" width="200" trigger="hover">
                            <i class="el-icon-star-on"></i>&emsp;{{name}}
                            <br>
                            <i class="el-icon-location"></i>&emsp;{{location}}
                            <br>
                            <img :src="avatarUrl" style="width: 170px;height: 170px;">
                        </el-popover>
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
                // 音乐配置
                music:{
                    isPlay:false,
                    volume:30,
                    maxTime:0,
                    currentTime:0
                }
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
                'webSites',
                'audioUrl',
                'audioAutoPlay',
                'location',
                'avatarUrl',
                'name'
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
            },
            listenMusic(){
                if(!this.$refs.music){
                    return;
                }
                if(this.$refs.music.readyState){
                    this.music.maxTime = this.$refs.music.duration;
                }
                this.music.isPlay = !this.$refs.music.paused;
                this.music.currentTime = this.$refs.music.currentTime;
            },
            // 播放
            play(){
                if(this.$refs.music.paused){
                    this.$refs.music.play();
                }else{
                    this.$refs.music.pause();
                }
                this.music.isPlay = !this.$refs.music.paused;
                this.$nextTick(()=>{
                    document.getElementById('play').blur();
                });
            },
            // 音量操作
            changeVolume(_v){
                this.music.volume += _v;
                if(this.music.volume >= 100){
                    this.music.volume = 100;
                }else if(this.music.volume <=0 ){
                    this.music.volume = 0;
                }
                this.$refs.music.volume = this.music.volume / 100;
            },
            // 当前时间
            changeTime(_time){
                this.$refs.music.currentTime =_time;
            }
        },
        mounted(){
            this.$nextTick(() => {
                setInterval(this.listenMusic, 1000)
            })
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
            z-index:2;
            width: 64rem;
            margin: 0 auto;
            margin-top: -30px;
        }
    }
</style>


