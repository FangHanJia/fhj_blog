<template>
    <div>
        <el-dialog title="绑定Token" :visible.sync="isShow" width="500px">
            <el-form :model="tokenForm" ref="tokenForm" label-width="100px">
                <el-form-item label="GitHub">
                    <el-tag>{{githubUsername}}</el-tag>
                </el-form-item>
                <el-form-item prop="token" label="Token" :rules="[{ required: true, message: '请输入accessToken', trigger: 'blur' }]">
                    <el-input v-model="tokenForm.token" placeholder="请保管好Token"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                isShow: false,
                tokenForm:{
                    token:''
                }
            }
        },
        computed: {
            ...mapGetters([
                'githubUsername'
            ])
        },
        methods: {
            open(){
                this.isShow = true;
            },
            // 提交
            onSubmit(){
                this.$refs['tokenForm'].validate((valid)=>{
                    if(valid && this.tokenForm.token){
                        // 验证token
                        this.$store.dispatch('authentication',this.tokenForm.token);
                        this.isShow = false;
                    }else{
                        
                    }
                })
            }
        },
    }
</script>