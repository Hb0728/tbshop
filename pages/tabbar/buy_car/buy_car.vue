<template>
	<view>
		<view class="empty-box" v-if="carList.length==0">
			当前购物车为空噢
		</view>
		<view v-else class="" v-for="item in carList" :key="item.content_id">
			{{item.content_id}}
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
			
		},
		computed:{
			...mapGetters(['carList']),
		},
		onLoad() {
			console.log(this)
		}
	}
</script>

<style>

</style>
