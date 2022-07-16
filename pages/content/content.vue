<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://picsum.photos/id/66/375/150" style="width: 750rpx;height: 300rpx;" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://picsum.photos/id/66/375/150" style="width: 750rpx;height: 300rpx;" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<content_bar>
			<view class="mr-2" @click="current_shop" slot="icon">
				<view class="text-center">
					<uni-icons type="shop-filled" size="20"></uni-icons>
				</view>
				<view class="font-14 text-secondary">
					店铺
				</view>
			</view>
			<view class="mr-2" @click="talk_about" slot="icon">
				<view class="text-center">
					<uni-icons type="chat" size="20"></uni-icons>
				</view>
				<view class="font-14 text-secondary">
					客服
				</view>
			</view>
			<view class="mr-2" @click="collect" slot="icon">
				<view class="text-center">
					<uni-icons color="#FF5800" type="star" size="20">
					</uni-icons>
				</view>
				<view class="font-14 text-secondary">
					收藏
				</view>
			</view>
		</content_bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content_id:''
			}
		},
		methods: {
			// 点击店铺
			current_shop(){
				
			},
			// 点击客服回调
			talk_about(){
				
			},
			// 点击收藏回调
			collect(){
				
			}
		},
		onLoad(data){
			this.content_id=data.id
		}
	}
</script>

<style>

</style>
