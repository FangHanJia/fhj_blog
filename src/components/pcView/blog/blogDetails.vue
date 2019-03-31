<template>
        <div style="min-height: 600px" v-loading="loading">
            <el-card shadow="never" style="min-height: 400px">
                <div slot="header">
                    <el-row>
                        <el-col :span="12">
                            <el-button @click="back" style="padding: 3px 0;float:left;" type="text" icon="el-icon-arrow-left">返回</el-button>
                            <span style="float:right;">{{blog.title}}</span>
                        </el-col>
                        <el-col :span="12">
                            <div style="text-align: right;">
                                <el-button @click="$share()" style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                                <el-button @click="edit" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token">编辑</el-button>
                                <el-button style=" padding: 3px 0" type="text" icon="el-icon-more-outline" @click="more">更多博客</el-button>
                            </div>
                        </el-col>
                    </el-row>
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
            <!-- 评论 -->
            <div id="gitalk-container"></div>
        </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import gistApi from '../../../api/gist.js';
    import Gitalk from 'gitalk';
    export default {
        data() {
            return {
                loading: false,
                blog:{
                    id:'',
                    title:'' || 'title',
                    description:'',
                    content:'',
                    createTime:'',
                    updateTime:''
                }
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ])
        },
        mounted() {
            this.gitalkHandle();
            this.loading = true
            this.blog.id = this.$route.params.id
            gistApi.getSingleNew(this.blog.id).then((response) => {
                let result = response.data
                for (let key in result.files) {
                    this.blog['title'] = key
                    this.blog['content'] = this.$markDown(result.files[key]['content'])
                    this.blog['description'] = result['description']
                    this.blog['createTime'] = this.$util.formatUTC(result['created_at'])
                    this.blog['updateTime'] = this.$util.formatUTC(result['updated_at'])
                    break
                }
            }).then(() => this.loading = false)

        },
        methods: {
            // gitalk评论
            gitalkHandle(){
                var gitalk = new Gitalk({
                clientID: 'c018f77406f8aefcd7d5', // GitHub Application Client ID
                clientSecret: '80729c32a4c165687c825356097836f58963ac2d', // GitHub Application Client Secret
                repo: 'fanghanjia.github.io',      // 存放评论的仓库
                owner: 'fanghanjia',          // 仓库的创建者，
                admin: ['fanghanjia'],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
                id: decodeURI(window.location.hash.match(/#(.*?)([?]|$)/)[1]),      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
                })

                gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
            },
            // 返回
            back(){
                this.$router.push('/pc/blog/blogMain');
            },
            // 编辑博客
            edit(){
                if(!this.token){
                    this.$message({
                        message: '您的权限不足',
                        type: 'warning'
                    });
                }else{
                    this.$router.push('/pc/blog/blogEdit/' + this.blog.id);
                }
            },
            // 更多博客
            more(){
                this.$router.push('/pc/blog/blogMain');
            }
        },
    }
</script>

