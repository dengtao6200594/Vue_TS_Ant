<template>
  <div class="d3_container">
    <p>你</p>
    <p>nimade</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  mounted() {
    let h2 = d3
    // 不能选择div#app
      .select(".d3_container")
      .selectAll("p")
      .data([1, 2, 3, 4, 5])
      .text((d) => d)
      .enter()
      .append("p")
      .text((d) => d);
  },
};
</script>

<style>
</style>