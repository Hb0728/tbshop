import vuex from 'vuex'
import Vue from 'vue'
import getters from '@/store/getter.js'
import buyCar from '@/store/modules/buy_car.js'

// 注册vuex
Vue.use(vuex);

const store =new vuex.Store({
	getters,
	modules:{
		buyCar
	}
})


export default store
