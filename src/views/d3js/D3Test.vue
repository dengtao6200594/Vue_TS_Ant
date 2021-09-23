<template>
	<div class="d3_container">
		<p>你啊!</p>
		<p>nimade</p>
		<svg class="svg_test1"></svg>
	</div>
</template>

<script>
export default {
	name: 'Test',
	mounted() {
		// 不能选择div#app
		// d3.select('.d3_container')
		// 	.selectAll('p')
		// 	.data([1, 2, 3, 5])
		// 	.text(d => d)
		// 	.enter()
		// 	.append('p')
		// 	.text(d => d)
		/**
		 * 使用比例尺做简易条形图
		 */
		let arr = [19, 29, 9, 21, 10]
		const MAX = d3.max(arr)
		const line = d3
			.scaleLinear()
			// .linear()
			.domain([0, MAX])
			.range([0, 300])
		let svg = d3
			.select('.svg_test1')
			.attr('width', 300)
			.attr('height', 300)
		svg
			.selectAll('rect')
			.data(arr)
			.enter()
			.append('rect')
			.attr('x', 20)
			.attr('y', (d, i) => i * 25)
			.attr('width', d => line(d))
			.attr('height', 20)
			.attr('fill', 'gold')
	}
}
</script>

<style></style>
