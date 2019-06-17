<template>
    <div class="boxHeight">
        <appMain />
        <bottom style="position:fixed;bottom:0;"/>
    </div>
</template>

<script>
    import bottom from './bottom.vue';
    import appMain from './appMain.vue';
    export default {
        components:{
            bottom,
            appMain
        }

    }
</script>

<style>

</style>
