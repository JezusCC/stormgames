<template>
	<div>
		<div>
			<ul>
				<li v-for="item in serverOption" 
					@mouseenter="optionAnimate()"
					@click="showDetailOption()">
				{{item}}
				</li>
			</ul>                                                                                                                               
		</div>
		<div>
			<ul>
				<li ></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				serverOption:[
					'游戏添加', 
					'商品问题',
					'账户问题',
					'开发者疑难'
				]
			}
		},
		methods:{
			optionAnimate(){
				
			},
			showDetailOption(){
				
			}
		}
	}
</script>

<style>
	@import url("../../assets/css/shopserver/shopserver.css");
</style>
