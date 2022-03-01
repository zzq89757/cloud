<template>
  <div id="nav">
    <nav class="topbar">
      <div class="logo">
          <slot name="logo">
        <a href="http://www.vazyme.com" target="blank">
            <img src="@/assets/img/logo_white_nopadding.png" />
        </a>
          </slot>
      </div>
      <div class>
        <router-link
          exact
          v-for="item in navobj"
          :key="item.title"
          :to="{ path: '/' + item.path }"
          class="title"
          :class="item.class"
        >{{ item.title }}</router-link>
      </div>
      <div v-if="icon_data.length ">
        <slot name="icon">
          <a v-for="item in icon_data" :key="item.title" >
            <img :src="item.src" />
          </a>
        </slot>
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
    }
  },
  props:{
    navobj:{
      type:Array,
      require:true,
      default:[]
    },
    icon_data:{
      type:Array,
      require:false,
    }
  }
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
  width: 1200px;
  min-width: 800px;
  margin: auto;
}
.topbar {
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
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
  transition: all 0.15s linear 0s;
}
.topbar .title:hover {
  color: #fff;
  border-bottom: 3px solid #fff;
}
.topbar .last{
  margin-right: 0px ;
}
</style>
