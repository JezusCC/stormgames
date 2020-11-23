<template>
	<div class="pdbox">
		<div class="pdbox-top">
			<!-- 第一部分：图片部分 -->
			<div class="pdpart1">
				<!-- 大图 -->
				<div class="pdpart1-bigimg">
					<img src="" alt="">
				</div>
				<!-- 小图列表 -->
				<div class="pdpart1-smimg">
					<ul>
						<li v-for="(item,index) in [0,1,2,3,4]"><img src="" alt=""></li>
					</ul>
				</div>
			</div>
			<!-- 第二部分：详情部分 -->
			<div class="pdpart2">
				<!-- 介绍部分 -->
				<div class="pdpart2-desc">
					<h2>{{'GTA V'}}</h2>
					<p>本作为《侠盗猎车手》系列最新作，
					由Rockstar North制作，Rockstar Games发行。
					游戏采用新版雷霆引擎(RAGE引擎)，
					游戏故事发生以美国洛杉矶及其周边地区为原型的城市Los Santos，
					是现实地区中的洛杉矶和南加州。制作单位拍摄了超过25万张相关照片，
					并且研究了人口调查和汽车销售数据，以建立游戏中的世界。</p>
				</div>
				<div class="pdpart2-opt">
					<!-- 价格 -->
					<div class="pdpart2-opt-price">
						<span>原价:{{119}}</span>
						<span>现价:{{59}}</span>
					</div>
					<button>加入购物车</button>
					<button>购买</button>
				</div>
			</div>
		</div>
		<!-- 第三部分：评论部分 -->
		<div class="pdpart3">
			<div class="pdpart3-comments">
				<span>评论:</span>
				<input type="text" placeholder="在此输入您的评论..." />
			</div>
			<div class="pdpart3-rating">
				<span>评分:{{rating}}</span>
				<ul>
					<li v-for="(item,index) in [0,1,2,3,4]"
						@mouseover="coverRating(index)"
						@mouseout="recoverRating()"
						@click="setRating(index)">
						<img v-if="(index+1)*2 <= rating" src="../../assets/img/sprite/starlight.png" alt="">
						<img v-else-if="(index+1)*2-1 == rating" src="../../assets/img/sprite/halfstar.png" alt="">
						<img v-else-if="(index+1)*2 > rating" src="../../assets/img/sprite/stardark.png" alt="">
					</li>
				</ul>
				<button>提交评论</button>
			</div>
		</div>
		<!-- 第四部分：评论详情 -->
		<div class="pdpart4">
			
			<div class="pdpart4-item" v-for="(item,index) in comments">
				<div class="pdpart4-item-content">
					<span>{{item.user}}</span>
					<span>评论日期:{{item.date}}</span>
					<p>{{item.content}}</p>
				</div>
				<div class="pdpart4-item-opt">
					<div @click="dianzan(index)">
						<img src="../../assets/img/sprite/dzdark.png" alt="" v-if="!item.opt">
						<img src="../../assets/img/sprite/dzlight.png" alt="" v-else>
						<span>({{item.nice}})</span>
					</div>
					<div>
						<img src="../../assets/img/sprite/jubao.png" alt="">
						<span>举报</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				rating:5,
				temprating:0,
				comments:[]
			}
		},
		created() {
			this.getComments()
		},
		methods:{
			coverRating(index){
				this.temprating = this.rating
				this.rating = (index+1) * 2
			},
			recoverRating(){
				this.rating = this.temprating
			},
			setRating(index){
				this.temprating = (index+1) * 2
			},
			getComments(){
				this.comments = [
					{
						user:'用户一',
						date:'2020-11-23',
						nice:6371,
						opt:false,
						content:'很满意的一次购物，下次我还买'
					},
					{
						user:'用户二',
						date:'2020-11-07',
						nice:250,
						opt:false,
						content:'你这个游戏害人不浅哪，我儿子才十二岁啊，天天看你们这个。'
					}
				]
			},
			dianzan(index){
				if(!this.comments[index].opt){
					this.comments[index].opt = true
					this.comments[index].nice++
				}else{
					this.comments[index].opt = false
					this.comments[index].nice--
				}
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/product_detail.css");
</style>
