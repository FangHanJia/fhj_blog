<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted(){
			// 初始化数据
			this.$store.dispatch('initData');
			// 获取用户数据
			this.$store.dispatch('getUserInfo');
			// 切换终端
			this.monitorHandle();
			// 监听窗口
			window.onresize = ()=>{
				this.monitorHandle();
			}
		},
		methods: {
			// 切换终端
			monitorHandle(){
				console.log(window.location.hash.split("/"));
				let windowSize = this.$util.getWindowSize();
				let pathArr = window.location.hash.split("/");
				if(pathArr[1] == 'pc' && windowSize.height > windowSize.width * 1.2){
					this.$router.push('/mobile/mHome');
				}
				if(pathArr[1] == 'mobile' && windowSize.height <= windowSize.width * 1.2){
					this.$router.push('/');
				}
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
	}
</style>
