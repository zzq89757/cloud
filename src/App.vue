<template>
  <div id="app">
    <keep-alive><router-view /></keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("countRunning", {
  bind(el) {
    let timer = null;
    const targetDomCount = el.getAttribute("data-target"); //data-target为目标值
    // 数字动画总是分25次走完 （可自行更改）
    let step = 150;
    let nowCount = parseInt(el.innerHTML); //当前页面显示值
    timer = setInterval(() => {
      if (nowCount < targetDomCount) {
        nowCount = nowCount + step;
      } else {
        clearInterval(timer);
        timer = null;
      }
      // 避免显示小数
      el.innerHTML = parseInt(nowCount);
    }, 18);
  },
});
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  user-select: none;
}
body,
html {
  height: 100%;
}
body {
  background-color: #170a3f;
  background-color: #181a78;
  background-color: #031032;
  background-color: #110d53;
  background-color: #0b1061;
  /* background-color: linear-gradient(#031032,#181a78,90deg); */
  background-color: rgba(2, 4, 107, 0.911);
}
a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-family: Arial, PingfangSC, Microsoft YaHei, Helvetica Neue, Helvetica,
    STHeiTi, sans-serif;
  font-size: 15px;
}
li {
  list-style: none;
}
h2{
  font-weight: 200;
  /* font-size: 46px; */
}
#app {
  font-family: PingFang-SC-Regular, Helvetica, "Microsoft Yahei", 微软雅黑;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #031032; */
  /* background-image: linear-gradient(#031032,#181a78,90deg); */
  color: #ffffff;
}
</style>
