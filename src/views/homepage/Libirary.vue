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
				<img :src="gameDetail.imgurl" alt="商品横幅" />
			</div>
			<div class="detail-header">
				<h2>{{gamesList.length>0?gamesList[currentIndex].name:'暂无商品'}}</h2>
				<div class="detail-header-data">
					<span>共游玩:{{gameDetail.time}}小时</span>
					<span>最后运行于:{{gameDetail.lastrun}}</span>
				</div>
				<button>商店页面</button>
				<button>模组查询</button>
			</div>
			<!-- 下部新闻时间轴 -->
			<div class="timeline">
				<div v-for="item in gameUpdateNews" class="timeline-item">
					<!-- 圆点 -->
					<div class="timeline-item-circle"></div>
					<!-- 线 -->
					<div class="timeline-item-line">{{item.date}}</div>
					<!-- 新闻主体 -->
					<div class="timeline-item-body">
						<h3>{{item.title}}</h3>
						<p>{{item.info}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 右侧添加内容 -->
		<div class="libright">
			<!-- 成就列表 -->
			<div class="libright-card">
				<h4>获得成就</h4>
				<ul v-if="gameAchivements.length>0">
					<li v-for="ach in gameAchivements">
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
				<ul v-if="gameFriends.length>0">
					<li v-for="fir in gameFriends">
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
				<p v-else>您还未添加好友</p>
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
				togethers:[],
				achievements:[],
				currentIndex:0,
			}
		},
		methods:{
			getUserLibirarys(){
				this.$axios.get('http://localhost:4000/userlibirary')
				.then((result)=>{
					this.gamesList = result.data.items
				})
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
			
		},
		computed:{
			gameDetail(){
				//请求
				return {
					imgurl:'aaa',
					time:256,
					lastrun:'2020-11-11'
				}
			},
			gameUpdateNews(){
				//请求
				return [
					{date:'2020-11-11',title:'重大更新',info:'全新版本 V.1.8.0更新。除了修复已知bug外，我们还更新了庞大的可交互物品。现在，你可以真正体验到自由世界的快乐了！'},
					{date:'2020-11-11',title:'常规更新',info:'全新版本 V.1.7.95更新。修复已知bug，更新游戏内活动。'},
					{date:'2020-09-02',title:'枪械精通者',info:'成就已达成'},
					{date:'2020-09-01',title:'常规更新',info:'全新版本 V.1.7.76更新。新增了海威未来皮肤。调整枪械参数，修复游戏平衡性。'},
					{date:'2020-06-30',title:'重大更新',info:'全新版本 V.1.7.50更新。紧急修复了玩家反馈的里世界bug，同时调整了匹配机制，现在分数匹配差距不会超过300分。我们为每个玩家送上一份补偿礼包，很抱歉给您带来不便。本次更新新增了大量枪械涂装和人物迷彩，赶紧为您的角色换上全新的装备吧！'},
					{date:'2020-06-22',title:'首次游玩',info:'成就已达成'},
					{date:'2020-06-22',title:'',info:'现在已拥有此游戏'}
				]
			},
			gameAchivements(){
				//return []
				return [
					{imgurl:'aaa',name:'巅峰枪手',gaineddate:'2020-11-11'},
					{imgurl:'aaa',name:'枪械精通者',gaineddate:'2020-09-02'},
					{imgurl:'aaa',name:'首次游玩',gaineddate:'2020-06-22'}
				]
			},
			gameFriends(){
				//
				//return []
				return [
					{imgurl:'aaa',name:'韩红',state:'Fear of Layer'},
					{imgurl:'aaa',name:'李雷',state:'在线'},
					{imgurl:'aaa',name:'小明',state:'在线'},
					{imgurl:'aaa',name:'马保国',state:'GTA V'},
					{imgurl:'aaa',name:'James',state:'离线'}
				]
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/libirary.css");
</style>
