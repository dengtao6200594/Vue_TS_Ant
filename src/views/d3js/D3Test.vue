<template>
  <div>
    <h2>你</h2>
    <h2>nimade</h2>
  </div>
</template>

<script>
export default {
  name: "Test",
  mounted(){
    d3.selectAll('h2').data([1,2,3,4]).text(d=>d)
  }
};
</script>

<style>
</style>