<!--  -->
<template>
  <div id="root">
    <NavBar></NavBar>
    <Banner>
      <h2 slot="title">海量数据分析工具</h2>
      <h3 slot="tips">开启个性化分析新体验</h3>
    </Banner>
  </div>
</template>
<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  data() {
    return {};
  },
  components: { NavBar },
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
