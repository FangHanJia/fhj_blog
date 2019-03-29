<template>
    <div style="min-height: 600px;" v-loading="loading">
        <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
            <div slot="header" style="text-align:center;">
                <span>{{blog.title}}</span>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{blog.createTime}}
                <br> 更新 {{blog.updateTime}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
            </div>
            <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else-if="!blog.id">
            <font style="font-size: 30px;color:#dddddd ">
                <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
            </font>
        </el-card>
    </div>
</template>
<script>
    import gistApi from '../../../api/gist.js';
    export default {
        data(){
            return{
                loading:false,
                // 动态数据
                blog:{
                    id:'',
                    title:'',
                    createTime:'',
                    updateTime:'',
                    description:'',
                    content:''
                },
                // 请求数据
                query:{
                    page:1,
                    pageSize:1
                }
            }
        },
        mounted(){
            this.loading = true;
            gistApi.getNewList(this.query).then(res=>{
                let result = res.data;
                if(!result || result.length == 0){
                    this.loading = false;
                    return;
                }
                for(let key in result[0].files){
                    this.blog.id = result[0]['id'];
                    break;
                }
                // 获取单个动态
                gistApi.getSingleNew(this.blog.id).then(res=>{
                    let result = res.data;
                    for(let key in result.files){
                        this.blog['title'] = key;
                        this.blog['createTime'] = this.$util.formatUTC(result['created_at']);
                        this.blog['updateTime'] = this.$util.formatUTC(result['updated_at']);
                        this.blog['description'] = result['description'];
                        this.blog['content'] = this.$markDown(result.files[key]['content']);
                    }
                }).then(()=>{this.loading = false})
            })
        }
    }
</script>