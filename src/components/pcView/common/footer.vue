<template>
    <div style="border-top: 1px #e1e4e8 solid !important;padding: 45px;">
        <el-row>
            <el-col :span="10">
                <div style="font-size: 1rem;display: flex;">
					© {{year}} GitHub-{{githubUsername}}&emsp;&emsp;
					<a :href="'https://github.com/' + githubUsername" target="_blank">Profile</a>&emsp;&emsp;
					<a :href="blogSource" target="_blank">fhj_blog</a>
				</div>
            </el-col>
            <el-col :span="4">
				<div style="text-align: center;font-size: 1rem;">
					<i class="el-icon-location-outline"></i>{{IPLocation}}
				</div>
			</el-col>
            <el-col :span="10">
				<div style="float: right;display:flex;font-size:1rem;">
					<a href="https://developer.github.com" target="_blank">GitHub-API</a>&emsp;&emsp;
					<a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>&emsp;&emsp;
					<a href="http://element.eleme.io/" target="_blank">Element</a>
				</div>
			</el-col>
        </el-row>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data(){
            return{
                // 年份
                year:'2019',
                IPLocation:''
            }
        },
        computed: {
            ...mapGetters([
                'githubUsername',
                'blogSource'
            ])
        },
        mounted(){
            this.getIPLocation();
        },
        methods: {
            // 获取位置
            getIPLocation(){
                let url = 'http://pv.sohu.com/cityjson?ie=utf-8';
                var script = document.createElement('script'); 
                script.src = url;
                document.getElementById('appHeader').appendChild(script);
                setTimeout(()=>{
                    this.IPLocation =  window.returnCitySN.cname;
                },500);
            }
        }
    }
</script>
<style lang="scss" scoped>
    a:hover{
        color: #409EFF;
        text-decoration:underline;
    }
</style>
