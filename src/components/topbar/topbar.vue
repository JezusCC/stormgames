<template>
	<div>
		<slot name="navlist"></slot>
		<div>
			<button @click="jumpLogin()">登录</button>
			<button @click="downloadClient()">下载客户端</button>
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
</style>
