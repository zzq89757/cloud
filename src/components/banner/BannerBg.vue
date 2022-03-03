<!--  -->
<template>
  <div class="banner">
    <!-- 背景底纹 -->
    <img class="banner1" src="@/assets/img/banner/banner.png" />
    <img class="banner2" src="@/assets/img/banner/banner-1.png" />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  data() {
    return {};
  },

  components: { Banner },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang="css" scoped>
.banner {
  float: left;
}
.banner1 {
  position: absolute;
  top: -4%;
  left: 0;
  width: 67%;
  z-index: -100;
}
.banner2 {
  position: absolute;
  right: 0;
  bottom: -67px;
}
</style>
