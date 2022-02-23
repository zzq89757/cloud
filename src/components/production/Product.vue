<!--  -->
<template>
  <div class="pro">
    <product-item v-for="item in productList" :key="item.title" :product="item">
    </product-item>
    <h2>{{ data }}</h2>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  data() {
    return {
    };
  },
  props: {
    productList: {
      type: Array,
      requied: false,
      default: [],
    },
  },
  created() {

  },
  components: { ProductItem },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.pro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1400px;
  margin: 0 auto;
  background-image: "@/assets/img/onething.jpg";
}
</style>