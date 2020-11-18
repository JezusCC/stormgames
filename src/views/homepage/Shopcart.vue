<template>
	<div class="shopcartbox">
		<!-- 结算板 -->
			<div v-if="shopcart.length>0" class="shopcart-banner">
				<div v-for="(item,index) in shopcart" class="shopcart-banner-item">
					<!-- 选择盒 -->
					<div class="shopcart-banner-item-type">
						<input type="checkbox" v-model="shopcart[index].selected" />
					</div>
					<!-- 结算详情 -->
					<div class="shopcart-banner-item-detail">
						<img :src="item.imgurl" alt="">
						<div>
							<span>商品: {{item.name}}</span>
							<span>单价: {{item.price}}</span>
							<span> × {{item.count}}</span>
							<span>收件人: {{item.recived}}</span>
						</div>
					</div>
					<!-- 操作 -->
					<div class="shopcart-banner-item-option">
						<button>收藏</button>
						<button @click="removeItem(index)">移除</button>
					</div>
				</div>
			</div>
			<div v-else class="shopcart-banner-else">
				<h1>购物车空空如也</h1>
				<p>您可在<router-link to="/product">商城</router-link>中选购后,回到此页面结算</p>
			</div>
		<!-- 结算栏 -->
		<div class="shopsettlement">
			<!-- 全选盒 -->
			<div class="shopsettlement-all">
				<input type="checkbox" v-model="allSelected" @click="selectedAll()" />
				<span>全选</span>
			</div>
			<!-- 结算盒 -->
			<div class="shopsettlement-pay">
				<div class="shopsettlement-pay-span">
					<span>总计 ￥:{{totalPrice}}</span>
					<span>余额 ￥:{{accountMoney}} <a href="">充值</a></span>
				</div>
				<button :class="{'wattingpay':checkWattingPay()>0}">去结算</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				shopcart:[
					{imgurl:'aaa',name:'GTA V',price:59,count:1,selected:false,recived:'2812903195@qq.com'},
					{imgurl:'aaa',name:'CS:GO',price:88,count:1,selected:false,recived:'2812903195@qq.com'},
					
				],
				allSelected:false
			}
		},
		methods:{
			getShopcart(){
				
			},
			checkWattingPay(){
				let result = 0
				for(let i of this.shopcart){
					if(i.selected){
						result++
					}
				}
				(result==this.shopcart.length && result!=0)?
				(this.allSelected = true):
				(this.allSelected = false)
				return result
			},
			selectedAll(){
				this.allSelected = !this.allSelected
				for(let i of this.shopcart){
					i.selected = this.allSelected
				}
			},
			removeItem(idx){
				this.shopcart.splice(idx,1);
			}
		},
		computed:{
			totalPrice(){
				let price = 0
				for(let i of this.shopcart){
					if(i.selected){
						price += i.price
					}
				}
				return price
			},
			accountMoney(){
				return this.$store.state.user.money
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/shopcart.css");
</style>
