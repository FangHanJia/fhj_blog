<template>
    <div class="pHome_wrap">
        <section class="pHome_header" :style="'background:linear-gradient(120deg,'+backgroundColorLeft+','+backgroundColorRight+')'">
            <h1 class="blog_master">{{githubUsername}}</h1>
            <h2 class="blog_welcome">{{blogDescribe ? blogDescribe :'欢迎来到Fanghanjia的个人博客。'}}</h2>
        </section>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'githubUsername',
                'blogTitle',
                'blogDescribe',
                'backgroundColorLeft',
                'backgroundColorRight',
            ])
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
            }
            .blog_welcome{
                font-size: 1.25rem;
                opacity: 0.7;
                font-weight: 400;
            }
        }
    }
</style>


