<!--  -->
<template>
  <div id="root">
    <NavBar></NavBar>
    <Banner>
      <h2 slot="title">海量数据分析工具</h2>
      <p slot="tips">开启个性化分析新体验</p>
    </Banner>
  </div>
</template>
<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";

export default {
  data() {
    return {};
  },
  components: { NavBar, Banner },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#content {
  height: 200px;
}
</style>
