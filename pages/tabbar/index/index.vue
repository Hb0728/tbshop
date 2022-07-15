<template>
	<view class="px-2">
		<swiper class="mb-3" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://picsum.photos/id/2/375/240" style="width: 750rpx;height: 480rpx;"
						mode="scaleToFill"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://picsum.photos/id/3/375/240" style="width: 750rpx;height: 480rpx;"
						mode="scaleToFill"></image>
				</view>
			</swiper-item>
		</swiper>
		<!--首页栏目推荐  -->
		<view class="d-flex flex-wrap bg-white rounded-lg mb-3">
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">服装</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">饰品</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">运动</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">鞋袜</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">电脑</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i1/O1CN018Ilnep1Qt9ryh1Vue_!!6000000002033-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">手机</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i2/O1CN01gUIFrA1OuPj70aTIW_!!6000000001765-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">生活</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i3/O1CN013WcsZW1jfr4AXnmVl_!!6000000004576-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">充值</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image
						src="//gw.alicdn.com/imgextra/i2/O1CN01ZOR1cv1yjGFORGh1V_!!6000000006614-2-tps-183-144.png_q90.jpg_.webp"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">充值</text>
			</navigator>
			<navigator url="" class="index-item">
				<view>
					<image src="//gw.alicdn.com/tfs/TB1WgOmesieb18jSZFvXXaI3FXa-183-144.png_q90.jpg_.webp?getAvatar=1"
						style="width:108rpx;height: 92rpx;" mode=""></image>
				</view>
				<text class="product-name">充值</text>
			</navigator>
		</view>
		<view class="product_item">
			<view class="product_item_l">
				<view class="product_swiper">
					<swiper class="mb-2" :indicator-dots="true" :autoplay="true" :interval="7000" :duration="1000"
						style="height: 525rpx;border-radius: 15rpx;overflow: hidden;">
						<swiper-item>
							<view class="swiper-item">
								<image
									src="//gw.alicdn.com/imgextra/i1/6000000005082/O1CN01CjCxXv1nPbZfAJ9kZ_!!6000000005082-0-lubanimage.jpg_q90.jpg_.webp"
									style="width: 350rpx;height: 525rpx;">
								</image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image
									src="//gw.alicdn.com/imgextra/i2/1898735371/O1CN014qVWNe1pXy00BmeN9_!!1898735371-0-alimamacc.jpg_q90.jpg_.webp"
									style="width: 350rpx;height: 525rpx;">
								</image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image
									src="//gw.alicdn.com/imgextra/i2/6000000006957/O1CN01ymssvA21GMCNT9JeG_!!6000000006957-0-octopus.jpg_q90.jpg_.webp"
									style="width: 350rpx;height: 525rpx;">
								</image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image
									src="//gw.alicdn.com/imgextra/i3/2207255204017/O1CN01KR8lUV1fXphzQ64bD_!!2207255204017-0-alimamazszw.jpg_q90.jpg_.webp"
									style="width: 350rpx;height: 525rpx;">
								</image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<view class="product_container" v-for="item in product_list_l" :key="item.id">
					<view class="product_pic">
						<view class="">
							<image :src="item.Image" style="width: 350rpx;height: 350rpx;" mode=""></image>
						</view>
						<view class="px-2 mb-2">
							<text class="font-14 text-ellipsis-2">{{item.name}}</text>
						</view>
						<view class="px-2 mb-2">
							<text class="recommend-price">￥{{item.price}}</text>
							<text class="recommend-payed">{{item.payed_man}}人已购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="product_item_r">
				<view class="product_container" v-for="item in product_list_r" :key="item.id">
					<view class="product_pic">
						<view class="">
							<image :src="item.Image" style="width: 350rpx;height: 350rpx;" mode=""></image>
						</view>
						<view class="px-2 mb-2">
							<text class="font-14 text-ellipsis-2">{{item.name}}</text>
						</view>
						<view class="px-2 mb-2">
							<text class="recommend-price">￥{{item.price}}</text>
							<text class="recommend-payed">{{item.payed_man}}人已购买</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="bottom_loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 下拉加载loading状态
				bottom_loading:'more',
				product_list: [{
					id: 10001,
					name: '北美红雀冬青浆果欧式陶瓷餐具汤锅汤碗汤盆手绘浮雕彩绘带盖耐热',
					price: 138,
					payed_man: 13,
					Image: '//gw.alicdn.com/bao/uploaded/i2/2273872997/O1CN01F9w7VR1Y0fgB6hZMD_!!2273872997.jpg_320x320q90.jpg'
				}, {
					id: 10002,
					name: '日本进口缝隙收纳架厨房置物架冰箱夹缝车可移动多层落地超窄柜',
					price: 28.5,
					payed_man: 60,
					Image: '//gw.alicdn.com/bao/uploaded/i2/504369715/O1CN01VDTglP2LdWUZPQ849_!!0-item_pic.jpg_320x320q90.jpg'
				}, {
					id: 10003,
					name: '特大号粗管脏衣服收纳篮脏衣篓家用洗衣仿藤编篮子装放衣物筐神器',
					price: 19.8,
					payed_man: 2500,
					Image: '//gw.alicdn.com/bao/uploaded/i1/355818105/O1CN01kWSvjc29k8lsQ0q6N_!!355818105.jpg_320x320q90.jpg'
				}, {
					id: 10004,
					name: '牛皮纸搬家整理零食箱子收纳纸质盒子储物纸箱礼物收纳盒板壳',
					price: 11.04,
					payed_man: 700,
					Image: '//gw.alicdn.com/bao/uploaded/i1/65160945/O1CN01thALHI1IqqqdwsgdX_!!65160945.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10005,
					name: '切菜板家用防霉实木竹制砧板厨房案板擀面板和面板宿舍小占板粘板',
					price: 28.06,
					payed_man: 28,
					Image: '//gw.alicdn.com/bao/uploaded/i1/TB1iSafHpXXXXcPXXXXXXXXXXXX_!!0-item_pic.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10006,
					name: 'NANAROOM韩国进口米色纯色雪纺纱蕾丝荷叶公主婚庆床品配蛋糕床裙',
					price: 361,
					payed_man: 17,
					Image: '//gw.alicdn.com/bao/uploaded/i3/32597363/O1CN01O96QM924GIu5Ifhhw_!!32597363.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10007,
					name: '鸣笛加厚不锈钢电水壶家用烧水壶大容量电热水壶茶壶燃气电磁炉用',
					price: 20,
					payed_man: 100,
					Image: '//gw.alicdn.com/bao/uploaded/i3/396814372/TB2_EM9jHBkpuFjy1zkXXbSpFXa_!!396814372.png_320x320q90.jpg_.webp'
				}, {
					id: 10008,
					name: '老式铸铝勺子长柄铝勺汤勺蛋饺勺装粥勺防烫把商用大汤勺家用勺子',
					price: 13.9,
					payed_man: 55,
					Image: '//gw.alicdn.com/bao/uploaded/i2/57370667/O1CN01D8z9j81GnWlHYfeAq_!!57370667.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10009,
					name: 'zakka复古桌面收纳木盒木质多肉花盆 12格分格盒首饰杂货整理盒子',
					price: 13.52,
					payed_man: 400,
					Image: '//gw.alicdn.com/bao/uploaded/i1/49291083/O1CN01pHswan1Js3hmACS2c_!!49291083-0-picasso.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10010,
					name: '6只装北欧简约陶瓷浓缩意式咖啡杯家用小号100ml花茶杯子餐厅茶杯',
					price: 29.9,
					payed_man: 100,
					Image: '//gw.alicdn.com/bao/uploaded/i1/2628362046/TB1A67JiIIrBKNjSZK9XXagoVXa_!!0-item_pic.jpg_320x320q90.jpg_.webp'
				}, {
					id: 10011,
					name: '日式木碟子创意实木圆形果盘餐具木质托盘蛋糕餐盘茶盘点心干果盘',
					price: 19.9,
					payed_man: 21,
					Image: '//gw.alicdn.com/bao/uploaded/i1/99672880/O1CN01ubJwTo1X95R6TILJP_!!99672880-0-picasso.jpg_320x320q90.jpg_.webp'
				}]
			}
		},
		computed: {
			product_list_l() {
				let product_list_l_arr = []
				this.product_list.map((val, index) => {
					if (index % 2 !== 0) {
						product_list_l_arr.push(val)
					}
				})
				return product_list_l_arr
			},
			product_list_r() {
				let product_list_r_arr = []
				this.product_list.map((val, index) => {
					if (index % 2 === 0) {
						product_list_r_arr.push(val)
					}
				})
				return product_list_r_arr
			}
		},
		methods: {

		},
		onReachBottom(){
			this.bottom_loading='loading';
			let _this=this
			new Promise(resolve=>{
				setTimeout(()=>{
					resolve()
				},2000)
			}).then(()=>{
				_this.product_list.forEach(val=>{
					val.id=Math.random()*1000
					_this.product_list.push(val)
				})
				this.bottom_loading='more';
			})
		}
	}
</script>

<style lang="scss">
	.index-item {
		width: 20%;
		text-align: center;
		padding: 0 16rpx;
		box-sizing: border-box;
		height: 200rpx;

		.product-name {
			color: #999999;
			font-size: 14px;
		}
	}

	.product_item {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.product_item_l {
			width: 350rpx;
		}

		.product_item_r {
			width: 350rpx;
		}

		.product_container {
			background-color: #fff;
			border-radius: 15rpx;
			overflow: hidden;
			margin-bottom: 16rpx;

			.recommend-price {
				font-size: 12px;
				line-height: 16px;
				color: #ff5500;
				margin-right: 8px;
			}

			.recommend-payed {
				font-size: 12px;
				line-height: 16px;
				color: #999999;
			}
		}
	}
</style>
