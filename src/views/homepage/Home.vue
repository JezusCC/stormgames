<template>
	<div class="contain">
		<!-- 顶部导航栏 -->
		<div class="nav">
			<ul>
				<li><router-link to="/home">主页</router-link></li>
				<li><router-link to="/libirary">库</router-link></li>
				<li><router-link to="/profile">个人资料</router-link></li>
				<li><router-link to="news">游戏新闻</router-link></li>
			</ul>
		</div>
		<!-- 左侧固定标签 -->
		<div class="categorybox">
			<h4>筛选您想要的</h4>
			<div v-for="list in categoryList">
				<h5>{{list.title}}</h5>
				<ul>
					<li v-for="item in list.item" @click="jumpToSearch()">{{item}}</li>
					<li @click="toTop()">回到顶部</li>
				</ul>
			</div>
		</div>
		<!-- 中部内容列表 -->
		<div>
			<!-- 上部轮播图-->
			<carousel></carousel>
			<!-- 卡片容器，容器内可盛放4张卡片：近期最热 -->
			<cardbox :items="getItems('hot')" name="近期热门"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：商城上新 -->
			<cardbox :items="getItems('new')" name="商城上新"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：特惠商品 -->
			<cardbox :items="getItems('count')" name="特惠商品"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：免费商品 -->
			<cardbox :items="getItems('free')" name="免费商品"></cardbox>
		
		</div>
	</div>
</template>
<script>
	import cardbox from '../../components/cardbox/cardbox.vue'
	import carousel from '../../components/carousel/carousel.vue'
	export default {
		name:'Home',
		components:{
			cardbox,
			carousel
		},
		data(){
			return {
				categoryList:[
					{title:'推荐商品',item:['高分评价推荐','高销量商品']},
					{title:'按类型筛选',item:['角色扮演','开放世界','第一人称','模拟经营','策略竞速','动作冒险']},
					{title:'平台',item:['PC','游戏主机','移动端','虚拟现实','storm云']}
				]
			}
		},
		methods:{
			getItems(type){
				if(type === 'hot'){
					//请求
					return [
						{imgurl:'aaa',jmpurl:'http://121.196.110.115:4000/test'},
						{imgurl:'aaa',jmpurl:'https://www.baidu.com'},
						{imgurl:'aaa',jmpurl:'bbb'},
						{imgurl:'aaa',jmpurl:'bbb'}
					]
				}else if(type === 'new'){
					//请求
					return [
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'}
					]
				}else if(type === 'count'){
					//请求
					return [
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'}
					]
				}else if(type === 'free'){
					//请求
					return [
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'},
						{imgurl:'aaa',jmpurl:'#'}
					]
				}
			},
			jumpToSearch(){
				this.$router.push('/search_product')
			},
			toTop(){
				window.scrollTo(0,0)
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/home.css");
</style>
