<template>
    <div style="min-height:600px;" v-loading="loading">
        <div v-if="bookData.length > 0">
            <el-row :gutter="10">
                <el-col :span="8" v-for="(item,index) in bookData" :key="index" style="margin-bottom:10px;">
                    <div @click="openUrl(item.url)">
                        <el-card shadow="hover" style="font-size:14px;text-align:center;">
                            <div slot="header">
                                <span>{{item.name}}</span>
                            </div>
                            <div style="width:240px;overflow:hidden;">
                                <img :src="item.cover" alt="" style="width:200px;height:240px;" lazy="loaded">
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
            <div style="text-align: center">
                <el-pagination @current-change="getListData" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize"
                    :total="query.pageNumber*query.pageSize">
                </el-pagination>
            </div>
        </div>
        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else-if ="!bookData||bookData.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有书本资料 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
</template>
<script>
    import userApi from '../../../api/user.js';
    export default {
        data(){
            return{
                loading: false,
                // 请求数据
                query:{
                    page:1,
                    pageSize:6,
                    pageNumber:1
                },
                bookData:[]
            }
        },
        mounted(){
            this.getListData();
        },
        methods:{
            // 获取书架
            getListData(){
                this.loading = true;
                userApi.getBook(this.query).then(res=>{
                    let pageNumber = Math.ceil((res.data.data.count) / (this.query.pageSize));
                    if(pageNumber){
                        this.query.pageNumber = pageNumber;
                    }
                    this.bookData = res.data.data.rows;
                }).then(()=>{
                    this.loading = false;
                })
            },
            openUrl(_url){
                if(_url){
                    window.open(_url)
                }
            }
        }
    }
</script>

