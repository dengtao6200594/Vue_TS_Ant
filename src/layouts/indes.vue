
<script>
import GoodLists from "@/views/myTest/GoodLists.vue";
import LeftMenu from "./LeftMenu.jsx";
export default {
  name: "BasicLayout",
  components: {
    GoodLists,
    LeftMenu,
  },
  data() {
    return {
      menuData: [
        { id: 53, url: "/editor", title: "富文本编辑器", icon: "account-book" },
        {
          id: 215,
          url: "/operationManage",
          title: "哎呦",
          icon: "alert",
          children: [
            {
              id: 56,
              url: "/industry",
              title: "工业车",
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
            {
              id: 64,
              url: "/clean",
              title: "清扫车",
              icon: "bell",
              children: [],
            },
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
      ],
    };
  },
};
</script>
