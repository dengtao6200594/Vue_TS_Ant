<template>
  <div class="good_container">
    <div class="good_lists_container">
      <GoodLists :goodLists="staticLists" />
      <transition name="collapse">
        <GoodLists :goodLists="dynamicLists" v-if="isShow" />
      </transition>
    </div>
    <div class="fold" @click="handleShow">>查看全部</div>
    <transition name="collapse">
      <div
        v-if="isShow"
        class="test"
        style="width: 200px; height: 200px; background: red"
      ></div>
    </transition>
  </div>
</template>

<script>
import GoodLists from "./GoodLists.vue";
export default {
  name: "MyTest",
  components: {
    GoodLists,
  },
  data() {
    return {
      isShow: true,
      goodLists: [
        {
          goodName: "笔记本",
          goodNum: 2,
          goodPrice: 1999.99,
        },
        {
          goodName: "玩具枪",
          goodNum: 3,
          goodPrice: 1111.0,
        },
        {
          goodName: "欧系服装",
          goodNum: 10,
          goodPrice: 678.1,
        },
        {
          goodName: "美系服装",
          goodNum: 10,
          goodPrice: 678.1,
        },
      ],
    };
  },
  computed: {
    staticLists() {
      return this.goodLists.length > 2
        ? this.goodLists.slice(0, 2)
        : this.goodLists;
    },
    dynamicLists() {
      return this.goodLists.length > 2 ? this.goodLists.slice(2) : [];
    },
  },
  mounted() {},
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.good_container {
  width: 100%;
  // height: 200px;
  overflow: hidden;
  background: #eee;

  .fold {
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
}
.test,
.collapse {
  transition: all 1s ease;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 1s ease;
}
.collapse-enter,
.collapse-leave-to {
  height: 0;
}
</style>