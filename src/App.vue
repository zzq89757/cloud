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
@import "assets/css/base.css";

</style>
