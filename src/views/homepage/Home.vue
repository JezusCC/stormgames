<template>
	<div class="contain">
		<!-- 顶部导航栏 -->
		<div class="nav">
			<ul>
				<li><router-link to="/home">主页</router-link></li>
				<li><router-link to="/libirary">库</router-link></li>
				<li><router-link to="/profile">个人资料</router-link></li>
				<li><router-link to="/shopcart">购物车</router-link></li>
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
			<cardbox :items="hotProduct" name="近期热门"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：商城上新 -->
			<cardbox :items="newProduct" name="商城上新"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：特惠商品 -->
			<cardbox :items="countProduct" name="特惠商品"></cardbox>
			<!-- 卡片容器，容器内可盛放4张卡片：免费商品 -->
			<cardbox :items="freeProduct" name="免费商品"></cardbox>
		
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
		created:function(){
			this.getItems('hot')
			this.getItems('new')
			this.getItems('count')
			this.getItems('free')
		},
		data(){
			return {
				categoryList:[
					{title:'推荐商品',item:['高分评价推荐','高销量商品']},
					{title:'按类型筛选',item:['角色扮演','开放世界','第一人称','模拟经营','策略竞速','动作冒险']},
					{title:'平台',item:['PC','游戏主机','移动端','虚拟现实','storm云']}
				],
				hotProduct:[],
				newProduct:[],
				countProduct:[],
				freeProduct:[]
			}
		},
		methods:{
			getItems(type){
				if(type === 'hot'){
					//请求
					console.log(this.$baseip+'/product_hot')
					this.$axios.get(this.$baseip+'/product-hot').then((items)=>{
						this.hotProduct = items.data.hotproduct
					},(err)=>{
						console.log(err)
					})
				}else if(type === 'new'){
					//请求
					this.$axios.get(this.$baseip+'/product-new').then((items)=>{
						this.newProduct = items.data.newproduct
					},(err)=>{
						console.log(err)
					})
				}else if(type === 'count'){
					//请求
					this.$axios.get(this.$baseip+'/product-count').then((items)=>{
						this.countProduct = items.data.countproduct
					},(err)=>{
						console.log(err)
					})
				}else if(type === 'free'){
					//请求
					this.$axios.get(this.$baseip+'/product-free').then((items)=>{
						this.freeProduct = items.data.freeproduct
					},(err)=>{
						console.log(err)
					})
				}
			},
			jumpToSearch(){
				this.$router.push('/product')
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
