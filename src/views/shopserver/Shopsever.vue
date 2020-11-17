<template>
	<div class="max">
		<p>stormgames客服</p>
		<span>{{getUserInfo.account}}，您有什么需要帮忙的吗？</span>
		<div class="changebox">
			<div class="server_left">
				<ul>
					<li v-for="(item,index) in serverOption" :style="generateRandomColor()"
						@click="showDetailOption(index)">
					{{item}}
					</li>
				</ul>
			</div>
			<div class="server_right">
				<ul  v-if="clickItem == 1000">
					<li v-for="item in more" :style="generateRandomColor()">
					{{item}}
					</li>
				</ul>
				<form action="" v-else-if="clickItem == 0">
					<div class="close" @click="resetClickItem()">
						<strong>✖</strong>
					</div>
					<table>
						<tr>
							<h3>您是否有无法在Stormgames游戏库中搜索到的游戏呢？</h3>	
							<h3>请您帮我们一起完善Stormgames的游戏库吧！</h3>
							<h3>请在下面的方框内填写相关信息，我们会在2个工作日内给您答复！</h3>
							<h3>感谢您对Stormgames的支持！</h3>
						</tr>
						<tr>
							游戏名称：
							<input type="text" name="gname" required>
							<span style="color: #FF0000; font-size: 1.5rem;">&nbsp;*</span>
						</tr>
						<tr>
							游戏类型：
							<input type="text" name="kind">
						</tr>
						<tr>
							游戏发行时间：
							<input type="text" name="time">
						</tr>
						<tr>
							开发商：
							<input type="text" name="kind">
						</tr>
						<tr>
							发行商：
							<input type="text" name="kind">
						</tr>
						<tr>
							<input type="submit" name="submit">
						</tr>
					</table>
				</form>
				<form action="" v-else-if="clickItem == 1">
					<div class="close" @click="resetClickItem()">
						<strong>✖</strong>
					</div>
					<table>
						<tr>
							<h3>您的商品出现了那些问题？</h3>
						</tr>
						<tr>
							游戏名称：
							<input type="text" name="gname" required>
							<span style="color: #FF0000; font-size: 1.5rem;">&nbsp;*</span>
						</tr>
						<tr>
							<td>
								DLC或额外内容缺失
								<input type="radio">
							</td>
							<td>
								与预期不符
								<input type="radio">
							</td>
						</tr>
						<tr>
							<td>
								我从零售商处购买的序列号有问题
								<input type="radio">
							</td>
							<td>
								不在我的库中
								<input type="radio">
							</td>
						</tr>
						<tr>
							游戏上或技术性的问题
							</br><textarea rows="10" cols="40" placeholder="请输入您碰到的问题"></textarea>
						</tr>
						<tr>
							我想从帐户中移除这款游戏
							</br><textarea rows="10" cols="40" placeholder="请输入您碰到的问题,客服小姐姐会在2小时内与您联系"></textarea>
						</tr>
						<tr>
							<input type="submit" name="submit">
						</tr>
					</table>
				</form>
				<form action="" v-else-if="clickItem == 2">
					<div class="close" @click="resetClickItem()">
						<strong>✖</strong>
					</div>
					<table>
						<tr>
							请输入您的订单号：
							<input type="text" name="ONumber" required>
							<span style="color: #FF0000; font-size: 1.5rem;">&nbsp;*</span>
						</tr>
						<tr>
							请选择您当时充值的方式：
							微信支付<input type="radio">
							支付宝支付<input type="radio">
							银行卡支付<input type="radio">
							充值卡支付<input type="radio">
						</tr>
						<tr>
							充值金额未到账
							<input type="radio">
						</tr>
						<tr>
							如充值金额有误，请输入您充值的金额：
							<input type="text" size="3">
						</tr>
						<tr>
							其他类型问题<br>
							<textarea cols="40" rows="10" placeholder="请在此具体描述您的问题"></textarea>
						</tr>
						<tr>
							<input type="submit" name="submit">
						</tr>
					</table>
				</form>
				<form action="" v-else-if="clickItem == 3">
					<div class="close" @click="resetClickItem()">
						<strong>✖</strong>
					</div>
					
				</form>
			</div>
		</div>
		<button @click="warningCilckItem()">人工客服</button>
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
					'充值问题'
				],
				more:[
					'游戏未添加到我库中，游戏序列号出错等',
					'退款，DLC或额外内容缺少等',
					'充值未到账，我的扣除金额有误等'
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
				if(this.clickItem == idx){
					this.clickItem = 1000
				}else{
					this.clickItem = idx
				}			
			},
			resetClickItem(){
				this.clickItem = 1000
			},
			warningCilckItem(){
				alert('哎呀，网络繁忙，与客服小姐姐联系中断！')
			}
			
		},
		computed:{
			getUserInfo(){
				return this.$store.state.user
			}
		}
	}
</script>
<style>
	@import url("../../assets/css/shopserver/shopserver.css");
</style>
