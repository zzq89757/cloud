<!--  -->
<template>
  <div id="table">
    <!-- <img src="@/assets/img/cover/cover_up.png" alt="" class="cover_up"/>
    <img src="@/assets/img/cover/cover_down.png" alt="" class="cover_down"/> -->
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
  position: relative;
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
.cover_up{
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
}
.cover_down{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
}
</style>