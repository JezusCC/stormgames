<template>
	<div class="carouselbox">
		<div class="carousel-left"></div>
		<div class="carousle-center">
			<div @mouseenter="stopSwitch()" @mouseleave="startSwitch()"
			class="carousel-items">
				<ul>
					<li v-for="item in carouselArr">
						<img :src="item.imgurl" alt="">
					</li>
					<li>
						<img :src="carouselArr[0].imgurl" alt="">
					</li>
				</ul>
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
		<div class="carousle-right"></div>
	</div>
</template>

<script>
	export default {
		name:'Carousel',
		data(){
			return {
				carouselArr:[
					{imgurl:'aaa',jmpurl:'bbb'},
					{imgurl:'aaa',jmpurl:'bbb'},
					{imgurl:'aaa',jmpurl:'bbb'},
					{imgurl:'aaa',jmpurl:'bbb'}
				],
				carouselIdx:0,
				carouselAuto:true
			}
		},
		methods:{
			startSwitch(){
				this.carouselAuto = true
			},
			stopSwitch(){
				this.carouselAuto = false
			},
			switchToIndex(index){
				this.carouselIdx = index
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
