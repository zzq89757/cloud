<!--  -->
<template>
  <div class="pro">
    <product-item v-for="item in jsondata" :key="item.title">
      <img slot="picture" :src="item.src">
      <h5 slot="title">{{ item.title }}</h5>
      <p slot="content">{{ item.content }}</p>
    </product-item>
  </div>
</template>

<script>
import jsondata from "@/assets/json/toolMsg.json";
import ProductItem from './ProductItem.vue';
export default {
  data() {
    return {
      jsondata,
    };
  },

  components: {ProductItem},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.pro {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1400px;
  margin: 0 auto;
}

</style>