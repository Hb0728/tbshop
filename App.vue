<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	@import 'bootstrap@4.5.0.css';
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	.uni-page-head-btn {
			text-align: center;
		}
	
		/* 你的项目css */
	
		.opacity-0 {
			opacity: 0;
		}
	
		.border-box {
			/* #ifndef APP-NVUE */
			box-sizing: border-box;
			/* #endif */
	
		}
	
	
		.uni-light-primary-button {
			color: #004085 !important;
			background-color: #cce5ff !important;
			border-color: #b8daff !important;
		}
	
		.uni-light-success-button {
			color: #155724 !important;
			background-color: #d4edda !important;
			border-color: #c3e6cb !important;
		}
	
		.uni-light-danger-button {
			color: #721c24 !important;
			background-color: #f8d7da !important;
			border-color: #f5c6cb !important;
		}
	
	
	
		.uni-light-warn-button {
			color: #856404 !important;
			background-color: #fff3cd !important;
			border-color: #ffeeba !important;
		}
	
	
	
		.width-0 {
			width: 0;
		}
	
		.uni-progress-info {
			font-size: 12px;
		}
	
		.btn-veri {
			position: relative;
		}
	
		.h-100h {
			/*#ifdef H5*/
			height: calc(100vh - 44px);
			/*#endif*/
			/*#ifndef H5*/
			height: 100vh;
			/*#endif*/
		}
		
		.mh-100h {
			/*#ifndef APP-NVUE*/
			min-height: 100vh;
			/*#endif*/
			/*#ifdef H5*/
			min-height: calc(100vh - 44px);
			/*#endif*/
	
		}
	
		.font-12 {
			font-size: 12px;
		}
	
		.font-14 {
			font-size: 14px;
		}
	
		.font-15 {
			font-size: 14px;
		}
	
		.font-16 {
			font-size: 16px;
		}
	
		.font-18 {
			font-size: 18px;
		}
	
		.font-20 {
			font-size: 20px;
		}
	
		.font-22 {
			font-size: 22px;
		}
	
		.font-24 {
			font-size: 24px;
		}
	
		.font-26 {
			font-size: 26px;
		}
	
		.font-28 {
			font-size: 28px;
		}
	
		.font-30 {
			font-size: 30px;
		}
	
		.navigator-hover-normal {
			opacity: 0.75;
		}
	
		.text-ellipsis {
			text-overflow: ellipsis;
			/* #ifndef APP-NVUE */
			white-space: nowrap;
			overflow: hidden;
			display: block;
			/* #endif */
			lines: 1;
		}
	
		.text-ellipsis-2 {
			text-overflow: ellipsis;
			/* #ifndef APP-NVUE */
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-break: break-all;
			/* #endif */
			lines: 2;
		}
	
		.text-ellipsis-3 {
			overflow: hidden;
			text-overflow: ellipsis;
			/* #ifndef APP-NVUE */
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			/* #endif */
			lines: 3
		}
		.office-icon-img-float{
			width: 16px;
			height: 16px;
			left: 8px;
			top: 8px;
			position: absolute;
			z-index: 3;
		}
		.office-icon-left{
			width: 16px;
			height: 16px;
			margin-right: 8px;
		}
		.office-icon-left_2{
			width: 16px;
			height: 16px;
			margin-right: 8px;
			margin-top: 2.5px;
		}
		.navigationBarBottomBorder{
			position: fixed;
			height: 1px;
			width: 750rpx;
			top: 0;
			/* #ifdef H5 */
			top: 44px;
			/* #endif */
			left: 0;
			background-color: #DEE2E6;
			z-index: 9;
			/* #ifdef APP-PLUS */
			height: 0px;
			width: 0px;
			/* #endif */
		}
		
		.wyb-tabs{
			border-bottom: 1px solid #DEE2E6;
		}
		
		.office-pic {
			width: 46px;
			height: 58px;
		}
		
		.office-icon-img{
			width: 32rpx;
			height: 32rpx;
			left: 8rpx;
			top: 8rpx;
			position: absolute;
			z-index: 3;
		}
	
		/* #ifndef APP-NVUE */
		[type=button],
		[type=reset],
		[type=submit],
		swan-button {
			-webkit-appearance: none
		}
		body,
		html {
			background-color: #f5f5f5;
			font-size: 16px;
		}
		img {
			image-rendering: -moz-crisp-edges;
			image-rendering: -o-crisp-edges;
			image-rendering: -webkit-optimize-contrast;
			image-rendering: crisp-edges;
			-ms-interpolation-mode: nearest-neighbor;
		}
		
		uni-image>div {
			image-rendering: -webkit-optimize-contrast;
		}
		.hr{
			position: relative;
		}
		.hr:before{
			content: '';
			height: 1px;
			width: 100%;
			background-color: #DEE2E6;
			top: 50%;
			left: 0;
			position: absolute;
		}
		.left-border{
			position: relative;
		}
		.left-border::before{
			content: '';
			width: 4rpx;
			height: 40rpx;
			left: -32rpx;
			top: 6rpx;
			position: absolute;
			background-color: #2780e3;
		}
		.btn-veri::after {
			border: none !important;
		}
		.status_bar {
			height: var(--status-bar-height);
			width: 750rpx;
		}
	
		.uni-light-button[type="default"] {
			color: #666 !important;
			background-color: #f8f8f8 !important;
			border-color: transparent !important;
		}
	
		.uni-light-button:active[type="default"] {
			color: #333;
			background-color: #eee !important;
		}
	
		.uni-light-button[type="default"]::after {
			border: none;
		}
	
		.spinner-border.with-content {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -1rem;
			margin-left: -1rem;
			z-index: 9;
		}
	
		.uni-light-danger-button::after {
			border: none;
		}
	.uni-btn-no-border:after {
			border: none;
		}
		.btn-veri[loading]::before {
			position: absolute;
			z-index: 9;
			left: 50%;
			top: 50%;
			margin-top: -9px;
			margin-left: -9px;
		}
	
		.btn-loading::before {
			margin-top: -3px;
		}
	
		.office-icon {
			position: relative;
			padding-left: 1.5rem !important;
		}
	
		.position-center-img {
			position: relative;
		}
	
		.position-center-img img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			z-index: 2;
		}
	
		.position-center-60 img {
			width: 60% !important;
		}
	
		.position-center-img:after {
			position: absolute;
			content: '';
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			left: 0;
			top: 0;
		}
	
		/* #endif */
	
	
		.mt-_1 {
			margin-top: -1px;
		}
	
		.mt-_2 {
			margin-top: -2px;
		}
</style>
