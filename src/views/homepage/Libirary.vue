<template>
	<div class="libirarybox">
		<!-- 左边库列表 -->
		<div class="gategory">
			<h2>分类列表</h2>
			<!-- 列表分类 -->
			<div v-for="item in getProcessCategory()" class="gategory-list">
				<h3>{{item.title}}</h3>
				<ul>
					<li v-for="game in item.games" @click="chooseGameDetail(game.index)">{{game.name}}</li>
				</ul>
			</div>
		</div>
		<!-- 中间内容面板 -->
		<div class="gamecontain">
			<!-- 横幅 -->
			<div class="detail-banner">
				<img :src="currentGamesDetail.imgurl" alt="商品横幅" />
			</div>
			<div class="detail-header">
				<h2>{{gamesList.length>0?gamesList[currentIndex].name:'暂无商品'}}</h2>
				<div class="detail-header-data">
					<span>共游玩:{{currentGamesDetail.time}}小时</span>
					<span>最后运行于:{{currentGamesDetail.lastrun}}</span>
				</div>
				<button>商店页面</button>
				<button>模组查询</button>
			</div>
			<!-- 下部新闻时间轴 -->
			<div class="timeline">
				<div v-for="item in currentGameNews" class="timeline-item">
					<!-- 圆点 -->
					<div class="timeline-item-circle"></div>
					<!-- 线 -->
					<div class="timeline-item-line">{{item.date}}</div>
					<!-- 新闻主体 -->
					<div class="timeline-item-body">
						<h3>{{item.title}}</h3>
						<p>{{item.content}}</p>
					</div>
				</div>
				<div v-show="currentGameNews.length<=0" class="timeline-nonews"><p>暂无更多消息</p></div>
			</div>
		</div>
		<!-- 右侧添加内容 -->
		<div class="libright">
			<!-- 成就列表 -->
			<div class="libright-card">
				<h4>获得成就</h4>
				<ul v-if="currentGameAchievements.length>0">
					<li v-for="ach in currentGameAchievements">
						<div class="libright-card-body">
							<img :src="ach.imgurl" alt="">
							<div class="libright-card-body-sp">
								<span>{{ach.name}}</span>
								<span>获得时间:{{ach.gaineddate}}</span>
							</div>
						</div>
					</li>
				</ul>
				<p v-else>您还没有获得此游戏任何成就</p>
			</div>
			<!-- 一起玩好友 -->
			<div class="libright-card">
				<h4>一起玩的好友</h4>
				<ul v-if="currentGamesTogethers.length>0">
					<li v-for="fir in currentGamesTogethers">
						<div class="libright-card-body">
							<img :src="fir.imgurl" alt="">
							<div class="libright-card-body-sp">
								<span>{{fir.name}}</span>
								<span>当前:
									<strong :style="getFriendsOnlineStyle(fir.state)">
									{{fir.state}}
									</strong>
								</span>
							</div>
						</div>
					</li>
				</ul>
				<p v-else>当前仅有您拥有此游戏</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		created(){
			this.getUserLibirarys()
		},
		data(){
			return {
				//{id,name,catename,imgurl}
				//默认值为：未分类和空列表
				gamesList:[{title:'未分类',games:[]}],
				//{number,date}
				currentGamesDetail:{},
				//[{imgurl,name,state}]
				currentGamesTogethers:[],
				//[{imgurl,name,date}]
				currentGameAchievements:[],
				//[{date,title,content}]
				currentGameNews:[],
				currentIndex:0,
			}
		},
		methods:{
			getUserLibirarys(){
				this.$axios.get(this.$baseip+'/userlibirary').then((result)=>{
					this.gamesList = result.data.items
				})
			},
			getCurrentGamesInfo(pid){
				this.$axios.get(this.$baseip+'/gameinfo?pid='+pid+'&uid='+this.$store.state.user.uid)
				.then((result)=>{
					this.currentGamesDetail = result.data.gameinfo.detail
					this.currentGameAchievements = result.data.gameinfo.achivements
					this.currentGamesTogethers = result.data.gameinfo.togethers
					this.currentGameNews = result.data.gameinfo.news
				},(err)=>{
					console.log(err)
				})
				// this.currentGameNews = [
				// 	{date:'2000-03-03',title:'更新',content:'我们有更新了'}
				// ]
			},
			getProcessCategory(){
				let ret = []
				//{title,games[name,idx]}
				let j = 0
				for(let i = 0;i<this.gamesList.length;i++){
					//检查当前遍历的游戏分类是否在分类列表中出现过
					for(;j<ret.length;j++){
						if(ret[j].title == this.gamesList[i].catename){
							ret[j].games.push({
								name:this.gamesList[i].name,
								index:i})
							break
						}
					}	
					//如果遍历到末尾了，说明并没有找到匹配的分类，则新建一个分类
					if(j >= ret.length){
						ret.push({title:this.gamesList[i].catename,games:[{name:this.gamesList[i].name,index:i}]})
						j = 0
					}
				}
				return ret
			},
			chooseGameDetail(idx){
				this.currentIndex = idx
				this.getCurrentGamesInfo(this.gamesList[this.currentIndex].id)
				window.scrollTo(0,0)
			},
			getFriendsOnlineStyle(state){
				if(state == '在线'){
					return 'color:#0078F2'
				}
				else if(state == '离线'){
					return 'color:#BFBFBF'
				}
				else{
					return 'color:#44FF44'
				}
			}
		},
		components:{
			
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/libirary.css");
</style>
