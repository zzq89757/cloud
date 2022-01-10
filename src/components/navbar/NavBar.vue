<template>
  <div id="nav">
    <nav class="topbar">
      <div class="logo">
        <a href="http://www.vazyme.com" target="blank">
          <slot name="logo">
            <img src="@/assets/img/logo_white_nopadding.png" />
          </slot>
        </a>
      </div>
      <div class="">
        <nav-bar-item
          :en="en[index]"
          :ch="title[index]"
          v-for="(item, index) in title"
          :key="item.id"
        ></nav-bar-item>
      </div>
    </nav>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  components: { NavBarItem },
  name: "NavBar",
  data() {
    return {
      title: ["首页", "流程", "工具", "关于", "登录", "注册"],
      en: ["", "index_flow", "index_server", "about", "login", "signup"],
    };
  },
};
</script>
<style>
a {
  font-weight: 600;
  text-shadow: 0 0 1px rgb(255 255 255 30%);
}
.router-link-active {
  display: inline-block;
  color: #fff;
  border-bottom: 3px solid #fff;
}
#nav {
  width: 100%;
  min-width: 800px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  background: rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(#031032, #181a78, 90deg);
}
.topbar {
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
}
.topbar .logo {
  position: absolute;
  left: 46px;
}
.topbar .logo a {
  margin-top: -8px;
}
.topbar .logo img {
  height: 71px;
}
.topbar .title {
  display: inline-block;
  margin: 14px 30px;
  padding: 5px 0px;
  transition: all 0.1s linear 0s;
}
.topbar .title:hover {
  color: #fff;
  border-bottom: 3px solid #fff;
}
</style>
