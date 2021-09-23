<template>
	<div>
		<canvas id="identify_canvans" :width="contentWidth" :height="contentHeight"></canvas>
	</div>
</template>

<script>
export default {
	name: 'Identify',
	props: {
		identifyCode: {
			type: String,
			default: '1234'
		},
		fontSizeMin: {
			type: Number,
			default: 35
		},
		fontSizeMax: {
			type: Number,
			default: 35
		},
		backgroundColorMin: {
			type: Number,
			default: 180
		},
		backgroundColorMax: {
			type: Number,
			default: 240
		},
		colorMin: {
			type: Number,
			default: 50
		},
		colorMax: {
			type: Number,
			default: 160
		},
		lineColorMin: {
			type: Number,
			default: 100
		},
		lineColorMax: {
			type: Number,
			default: 200
		},
		dotColorMin: {
			type: Number,
			default: 0
		},
		dotColorMax: {
			type: Number,
			default: 255
		},
		// cavans画布大小
		contentWidth: {
			type: Number,
			default: 120
		},
		contentHeight: {
			type: Number,
			default: 40
		}
	},
	watch: {
		identifyCode() {
			this.drawPic()
		}
	},
	mounted() {
		this.drawPic()
	},
	methods: {
		// 生成随机数
		randomNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min)
		},
		// 生成随机颜色
		randomColor(min, max) {
			const A = this.randomNum(min, max)
			const B = this.randomNum(min, max)
			const C = this.randomNum(min, max)
			return `rgb(${A},${B},${C})`
		},
		transparent() {
			return 'rgb(255,255,255)'
		},
		drawText(ctx, txt, i) {
			ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
			ctx.font = `${this.randomNum(this.fontSizeMin, this.fontSizeMax)}px SimHei`
			const X = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
			const Y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
			const DEG = this.randomNum(-10, 10)
			// 修改坐标原点和旋转角度
			ctx.translate(X, Y)
			ctx.rotate((DEG * Math.PI) / 180)
			ctx.fillText(txt, 0, 0)
			// 恢复坐标原点和旋转角度
			ctx.rotate((-DEG * Math.PI) / 180)
			ctx.translate(-X, -Y)
		},

		// 绘制干扰线
		drawLine(ctx) {
			for (let i = 0; i < 8; i++) {
				ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
				ctx.beginPath()
				ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
				ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
				ctx.stroke()
			}
		},
		// 绘制干扰点
		drawDot(ctx) {
			for (let i = 0; i < 100; i++) {
				ctx.fillStyle = this.randomColor(0, 255)
				ctx.beginPath()
				ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
				ctx.fill()
			}
		},
		drawPic() {
			let ctx = document.getElementById('identify_canvans').getContext('2d')
			ctx.textBaseline = 'bottom'
			// 绘制背景
			ctx.fillStyle = this.transparent()
			ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
			// 绘制文字
			for (let i = 0; i < this.identifyCode.length; i++) {
				this.drawText(ctx, this.identifyCode[i], i)
			}
			//绘制背景
			this.drawLine(ctx)
			this.drawDot(ctx)
		}
	}
}
</script>

<style></style>
