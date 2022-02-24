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
          :en="item.path"
          :ch="item.title"
          v-for="item in navobj"
          :key="item.title"
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
        },
      ],
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
  background-color: #070722;
  background: -webkit-linear-gradient(113deg,#000,#070722, #090a3a);
  /* background: -webkit-radial-gradient(top right, ellipse, rgb(1, 1, 14), #070722, #0c0f60); */
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
