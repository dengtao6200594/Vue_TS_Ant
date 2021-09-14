<template>
  <div>
    <div
      class="good_lists"
      v-for="goodList in goodLists"
      :key="goodList.goodName"
    >
      <div class="good_lists_img">
        <div class="img"></div>
      </div>
      <div class="good_lists_content">
        <div class="name">{{ goodList.goodName }}</div>
        <div class="num">数量：{{ goodList.goodNum }}</div>
      </div>
      <div class="good_lists_price">￥{{ goodList.goodPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        goodLists:{
            type:Array
        }
    }
};
</script>

<style lang="scss" scoped>
.good_lists {
  display: flex;
  align-items: center;
  height: 100px;
  .good_lists_img {
    height: 100%;
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 80px;
      height: 80px;
      background: yellowgreen;
      border-radius: 6px;
    }
  }
  .good_lists_content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 4;
  }
  .good_lists_price {
    flex: 1;
  }
}
</style>