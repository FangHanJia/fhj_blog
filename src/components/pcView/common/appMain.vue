<template>
    <div class="appMain_wrap">
        <transition name="fade">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>


