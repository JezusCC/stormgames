<template>
	<!-- 使用浮动布局，可容纳四个卡片，包含一个更多标签 -->
	<div class="cardbox">
		<div class="cardhead"><span>{{name}}</span><button>浏览更多</button></div>
		<ul v-if="items.length>0">
			<li v-for="(item,index) in items">
				<img :src="item.imgurl"  @click="jumpUrl(index,$event)" alt="">
			</li>
		</ul>
		<div class="cardbox-loading" v-else><img src="../../assets/img/sprite/loading.png" alt=""></div>
	</div>
</template>

<script>
	export default {
		//参数为一个数组，数组内是一个json，包含图片地址和跳转地址
		props:{
			items:{
				required:true
			},
			name:{
				default:'未命名卡片'
			}
		},
		methods:{
			jumpUrl(index,e){
				window.location.href = this.items[index].jmpurl
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../assets/css/cardbox/cardbox.css");
</style>
