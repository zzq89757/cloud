<!--  -->
<template>
  <div id="table">
    <CenterBanner :mainstyle="'blue'" :tips="'我们的服务'" :title="'我们能提供什么'"></CenterBanner>
    <div class="container">
      <mini-card v-for="item in cardContent" :key="item"></mini-card>
    </div>
  </div>
</template>

<script>
import MiniCard from "./MiniCard.vue";
import CenterBanner from "../banner/CenterBanner.vue";
export default {
  data() {
    return {
      cardContent: [ {}, {}, {}, {}, {}, {}],
    };
  },

  components: { MiniCard, CenterBanner },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='css' scoped>
#table{
  background-image: linear-gradient(235deg, #131b83, #1230af);
  padding-bottom: 200px;
}
.container {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  /* padding: 0px 200px; */
}
</style>