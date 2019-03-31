<template>
    <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
            <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button>
        </el-card>

        <div v-if="blogs&&blogs.length>0">
            <el-card shadow="hover" v-for="(item,index) in blogs" :key="'p'+index" style="margin-bottom: 20px" v-if="!item.hide">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <a style="text-decoration:none;cursor:pointer" @click="goDetails(item.id)">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.title}}
                                </a>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="$share('/pc/blog/blogDetails/'+item.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                <el-button @click="editBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token"></el-button>
                                <el-button @click="deleteBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-delete" v-if="token"></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.updateTime}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.description}}
                </div>
            </el-card>
            <div style="text-align: center">
                <el-pagination @current-change="getListData" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination>
            </div>
        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!blogs||blogs.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import gistApi from '../../../api/gist.js';
    export default {
        data(){
            return{
                loading:false,
                searchKey:'',
                blogs:[],
                query:{
                    page:1,
                    pageSize:5,
                    pageNumber:1
                }
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ])
        },
        mounted(){
            this.getListData();
        },
        methods: {
            // 获取博客列表
            getListData(){
                this.blogs = [];
                this.loading = true;
                gistApi.getNewList(this.query).then(res=>{
                    let result = res.data;
                    let pageNumber = this.$util.parseHeaders(res.headers);
                    if(pageNumber){
                        this.query.pageNumber = pageNumber;
                    }
                    for(let i = 0;i < result.length;i++){
                        for (let key in result[i].files) {
                            let data = {}
                            data['title'] = key
                            data['url'] = result[i].files[key]
                            data['description'] = result[i]['description']
                            data['id'] = result[i]['id']
                            data['createTime'] = this.$util.formatUTC(result[i]['created_at'])
                            data['updateTime'] = this.$util.formatUTC(result[i]['updated_at'])
                            data['hide'] = false
                            this.blogs.push(data);
                            break;
                        }
                    }
                }).then(()=>{this.loading = false;}).catch(error=>{this.loading = false});
            },
            // 搜索
            search(){
                for(let i = 0;i < this.blogs.length;i++){
                    this.blogs[i].hide = this.blogs[i].title.indexOf(this.searchKey) < 0;
                }
            },
            // 添加博客
            goAdd(){
                if(!this.token){
                    this.$message({
                        message:'请绑定有效的Token',
                        type:'warning'
                    });
                }else{
                    this.$router.push('/pc/blog/blogAdd');
                }
            },
            // 博客详情
            goDetails(id){
                this.$router.push('/pc/blog/details/'+id);
            },
            // 编辑博客
            editBlog(index){
                if(!this.token){
                    this.$message({
                        message: '请绑定有效的Token',
                        type: 'warning'
                    });
                }else{
                    this.$router.push('/pc/blog/blogEdit/' + this.blogs[index].id);
                }
            },
            // 删除博客
            deleteBlog(index){
                this.$confirm('是否永久删除该博客?','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    let blog = this.blogs[index];
                    this.loading = true;
                    gistApi.deleteBlog(blog.id).then(res=>{
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.blogs.splice(index,1);
                        this.loading = false;
                    }).catch(error=>{
                        this.$message({
                            message: '删除失败，请重试',
                            type: 'error'
                        });
                        this.loading = false;
                    })
                });
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>


