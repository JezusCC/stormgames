import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		user:{
			id:100000
		}
  },
  mutations: {
		loginSuccess:(userData)=>{
			this.state.user = userData
		}
  },
  actions: {
  },
  modules: {
  }
})
