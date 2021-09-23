<template>
	<div class="container" @keyup.enter="loginIn">
		<img src="@/assets/pic/login/loginBg.png" alt="" />
		<div class="title"></div>
		<form action="">
			<div class="username">
				<img src="@/assets/pic/login/username.png" alt="" />
				<input v-model="username" class="user_input" type="text" placeholder="请输入用户名/手机号" autocomplete="off" />
			</div>
			<div class="password">
				<img src="@/assets/pic/login/password.png" alt="" />
				<input v-model="password" :type="showPasswordType[index].type" placeholder="请输入用户密码" autocomplete="off" />
				<i :class="showPasswordType[index].icon" @click="isShowPassword"></i>
				<!-- <i class="iconfont iconxiaoyanjing-yincang" v-show="!isShow" @click="isShowPassword"></i> -->
			</div>
			<div class="get_code" @click="refreshCode" style="marginTop:0.5rem;">
				<Identify :identifyCode="identifyCode" />
			</div>
			<div class="remember_password">
				<input id="checkbox" type="checkbox" />
				<label for="checkbox">记住密码</label>
			</div>
		</form>

		<button class="login_in" @click="loginIn">登录</button>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { login } from '@/api/login'
import Identify from './components/Identify.vue'

@Component({
	components: { Identify }
})
export default class Login extends Vue {
	isShow: boolean = false //隐藏密码
	showPasswordType: readonly { icon: string; type: string }[] = Object.freeze([
		{
			icon: 'iconfont iconxiaoyanjing-yincang',
			type: 'password'
		},
		{
			icon: 'iconfont iconxiaoyanjing-',
			type: 'text'
		}
	])
	username: string = ''
	password: string = ''
	identifyCode: string = ''
	identifyCodes: string = '0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ' //用于绘制随机字

	get index(): number {
		return this.isShow ? 1 : 0
	}
	created() {
		this.refreshCode()
	}
	refreshCode(): void {
		this.identifyCode = ''
		this.makeCode(this.identifyCodes, 4)
	}
	randomNum(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min) + min)
	}
	// 随机生成验证码字符串
	makeCode(data: string, len: number): void {
		for (let i = 0; i < len; i++) {
			this.identifyCode += data[this.randomNum(0, data.length - 1)]
		}
	}
	// 是否显示密码
	isShowPassword(): void {
		this.isShow = !this.isShow
	}
	// 登录
	loginIn(): void {
		login({ username: this.username, password: this.password }).then(data =>
			// console.log(data)
			this.$router.push('/home')
		)
	}
}
</script>

<style>
@media screen {
	html {
		font-size: calc(100vw / 12);
	}
}
@media screen and (min-width: 768px) {
	html {
		font-size: calc(100vw / 13);
	}
}
@media screen and (min-width: 992px) {
	html {
		font-size: calc(100vw / 15);
	}
}
@media screen and (min-width: 1200px) {
	html {
		font-size: calc(100vw / 19.2);
		/* font-size: 16px; */
	}
}
</style>

<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;
	// TODO 为什么不能简写
	// background: url('../../assets/pic/login/loginBg@2x.png') no-repeat center/100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> img {
		position: absolute;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
	.title {
		width: 7.86rem;
		height: 0.84rem;
		background: url('../../assets/pic/login/logo.png') no-repeat center/100%;
	}
	@mixin box_style {
		width: 8.52rem;
		min-width: 7rem;
		height: 0.96rem;
		background: rgba(16, 39, 72, 0);
		border: 0.01rem solid #1489cc;
		border-radius: 0.1rem;
		box-sizing: border-box;
		display: flex;
		justify-content: left;
		align-items: center;
		> img {
			// content是插入在元素内容的前后不是元素的前后
			// input标签不支持伪元素
			width: 0.56rem;
			height: 0.35rem;
			margin-left: 0.21rem;
			padding-right: 0.21rem;
			border-right: 0.02rem solid #1489cc;
		}
	}

	.username {
		@include box_style();
		margin: 0.81rem 0 0.6rem;
	}
	// .user_input应该放在.username外面，与.password同级才能被其子级继承
	.user_input {
		width: 80%;
		line-height: 0.5rem;
		font-size: 0.3rem;
		margin-left: 0.3rem;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		outline: none;
		box-sizing: border-box;
		background: transparent;
		border: none;
		overflow: hidden;
		color: #ffffff;
		// 修改placeholder字体样式
		@mixin ph_font_size {
			color: #17a1e6;
			font: {
				size: 0.3rem;
				family: SourceHanSansSC;
				weight: 400;
			}
		}
		&::-webkit-input-placeholder {
			@include ph_font_size();
		}
		&:-moz-placeholder {
			@include ph_font_size();
		}
		&::-moz-placeholder {
			@include ph_font_size();
		}
		&:-ms-input-placeholder {
			@include ph_font_size();
		}
	}
	.password {
		@include box_style();
		> input {
			@extend .user_input;
		}
		i {
			font-size: 0.4rem;
			color: #1489cc;
		}
	}
	.remember_password {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 8.52rem;
		height: 1rem;
		// 重置checkbox单选框样式
		input[type='checkbox'] {
			appearance: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			& + label {
				margin: 0.2rem 0 0 0.7rem;
				color: #1ad1ff;
				// 属性嵌套
				font: {
					family: SourceHanSansSC;
					size: 0.3rem;
					weight: 400;
				}
			}
			&::before {
				content: '';
				width: 0.3rem;
				height: 0.3rem;
				display: inline-block;

				border: 0.01rem solid #1489cc;
				box-sizing: border-box;
				border-radius: 0.05rem;
				transition: all 0.2s ease;
				position: absolute;
			}
		}
		input[type='checkbox']:checked {
			&::before {
				background: #1489cc;
			}
			&::after {
				content: '';
				width: 0.25rem;
				height: 0.2rem;
				border-left: 0.03rem solid white;
				border-bottom: 0.03rem solid white;
				position: absolute;
				box-sizing: border-box;
				transform: rotate(-45deg) translateX(20%);
			}
		}
	}

	.login_in {
		width: 8.52rem;
		$height: 0.96rem;
		height: $height;
		background: linear-gradient(90deg, #114792, #00c09e);
		border-radius: 0.1rem;
		color: #ffffff;
		margin-bottom: 0.1rem;
		font: {
			size: 0.43rem;
			family: MicrosoftYaHei;
			weight: 400;
		}
		line-height: $height;
		text-align: center;
		border-color: #00c09e;
	}
}
</style>
