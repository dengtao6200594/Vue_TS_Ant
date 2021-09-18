<template>
  <a-layout class="layout">
    <left-menu :menuData="menuData" />
    <!-- <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="vertical" :default-selected-keys="['1']">
        <template v-for="item in menuData">
          <a-menu-item v-if="!item.children" :key="item.id">
            <router-link :to="item.url"
              ><a-icon :type="item.icon" /><span>{{
                item.title
              }}</span></router-link
            >
          </a-menu-item>
          <a-sub-menu v-else :key="item.id">
            <span slot="title">
              <a-icon :type="item.icon" /><span>{{ item.title }}</span>
            </span>
            <template v-for="item1 in item.children">
              <a-menu-item v-if="item1.children.length === 0" :key="item1.id">
                {{ item1.title }}</a-menu-item
              >
              <a-sub-menu v-else :key="item1.id" :title="item1.title">
                <a-menu-item v-for="item2 in item1.children" :key="item2.id">{{
                  item2.title
                }}</a-menu-item>
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider> -->
    <a-layout>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import GoodLists from "@/views/myTest/GoodLists.vue";
import LeftMenu from "./LeftMenu.jsx";

@Component({
  components: { GoodLists, LeftMenu },
})
export default class Layout extends Vue {
  menuData: Array<unknown> = [
    { id: 53, url: "/editor", title: "富文本编辑器", icon: "account-book" },
    {
      id: 215,
      url: "/d3",
      title: "d3.js",
      icon: "alert",
      children: [
        {
          id: 56,
          url: "/d3/test",
          title: "初次练习",
          icon: "api",
          children: [],
        },
        {
          id: 60,
          url: "/shuttle",
          title: "观光车",
          icon: "audio",
          children: [],
        },
        { id: 64, url: "/clean", title: "清扫车", icon: "bell", children: [] },
        {
          id: 65,
          url: "/security",
          title: "安防车",
          icon: "bug",
          children: [
            {
              id: 62,
              url: "/info",
              title: "基础数据",
              icon: "build",
            },
            {
              id: 63,
              url: "/info",
              title: "乱跑数据",
              icon: "build",
            },
          ],
        },
      ],
    },
    {
      id: 66,
      url: "/goods",
      title: "商品列表",
      icon: "bulb",
    },
  ];
}
</script>



<style lang='scss'>
.layout {
  height: 100%;
}

.layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

