const buyCar={
	state:{
		carList:[]
	},
	mutations:{
		ADDCARLIST(state,value){
			// // 购物车里是否有该商品。
			// let hasProduct= false
			// // 购物车为空
			// 	state.carList.forEach((item,index)=>{
			// 		if(item.content_id===value.content_id){
			// 			// 存在则数量+1
			// 			item.num+=1
			// 			hasProduct=true
			// 	})
			// }
			// if(!hasProduct){
			// 	// 不存在该商品  ，加入购物车，数量=1
			// 	value.num=1
			// 	state.carList.push(value)
			// }
			// console.log(state.carList)
			
			// 简便写法
			let hasProduct = false
			state.carList.forEach(item => {
			  // 存在则 + 1
			  if (item.content_id === value.content_id) {
			    item.num += 1
			    hasProduct = true
			    return
			  }
			})
			// 不存在，则加入购物车，数量为 1
			!hasProduct && state.carList.push({ ...value, num: 1 })
		},
	},
	actions:{
		addcarList(context,param){
			context.commit('ADDCARLIST',param)
		}
	},
}
export default buyCar