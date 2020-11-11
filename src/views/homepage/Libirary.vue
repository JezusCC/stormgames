<template>
	<div>
		<!-- 左边库列表 -->
		<div>
			<!-- 列表分类 -->
			<div v-for="item in getProcessCategory()">
				<h2>{{item.title}}</h2>
				<ul>
					<li v-for="game in item.games" @click="chooseGameDetail(item.index)">{{game.name}}</li>
				</ul>
			</div>
		</div>
		<!-- 中间内容面板 -->
		<div>
			<!-- 横幅 -->
			<div>
				<img :src="gameDetail.imgurl" alt="">
			</div>
			<div>
				<h2>{{gamesList.length>0?gamesList[currentIndex].name:''}}</h2>
				<div>
					<span>共游玩:{{gameDetail.time}}小时</span>
					<span>最后运行于:{{gameDetail.lastrun}}</span>
				</div>
				<button>商店页面</button>
				<button>模组查询</button>
			</div>
			<!-- 下部新闻面板 -->
			<div>
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
		<!-- 右侧添加内容 -->
		<div>
			<!-- 成就列表 -->
			<div>
				<ul>
					<li>
						<div>
							<img src="" alt="">
							<span></span>
							<span></span>
						</div>
					</li>
				</ul>
			</div>
			<!-- 一起玩好友 -->
			<div>
				<ul>
					<li>
						<div>
							<img src="" alt="">
							<span></span>
							<span></span>
						</div>
					</li>
				</ul>
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
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/homepage/libirary.css");
</style>
