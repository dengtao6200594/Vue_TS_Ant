<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="vertical" :default-selected-keys="['1']">
        <!-- <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-sub-menu key="2">
          <span slot="title">
            <a-icon type="video-camera" /><span>nav 2</span>
          </span>
          <a-menu-item key="this">
            <a-icon type="form" /><span>this</span>
          </a-menu-item>
          <a-menu-item key="that">that</a-menu-item>
          <a-sub-menu key="6" title="GG">
            <a-menu-item key="two">two</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item> -->
        <template v-for="item in data">
          <a-menu-item v-if="!item.children" :key="item.id">
            <a-icon :type="item.icon" /><span>{{item.title}}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.id">
            <span slot="title">
              <a-icon :type="item.icon" /><span>{{item.title}}</span>
            </span>
            <template v-for="item1 in item.children">
              <a-menu-item v-if="item1.children.length===0" :key="item1.id"> {{item1.title}}</a-menu-item>
              <a-sub-menu v-else :key="item1.id" :title="item1.title">
                <a-menu-item v-for="item2 in item1.children" :key="item2.id">{{item2.title}}</a-menu-item>
              </a-sub-menu>
            </template>
          </a-sub-menu>
        </template>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  collapsed: boolean = true
  data: Array<unknown> = [
    { id: 53, url: '/monitor', title: '全局监控', icon: 'account-book' },
    {
      id: 215,
      url: '/operationManage',
      title: '运营管理',
      icon: 'alert',
      children: [
        {
          id: 56,
          url: '/industry',
          title: '工业车',
          icon: 'api',
          children: []
        },
        {
          id: 60,
          url: '/shuttle',
          title: '观光车',
          icon: 'audio',
          children: []
        },
        { id: 64, url: '/clean', title: '清扫车', icon: 'bell', children: [] },
        {
          id: 65,
          url: '/security',
          title: '安防车',
          icon: 'bug',
          children: [
            {
              id: 62,
              url: '/info',
              title: '基础数据',
              icon: 'build'
            },
            {
              id: 63,
              url: '/info',
              title: '乱跑数据',
              icon: 'build'
            }
          ]
        }
      ]
    },
    {
      id: 66,
      url: '/remote',
      title: '人机共驾',
      icon: 'bulb'
    }
  ]
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