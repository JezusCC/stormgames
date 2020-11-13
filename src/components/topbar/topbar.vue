<template>
	<div class="topbarbox">
		<slot name="navlist"></slot>
		<div class="topbar-special">
			<button class="downloadBtn" @click="downloadClient()">下载客户端</button>
			<button class="loginBtn" @click="jumpLogin()">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			jumpLogin(){
				this.$router.push('/login')
			},
			downloadClient(){
				this.$router.push('/download')
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/topbar/topbar.css");
</style>
