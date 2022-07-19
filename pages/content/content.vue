<template>
	<view>
		<view class="position-relative">
			<view class="currentSwiper">
				<text>{{current}}</text>
				<text>/</text>
				<text>{{product_info.swiperArr.length}}</text>
			</view>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" @change="changeSwiper">
				<swiper-item v-for="item in product_info.swiperArr" :key="item.id">
					<view class="swiper-item">
						<image :src="item.image" style="width: 750rpx;height: 300rpx;" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<content_bar :content_info="product_info">
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
			<view :class="'mr-2 '+''" @click="collect" slot="icon">
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
				current: 1,
				product_info:{
					isSelected:true,
					content_id: '23',
					price:'',
					swiperArr: [{
						image: 'https://picsum.photos/id/66/375/150',
						id: 66,
					}, {
						image: 'https://picsum.photos/id/69/375/150',
						id: 69,
					}, {
						image: 'https://picsum.photos/id/99/375/150',
						id: 99,
					}]
				}
			}
		},
		methods: {
			// 点击店铺
			current_shop() {

			},
			// 点击客服回调
			talk_about() {

			},
			// 点击收藏回调
			collect() {

			},
			changeSwiper(e) {
				this.current = e.detail.current + 1
			},
		},
		onLoad(data) {
			this.product_info.content_id = data.id
			this.product_info.price = data.price	
		}
	}
</script>

<style lang="scss">
	.currentSwiper {
		position: absolute;
		font-size: 12px;
		right: 8rpx;
		bottom: 8rpx;
		height: 50rpx;
		line-height: 50rpx;
		background: rgba(0, 0, 0, 0.7);
		color: #fff;
		border-radius: 1600px;
		padding: 0 24rpx;
		z-index: 99;
	}
</style>
