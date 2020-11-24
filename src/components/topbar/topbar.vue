<template>
	<div class="topbarbox">
		<slot name="navlist"></slot>
		<div class="topbar-special">
			<button class="downloadBtn" @click="downloadClient()">下载客户端</button>
			<button v-if="!isUserLogin" class="loginBtn" @click="jumpLogin()">登录</button>
			<button v-else class="userProfile" 
			@click="jumpUserprofile()" 
			@mouseenter="showOption()"
			:style="userHeadImg">
			</button>
		</div>
		<div class="topbar-user" v-show="isShowLoginOption"
			 @mouseleave="hideOption()">
			<div class="topbar-useroption-spc"></div>
			<div class="topbar-useroption-tri"></div>
			<div class="topbar-useroption">
				<button>个人中心</button>
				<button>个人设置</button>
				<button @click="logout()">退出登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isShowLoginOption:false
			}
		},
		methods:{
			jumpLogin(){
				this.$router.push('/login')
			},
			downloadClient(){
				this.$router.push('/download')
			},
			jumpUserprofile(){
				this.$router.push('/profile')
			},
			showOption(){
				this.isShowLoginOption = true
			},
			hideOption(){
				this.isShowLoginOption = false	
			},
			logout(){
				this.$store.state.user = null
			}
		},
		computed:{
			isUserLogin(){
				return this.$store.state.user != null
			},
			userHeadImg(){
				return 'background-image: url('+
				this.$baseip+'/public/user/'+this.$store.state.user.uid+'/head.jpeg);'
				+'background-size:100% 100%;'
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/topbar/topbar.css");
</style>
