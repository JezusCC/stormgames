<template>
  <div id="app">
    <topbar>
			<ul slot="navlist">
				<li><img src="./assets/img/stormlogo.png" alt="#logo"></li>
				<li><router-link to="/home">主页</router-link></li>
				<li><router-link to="/community">玩家社区</router-link></li>
				<li><router-link to="/developer">开发者社区</router-link></li>
				<li><router-link to="/shopserver">客服</router-link></li>
			</ul>
		</topbar>
<!-- 		<keep-alive>
			
		</keep-alive> -->
		<router-view></router-view>
  </div>
</template>

<script>
	import indexhome from './views/homepage/Home.vue'
	import topbar from './components/topbar/topbar.vue'
	export default {
		components:{
			indexhome,
			topbar
		}
	}
	
</script>

<style>
@import url("assets/css/base.css");
</style>
