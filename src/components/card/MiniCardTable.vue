<!--  -->
<template>
  <div class="container">
    <mini-card v-for="item in cardContent" :key="item">

    </mini-card>
  </div>
</template>

<script>
import MiniCard from "./MiniCard.vue";
export default {
  data () {
    return {
      cardContent:[{},{},{},{},{},{}],
    };
  },

  components: {MiniCard},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='css' scoped>
.container{
  width: 1200px;
  display: flex;
  margin: auto;
  padding: 0px 200px;
}
</style>