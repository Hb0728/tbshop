<template>
	<view class="content_bar">
		<slot name="icon"></slot>
		<view class="d-flex align-items-center ">
			<button class="mx-0 joinCar btn-lit-orange" @click="joinCar">加入购物车</button>
			<button class="mx-0 nowBuy btn-orange">立即购买</button>
		</view>
	</view>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		name:"content_bar",
		data() {
			return {
				
			};
		},
		methods:{
			joinCar(){
				this.addcarList(this.content_info)
				uni.showToast({
					title: '加入购物车成功',
					duration: 2000
				});
			},
			...mapActions(['addcarList'])
			
		},
		props:['content_info']
	}
</script>

<style lang="scss">
	.content_bar{
		padding: 0 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		background-color: #fff;
		height: 150rpx;
		bottom: 0;
		left: 0;
		right: 0;
		padding-top: 20rpx;
		padding-bottom:60rpx;
		box-sizing: border-box;
	}
	.btn-orange{
		background-color: #FF5800;
		font-size: 12px;
		color: #fff;
	}
	.btn-lit-orange{
		background-color: #FFA102;
		font-size: 12px;
		color: #fff;
	}
	.joinCar{
		border-top-left-radius:1600px;
		border-bottom-left-radius: 1600px;
		width: 200rpx;
		height: 75rpx;
		line-height: 75rpx;
	}
	.nowBuy{
		border-top-right-radius: 1600px;
		border-bottom-right-radius: 1600px;
		width: 200rpx;
		height: 75rpx;
		line-height: 75rpx;
	}
</style>