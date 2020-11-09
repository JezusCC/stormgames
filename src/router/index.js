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
	  path: '/news',
	  component: () => import('../views/homepage/News.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	if(to.path == '/libirary' || to.path == '/profile'){
		//if(store.state.user==null){
		//	next('login')
		//}
	}
	next()
})

export default router
