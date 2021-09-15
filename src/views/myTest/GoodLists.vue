<template>
  <div class="good_container">
    <div class="good_lists_container">
      <GoodLists :goodLists="staticLists" />
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div class="dynamicLists" v-if="isShow">
          <!-- 内联样式无法运用在过渡,div高度无法自适应，利用js进行过渡，借助Velocity -->
          <GoodLists :goodLists="dynamicLists" />
        </div>
      </transition>
    </div>
    <div class="fold" @click="isShow = !isShow">>查看全部</div>
  </div>
</template>

<script>
// vue封装的transtion组件进行过渡动画
import GoodLists from "@/components/GoodLists/GoodLists.jsx";
import Velocity from "velocity-animate";

export default {
  name: "MyTest",
  components: {
    GoodLists,
  },
  data() {
    return {
      isShow: false,
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
        {
          goodName: "PS4",
          goodNum: 4,
          goodPrice: 2678.1,
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
    // 动态给出下拉列表的高度
    dynamicListsHeight() {
      const length = this.goodLists.length;
      return length > 2 ? `${(length - 2) * 100}px` : "0px";
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.height = "0px";
    },
    // Velocity(el,{style:xxx,...},'ease'||[贝塞尔曲线],{duration:xxx,complete:done})
    enter(el, done) {
      Velocity(
        el,
        { height: this.dynamicListsHeight },
        [0.755, 0.05, 0.855, 0.06],
        { duration: 1000, complete: done }
      );
    },
    leave(el, done) {
      Velocity(el, { height: "0px" }, [0.755, 0.05, 0.855, 0.06], {
        duration: 1000,
        complete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.good_container {
  width: 100%;
  overflow: hidden;
  background: #eee;

  .fold {
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 100%;
    margin-bottom: 20px;
    z-index: 1000;
  }
}
.dynamicLists {
  overflow: hidden;
}

// .collapse-enter-active,
// .collapse-leave-active {
//   transition: all 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
// }
// .collapse-enter,
// .collapse-leave-to {
//   height: 0;
// }
</style>