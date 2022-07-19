<template>
	<view>
		<view class="empty-box" v-if="carList.length==0">
			当前购物车为空噢
		</view>
		<view v-else class="" v-for="item in carList" :key="item.content_id">
			<label>
				<checkbox :value="item.isSelected" :checked="item.isSelected" @click="changeSelected(item.isSelected)"/>
				<text></text>
			</label>
		
			名称：{{item.content_id}}
			数量：{{item.num}}
			价格：{{item.price}}
		</view>
		<view class="text-right">
			总价：{{allPrice}}
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeSelected(){
				
			}
		},
		computed:{
			...mapGetters(['carList']),
			allPrice(){
				let allprice=0
				this.carList.forEach(item=>{
					console.log(item.price*item.num)
					
					allprice+=(item.price*item.num)
				})
				return allprice
			}
		},
		onLoad() {
			console.log(this)
		}
	}
</script>

<style>

</style>
