<template>
	<div class="productBox">
		<!-- 分类 -->
		<div class="screenBox">
			<h3>筛选</h3>
			<!-- 库中检索 -->
			<div class="screen-searchBox">
				<input type="text" v-model="searchText" placeholder="检索库中..."/>
				<button></button>
			</div>
			<!-- 筛选区间 -->
			<div class="screen-priceRange">
				<span>价格区间</span>
				<input type="text" v-model="minPrice" maxlength="7" /> 至
				<input type="text" v-model="maxPrice" maxlength="7" />
			</div>
			<!-- 筛选分类 -->
			<div class="screen-category">
				<ul>
					<li v-for="(item,index) in screenGategory">
						<!-- 折叠筛选 -->
						<div class="screen-category-fold">
							<strong>{{item.title}}</strong>
							<button @click="foldCategory(index)">{{item.isFold?'+':'-'}}</button>
						</div>
						<!-- 详情筛选 -->
						<div class="screen-category-detail" v-show="!item.isFold">
							<ul>
								<li v-for="(li,lidx) in item.list" @click="pushScreenTag(index,lidx,$event)">
									{{li}}
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 面板 -->
		<div class="contentBox">
			<div class="contentBox-head">
				<strong>已选标签:</strong>
				<!-- 标签筛选 -->
				<ul>
					<li v-for="(item,index) in screenTags">
						<div class="contentBox-tags">
							<!-- 三角形 -->
							<div class="tags-triangle"></div>
							<!-- 标签 -->
							<div class="contentBox-tags-body">
								<span>{{item}}</span><button @click="removeTags(index)">×</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="contentBox-body">
				<ul>
					<li v-for="(item,index) in products">
						<div class="contentBox-body-item">
							<!-- 图片 -->
							<div class="contentBox-body-item-img">
								<img src="aaaaa" alt="">
								<!-- 折扣时显示 -->
								<span>-{{percents(index)}}%</span>
							</div>
							<!-- 文字描述 -->
							<div class="contentBox-body-item-sp">
								<strong @click="jumpToDetail(index)">{{item.name}}</strong>
								<span>价格:{{item.deprice}}</span>
								<span>{{item.description}}</span>
							</div>
							<!-- 操作 -->
							<div class="contentBox-body-item-opt">
								<button>立即购买</button>
								<button>加入购物车</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				screenGategory:[
					{
						title:'厂商',
						list:['无限制','Storm Games','Rockstar','CD Project Red','Valve','Epic Games'],
						isFold:true
					},
					{
						title:'类型',
						list:['无限制','动作冒险','射击闯关','开放世界','沙盒创造','角色扮演'],
						isFold:true
					},
					{
						title:'时间',
						list:['无限制','时间降序','时间升序','最近一年'],
						isFold:true
					},
					{
						title:'平台',
						list:['无限制','PC','XBox 360','Play Station','Storm Cloud'],
						isFold:true
					},
					{
						title:'猜你喜欢',
						list:[],
						isFold:true
					}
				],
				screenTags:[],
				//--------------
				searchText:'',
				//价格区间
				minPrice:'',
				maxPrice:'',
				products:[]
			}
		},
		created() {
			this.getProducts()
		},
		methods:{
			foldCategory(index){
				this.screenGategory[index].isFold = !this.screenGategory[index].isFold
			},
			pushScreenTag(midx,lidx,e){
				if(this.screenTags.length<6){
					this.screenTags.push(this.screenGategory[midx].list[lidx])
				}else{
					alert('至多选择6个标签')
				}
			},
			removeTags(index){
				this.screenTags.splice(index,1)
			},
			jumpToDetail(index){
				//选择物品后，将物品id传递过去
				this.$router.push({
					path:'/pro_detail',
					query:{
						pid:this.products[index].pid
					}
				})
			},
			getProducts(){
				this.$axios.get(this.$baseip+'/product').then((result)=>{
					this.products = result.data
				})
			},
			percents(index){
				let rp = this.products[index].deprice / this.products[index].price
				return (1-rp).toFixed(2) * 100
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/product.css");
</style>
