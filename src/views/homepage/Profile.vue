<template>
	<div class="probox" :style="getBackgroundImg">
		<h2>基本资料</h2>
		<!-- 头部 -->
		<div class="probasic">
			<!-- 头像 -->
			<img :src="getUserHeadImg" alt="">
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
					<span>总游戏时长:{{getUserInfo.gametime}}时</span>
				</div>
				<div class="probasic-info-line">
					<span>用户等级:{{getUserInfo.level}}级</span>
				</div>
				<div class="probasic-info-line">
					<span>态度:</span>
					<textarea v-model="getUserInfo.attitude" 
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
						<input type="text" v-model="userDetail.nickname" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>生日:</span>
						<input type="text" v-model="userDetail.birthday" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>性别:</span>
						<input type="text" v-model="userDetail.sex" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>地区:</span>
						<input type="text" v-model="userDetail.place" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>手机:</span>
						<input type="text" v-model="userDetail.phone" 
						:disabled="detailShowFlag==0">
					</div>
					<div>
						<span>实名认证:</span>
						<input type="text" :value="userDetail.identity?'已实名':'未实名'" 
						disabled>
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
			<!-- 最近常玩 -->
			<div class="prodetail-playinfo">
				<h2>最近常玩</h2>
				<ul v-if="getPlayInfo.length>0">
					<li></li>
				</ul>
				<p v-else>您暂时还没有游玩记录</p>
			</div>
			<!-- 留言区 -->
			<div class="prodetail-record">
				<h2>用户留言</h2>
				<ul v-if="getRecordList.length>0">
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
				<p v-else>留言板空空如也</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isModifySayInfo:false,
				detailShowFlag:0,
				userDetail:{}
			}
		},
		created() {
			this.getUserDetail()
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
				this.isModifySayInfo = !this.isModifySayInfo
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
					alert('您的个人资料已更新')
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
			},
			getUserDetail(){
				this.$axios.get(this.$baseip+'/userinfo?uid='+this.$store.state.user.uid)
				.then((result)=>{
					this.userDetail = result.data
				})
			}
		},
		computed:{
			getBackgroundImg(){
				let imgsrc = this.$baseip+'/public/user/'+this.$store.state.user.uid+'/background.jpg'
				return 'background-image: url('+imgsrc+');'
			},
			getUserHeadImg(){
				return this.$baseip+'/public/user/'+this.$store.state.user.uid+'/head.jpeg'
			},
			getUserInfo(){
				return this.$store.state.user
			},
			getPlayInfo(){
				return []
			},
			getRecordList(){
				return [
					// {}
				]
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/profile.css");
</style>
