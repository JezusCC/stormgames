import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
	},
	{
		path: '/community',
		component: () => import('../views/community/Community.vue')
	},
	{
		path: '/developer',
		component: () => import('../views/developer/Developer.vue')
	},
  {
    path: '/home',
    component: () => import('../views/homepage/Home.vue')
  },
	{
	  path: '/libirary',
	  component: () => import('../views/homepage/Libirary.vue')
	},
	{
	  path: '/profile',
	  component: () => import('../views/homepage/Profile.vue')
	},
	{
	  path: '/shopcart',
	  component: () => import('../views/homepage/Shopcart.vue')
	},
	{
		path:'/login',
		component:() => import('../views/signio/Login.vue')
	},
	{
		path:'/register',
		component:() => import('../views/signio/Register.vue')
	},
	{
			path:'/download',
			component:() => import('../views/homepage/Download.vue')
	},
	{
		path:'/product',
		component:() => import('../views/homepage/Product.vue')
	},
	{
		path:'/shopserver',
		component:()=>import('../views/shopserver/Shopsever.vue')
	},
	{
		path:'/pro_detail',
		component:()=>import('../views/homepage/Product_Detail.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	if(to.path == '/libirary' || to.path == '/profile' || to.path == '/shopcart'){
		if(store.state.user==null){
			alert('您需要先登录才可访问')
			next('login')
		}
	}
	next()
})

export default router
