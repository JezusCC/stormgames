<template>
	<div class="topbarbox">
		<slot name="navlist"></slot>
		<div class="topbar-special">
			<button class="downloadBtn" @click="downloadClient()">下载客户端</button>
			<button v-if="!isUserLogin" class="loginBtn" @click="jumpLogin()">登录</button>
			<button v-else class="userProfile" @click="jumpUserprofile()" :style="userHeadImg">
				
			</button>
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
			},
			jumpUserprofile(){
				this.$router.push('/profile')
			}
		},
		computed:{
			isUserLogin(){
				return this.$store.state.user != null
			},
			userHeadImg(){
				return 'background-image: url('+
				this.$baseip+'/public/user/'+this.$store.state.user.id+'/head.jpeg);'
				+'background-size:100% 100%;'
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/topbar/topbar.css");
</style>
