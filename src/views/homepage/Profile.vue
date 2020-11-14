<template>
	<div class="probox" :style="getBackgroundImg">
		<!-- 头部 -->
		<div class="probasic">
			<!-- 头像 -->
			<img src="" alt="">
			<!-- 基本资料显示区 -->
			<div class="probasic-info">
				<!-- 账户名 -->
				<div class="probasic-info-line">
					<span>账户名:</span><strong>{{getUserInfo.account}}</strong>
					<span>UID:</span><i>{{getUserInfo.uid}}</i>
				</div>
				<!-- 金钱相关 -->
				<div class="probasic-info-line">
					<span>余额:{{getUserInfo.money}}</span>
					<button class="recharge-btn">充值</button>
				</div>
				<!-- 游戏时长相关 -->
				<div class="probasic-info-line">
					<span>总游戏时长:{{getUserInfo.allplay}}时</span>
				</div>
				<div class="probasic-info-line">
					<span>态度:</span>
					<textarea v-model="getUserInfo.sayinfo" 
					:disabled="!isModifySayInfo"
					:style="{'background-color':(isModifySayInfo?'rgba(255,255,255,0.75)':'rgba(0,0,0,0)')}"
					@keydown.enter="submitSayInfo()">
					</textarea>
					<!-- 修改态度 -->
					<button class="sprite-pen" @click="modifySaiInfo()"></button>
				</div>
			</div>
		</div>
		<!-- 详细资料 -->
		<div class="prodetail">
			<!-- 资料头 -->
			<div class="prodetail-head">
				<h2>详细资料</h2>
				<div>
					<button @click="modifyUserPrivacy()">隐私设置</button>
					<button @click="modifyUserProfile()">修改资料</button>
				</div>
			</div>
			<!-- 资料体 -->
			<div class="prodetail-body">
				<!-- 公开资料 -->
				<form action="" v-if="(detailShowFlag == 0)||(detailShowFlag == 1) ">
					<div>
						<span>昵称:</span>
						<input type="text" v-model="getUserDetail.username" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>生日:</span>
						<input type="text" v-model="getUserDetail.birthday" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>性别:</span>
						<input type="text" v-model="getUserDetail.sex" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>地区:</span>
						<input type="text" v-model="getUserDetail.area" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>手机:</span>
						<input type="text" v-model="getUserDetail.phone" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>实名认证:</span>
						<input type="text" v-model="getUserDetail.identity" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<input type="submit" value="保存资料" v-show="detailShowFlag==1"
						@click.prevent="submitModifyProfile(true)">
						<input type="submit" value="放弃修改" v-show="detailShowFlag==1"
						@click.prevent="submitModifyProfile(false)">
					</div>	
				</form>
				<!-- 隐私设置 -->
				<form action="" v-else-if="detailShowFlag == 2">
					<div><span>修改隐私:</span><input type="text" value="---"></div>
					<div>
						<input type="button" value="提交修改" @click.prevent="submitModifyPrivacy(true)">
						<input type="button" value="放弃修改" @click.prevent="submitModifyPrivacy(false)">
					</div>			
				</form>
			</div>
			<!-- 留言区 -->
			<div class="prodetail-record">
				<h2>用户留言</h2>
				<ul>
					<li>
						<!-- 留言样式 -->
						<div class="prodetail-record-item">
							<img src="" alt="">
							<div>
								<!-- 留言用户 -->
								<span>1223374537@qq.com</span>
								<!-- 留言时间 -->
								<span>于 {{'2020-11-11'}} 说:</span>
							</div>
							<!-- 留言内容 -->
							<p>{{'我给你留了一条信息,你注意查看一下嘞!'}}</p>
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
				isModifySayInfo:false,
				detailShowFlag:0
			}
		},
		methods:{
			modifyUserProfile(){
				//开启资料修改
				this.detailShowFlag = 1
			},
			modifyUserPrivacy(){
				//开启隐私修改
				this.detailShowFlag = 2
			},
			modifySaiInfo(){
				this.isModifySayInfo = true
			},
			submitSayInfo(){
				//向服务器提交最新的签名
				//...
				this.isModifySayInfo = false
			},
			submitModifyProfile(flag){
				if(flag){
					//如果确认修改
					//提交修改
					alert('您的隐私信息已更新')
				}
				this.detailShowFlag = 0
			},
			submitModifyPrivacy(flag){
				if(flag){
					//如果确认修改
					//提交修改
					alert('您的隐私信息已更新')
				}
				this.detailShowFlag = 0
			}
		},
		computed:{
			getBackgroundImg(){
				let imgsrc = 'http://121.196.110.115:4000/public/user/100000/backgd.png'
				return 'background-image: url('+imgsrc+');'
			},
			getUserInfo(){
				return {
					uid:100000,
					account:'administrator',
					money:3005.27,
					allplay:198,
					sayinfo:'我就是我,不一样的烟火'
				}
			},
			getUserDetail(){
				return {
					username:'八级大狂风',
					birthday:'1998年6月6日',
					sex:'男',
					area:'中国-江西-南昌',
					phone:'170****3351',
					identity:true
				}
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/profile.css");
</style>
