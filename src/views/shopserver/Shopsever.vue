<template>
	<div class="max">
		<div class="changebox">
			<div class="server_left">
				<ul>
					<li v-for="(item,index) in serverOption" :style="generateRandomColor()"
						@click="showDetailOption(index)">
					{{item}}
					</li>
				</ul>
			</div>
			<div class="server_right"  @mouseout="resetClickItem()">
				<ul  v-if="clickItem == 1000">
					<li v-for="item in more" :style="generateRandomColor()">
					{{item}}
					</li>
				</ul>
				<form action="" v-else-if="clickItem == 0">
					
				</form>
				<form action="" v-else-if="clickItem == 1">
					123456
				</form>
				<form action="" v-else-if="clickItem == 2">
					123456
				</form>
				<form action="" v-else-if="clickItem == 3">
					123456
				</form>
			</div>
		</div>
		<button>人工客服</button>
	</div>
	
</template>

<script>
	import cardbox from '../../components/cardbox/cardbox.vue'
	export default {
		data(){
			return{
				serverOption:[
					'游戏添加', 
					'商品问题',
					'账户问题',
					'开发者疑难'
				],
				more:[
					'游戏未添加到我库中，游戏序列号出错等',
					'退款，DLC或额外内容缺少等',
					'充值未到账，我的扣除金额有误等',
					'stormgames硬件帮助，客户端问题等'
				],
				clickItem:1000
			}
		},
		methods:{
			generateRandomColor(){
				//rgba
				let r = Math.floor(Math.random() * (255 - 0)) + 0
				let g = Math.floor(Math.random() * (255 - 0)) + 0
				let b = Math.floor(Math.random() * (255 - 0)) + 0
				return 'background-color:rgba('+r+','+g+','+b+','+1+');'
			},
			showDetailOption(idx){
				this.clickItem = idx
			},
			resetClickItem(){
				this.clickItem = 1000
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/shopserver/shopserver.css");
</style>
