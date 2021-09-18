
export default {
  name: 'LeftMenu',
  props: {
    menuData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    hasChildren(v) {
      return v.children && v.children.length !== 0
    },

    renderMenuItem(v, hasIcon) {
      // 多个一个div暂无影响，待优化
      return (
        <a-menu-item key={v.id}>
          <router-link to={v.url}>
            {hasIcon ? <div><a-icon type={v.icon} /><span>{v.title}</span></div> : v.title}
          </router-link>
        </a-menu-item>
      )
    },

    // jsx可以实现不止二级路由的菜单栏
    renderSubMenu(v) {
      return (
        <a-sub-menu key={v.id} title={v.title}>
          {/* {v.map(v1 => this.hasChildren(v1) ? this.renderSubMenu(v1.children) : this.renderMenuItem(v1))} */}
          {v?.children.map(v => (
            this.renderMenuItem(v, false)
          ))}
        </a-sub-menu>
      )
    },
    renderList(v) {
      return (
        <span slot="title">
          <a-icon type={v.icon} /><span>{v.title}</span>
        </span>
      )
    }
  },
  render() {
    const keys = ['1']
    return (
      <a-layout-sider vModel={this.collapsed} collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="vertical" default-selected-keys={keys}>
          {
            this.menuData.map(v => {
              if (v.children) {
                return (
                  // 第一级菜单
                  <a-sub-menu key={v.id}>
                    {this.renderList(v)}
                    {v.children.map(v => this.hasChildren(v) ? this.renderSubMenu(v) : this.renderMenuItem(v, false))}
                  </a-sub-menu>
                )
              } else return this.renderMenuItem(v, true)
            })
          }
        </a-menu>
      </a-layout-sider>
    )
  }
}