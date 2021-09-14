<template>
  <div class="good_container">
    <div class="good_lists_container">
      <template v-for="(goodList, index) in goodLists">
        <transition :key="goodList.goodName" name="collapse">
          <div class="good_lists" v-if="index < 2 || isShow">
            <div class="good_lists_img">
              <div class="img"></div>
            </div>
            <div class="good_lists_content">
              <div class="name">{{ goodList.goodName }}</div>
              <div class="num">数量：{{ goodList.goodNum }}</div>
            </div>
            <div class="good_lists_price">￥{{ goodList.goodPrice }}</div>
          </div>
        </transition>
      </template>
    </div>
    <div class="fold" @click="handleShow">>查看全部</div>
  </div>
</template>

<script>
export default {
  name: "MyTest",
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
  mounted() {},
  methods: {
    handleShow() {
      this.isShow = !this.isShow;
      // this.$refs.a.style.height = "250px";
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
  
  .good_lists_container {
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
  }

  .fold {
    text-align: center;
    line-height: 20px;
    height: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
}

.collapse-enter-active {
  animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
}
.collapse-leave-active {
  animation: slide-bck-top 0.45s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  @keyframes slide-bck-top {
    0% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
    }
    100% {
      -webkit-transform: translateZ(-400px) translateY(-200px);
      transform: translateZ(-400px) translateY(-200px);
    }
  }
}
</style>