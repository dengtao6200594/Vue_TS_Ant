<template>
	<div class="d3_container">
		<p>你啊!</p>
		<p>nimade</p>
	</div>
</template>

<script>
export default {
	name: 'Test',
	mounted() {
		// 不能选择div#app
		d3.select('.d3_container')
			.selectAll('p')
			.data([1, 2, 3, 4, 5])
			.text(d => d)
			.enter()
			.append('p')
			.text(d => d)
	}
}
</script>

<style></style>
