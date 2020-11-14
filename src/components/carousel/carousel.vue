<template>
	<div class="carouselbox">
		<div class="carousel-left" @click="decrementIndex()"><span>&lt;</span></div>
		<div class="carousle-center">
			<div @mouseenter="stopSwitch()" @mouseleave="startSwitch()"
			class="carousel-items">
				<transition-group tag="ul" name="image">
					<li v-for="(item,index) in carouselArr" 
					v-show="index == carouselIdx"
					:key="index">
						<img :src="item.imgurl" :alt="item.jmpurl">
					</li>
				</transition-group>
			</div>
			<!-- 幻灯片下面的点点 -->
			<div class="carousle-index">
				<ul>
					<li v-for="(item,index) in getCarouselNums" @click="switchToIndex(index)">
						<span :class="{'carousel-idx-active':index == carouselIdx}"></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="carousle-right" @click="incrementIndex()"><span>&gt;</span></div>
	</div>
</template>

<script>
	export default {
		name:'Carousel',
		created() {
			this.openTimer(3000)
			this.getCarousels()
		},
		data(){
			return {
				carouselArr:[],
				carouselIdx:0,	//当前幻灯片索引
				carouselAuto:true,	//是否自动播放
				carouselTimer:null	//自动播放定时器
			}
		},
		methods:{
			incrementIndex(){
				this.carouselIdx++
				if(this.carouselIdx>this.carouselArr.length-1){
					this.carouselIdx = 0
				}
			},
			decrementIndex(){
				this.carouselIdx--
				if(this.carouselIdx<0){
					this.carouselIdx = this.carouselArr.length-1
				}
			},
			startSwitch(){
				this.carouselAuto = true
			},
			stopSwitch(){
				this.carouselAuto = false
			},
			switchToIndex(index){
				this.carouselIdx = index
			},
			openTimer(pass){
				this.carouselTimer = setInterval(()=>{
					if(this.carouselAuto){
						this.incrementIndex()
						
					}	
				},pass)
			},
			getCarousels(){
				this.$axios.get('http://121.196.110.115:4000/carousel').then(
				(result)=>{
					this.carouselArr = result.data.items
				})
			}
		},
		computed:{
			getCarouselNums(){
				return this.carouselArr.length
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/carousel/carousel.css");
</style>
