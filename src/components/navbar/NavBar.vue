<template>
  <div id="nav">
    <nav-bar-item :navobj="navobj" :icon_data="icon_data"></nav-bar-item>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  components: { NavBarItem },
  name: "NavBar",
  data() {
    return {
      navobj: [
        {
          title: "首页",
          path: "",
        },
        {
          title: "流程",
          path: "index_flow",
        },
        {
          title: "工具",
          path: "index_server",
        },
        {
          title: "关于",
          path: "about",
        },
        {
          title: "登录",
          path: "login",
        },
        {
          title: "注册",
          path: "signup",
          class:"last"
        },
      ],
      icon_data: []
    };
  },
};
</script>
<style>
</style>
