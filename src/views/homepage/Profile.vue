<template>
	<div class="probox" :style="getBackgroundImg">
		aaa
	</div>
</template>

<script>
	export default {
		computed:{
			getBackgroundImg(){
				let imgsrc = 'http://localhost:4000/public/carousel/fate.jpg'
				return 'background-image: url('+imgsrc+');'
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/profile.css");
</style>
