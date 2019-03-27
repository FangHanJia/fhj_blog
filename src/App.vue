<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		created(){
			// 监听窗口，切换终端
			window.onresize = ()=>{
				let windowSize = this.$util.getWindowSize();
				let pathArr = this.$route.path.split("/");
				if(pathArr[1] == 'pc' && windowSize.height > windowSize.width * 1.2){
					this.$router.push('/mobile/mHome');
				}
				if(pathArr[1] == 'mobile' && windowSize.height <= windowSize.width * 1.2){
					this.$router.push('/');
				}
				console.log(pathArr[1]);
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
