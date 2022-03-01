<!--  -->
<template>
  <div class="box">
    <img class="iconList" src="@/assets/img/card/database.png" />
    <p class="word">无限数据库</p>
    <span class="infor">XX网提供精品原创背景素材下载,各类背景图片素材包括电商背景、广告设计背景等</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='css' scoped>
.box {
  width: 280px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid var(--white);
}
.box p {
  display: inline-block;
  font-size: 18px;
}
.box span {
  font-size: 16px;
}
.box img {
  width: 80px;
  height: 80px;
}
</style>